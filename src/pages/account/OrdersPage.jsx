import { useState, useEffect } from 'react';
import OrderItem from './OrderItem';
import { useAuth } from '../../context/AuthContext';
import './orders.css';

export default function OrdersPage() {
    const [expandedOrderId, setExpandedOrderId] = useState(null);
    const [orders, setOrders] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        if (user && user.email) {
            // Obtener pedidos del localStorage
            const pedidosKey = `pedidos_${user.email}`;
            const pedidosExistentes = localStorage.getItem(pedidosKey);
            
            if (pedidosExistentes) {
                try {
                    const pedidos = JSON.parse(pedidosExistentes);
                    
                    // Ordenar pedidos por fecha más reciente primero
                    pedidos.sort((a, b) => {
                        return new Date(b.fechaCompra) - new Date(a.fechaCompra);
                    });
                    
                    // Transformar los pedidos al formato esperado
                    const ordersFormatted = pedidos.map((pedido, index) => {
                        // Determinar el estado del pedido (por defecto 'warning' para nuevos pedidos)
                        const fechaCompra = new Date(pedido.fechaCompra);
                        const diasDesdeCompra = Math.floor((Date.now() - fechaCompra.getTime()) / (1000 * 60 * 60 * 24));
                        
                        let status = 'warning';
                        let statusText = 'En Tránsito';
                        
                        if (diasDesdeCompra > 7) {
                            status = 'success';
                            statusText = 'Entregado';
                        }
                        
                        // Formatear la fecha
                        const fechaFormateada = fechaCompra.toLocaleDateString('es-ES', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric'
                        });
                        
                        const dateText = status === 'success' 
                            ? `Entregado el ${fechaFormateada}`
                            : `Realizado el ${fechaFormateada}`;
                        
                        return {
                            id: pedido.idPedido || index,
                            orderNumber: pedido.idPedido?.replace('PED-', '') || index.toString(),
                            status: status,
                            statusText: statusText,
                            date: dateText,
                            price: pedido.totalPagado.toFixed(2),
                            images: pedido.urlsImagenes || []
                        };
                    });
                    handleOrderClick(ordersFormatted[0]?.id);
                    setOrders(ordersFormatted);
                } catch (error) {
                    console.error('Error al cargar pedidos desde localStorage:', error);
                    setOrders([]);
                }
            } else {
                setOrders([]);
            }
        }
    }, [user]);

    const handleOrderClick = (orderId) => {
        setExpandedOrderId(expandedOrderId === orderId ? null : orderId);
    };

    return (
        <div>
            <h4 className="mb-4">Mis Pedidos</h4>

            {orders.length === 0 ? (
                <p className="text-muted">No tienes pedidos realizados.</p>
            ) : (
                orders.map((order) => (
                    <div className='row mb-4' key={order.id}>
                        <OrderItem
                            orderNumber={order.orderNumber}
                            status={order.status}
                            statusText={order.statusText}
                            date={order.date}
                            price={order.price}
                            images={order.images}
                            isExpanded={expandedOrderId === order.id}
                            onClick={() => handleOrderClick(order.id)}
                        />
                    </div>
                ))
            )}
        </div>
    );
}