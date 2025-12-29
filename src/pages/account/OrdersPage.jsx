import { MdOutlineLocalShipping } from "react-icons/md";
import { FaTimes, FaExclamationTriangle } from "react-icons/fa";
import imagen from '../../assets/images/error400-cover.png';
import './orders.css';
export default function OrdersPage() {
    return (
        <div>
            <h4 className="mb-4">Mis Pedidos</h4>
            <div className="card p-3 col-12 mb-4">
                <div className="d-flex justify-content-between mb-2">
                    <h5 className="m-0">Pedido #1234</h5>
                    <span className="badge text-bg-warning">En Transito</span>
                </div>
                <div className="d-flex justify-content-between">
                    <span className="text-muted small">Realizado el 10 Dic 2025</span>
                    <span><b>$100.00</b></span>
                </div>
                <div className="border-top border-bottom py-3">
                    <img src={imagen} alt="Libro 1" className="order-image" />
                    <img src={imagen} alt="Libro 1" className="order-image" />
                </div>
                <div className="d-flex py-2 gap-2">
                    <button className='btn btn-outline-dark d-flex align-items-center gap-2'>
                        <MdOutlineLocalShipping /> Rastrear Envío
                    </button>
                    <button className='btn btn-outline-danger d-flex align-items-center gap-2'>
                        <FaTimes /> Cancelar Pedido
                    </button>
                    <button className='btn btn-outline-warning d-flex align-items-center gap-2'>
                        <FaExclamationTriangle /> Reportar un problema
                    </button>

                </div>

            </div>

            <div className="card p-3 col-12 order-card">
                <div className="d-flex justify-content-between mb-2">
                    <h5 className="m-0">Pedido #4648</h5>
                    <span className="badge text-bg-success">Entregado</span>
                </div>
                <div className="d-flex justify-content-between">
                    <span className="text-muted small">Entregado hace 2 meses</span>
                </div>
            </div>
        </div>
    )
}