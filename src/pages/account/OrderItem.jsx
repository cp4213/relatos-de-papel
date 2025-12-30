import { useTranslation } from "react-i18next";
import { MdOutlineLocalShipping } from "react-icons/md";
import { FaTimes, FaExclamationTriangle } from "react-icons/fa";
import imagen from '../../assets/images/error400-cover.png';
import './orders.css';

export default function OrderItem({
                                      orderNumber,
                                      status, // 'success', 'warning', etc.
                                      statusText,
                                      date,
                                      price,
                                      images = [],
                                      isExpanded,
                                      onClick
                                  }) {
    const { t } = useTranslation();
    // Determinar si el pedido está entregado (success)
    const isDelivered = status === 'success';
    // Determinar si el pedido está en tránsito
    const isInTransit = status === 'warning';
    // Determinar si el pedido está cancelado
    const isCancelled = status === 'canceled';

    return (
        <div 
            className={`card p-3 col-12 ${!isExpanded ? 'order-card' : ''}`}
            style={{ cursor: 'pointer' }}
            onClick={onClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onClick();
                }
            }}
            aria-expanded={isExpanded}
        >
            <div className="d-flex justify-content-between mb-2">
                <h5 className="m-0">{t('orders.orderNumber')}{orderNumber}</h5>
                <span className={`badge text-bg-${status}`}>{statusText}</span>
            </div>
            <div className="d-flex justify-content-between">
                <span className="text-muted small">{date}</span>
                {price && <span><b>${price}</b></span>}
            </div>
            
            <div className={`order-content ${isExpanded ? 'order-content-expanded' : 'order-content-collapsed'}`}>
                <div className="border-top border-bottom py-3">
                    {images.length > 0 ? (
                        images.map((img, index) => (
                            <img 
                                key={index} 
                                src={img} 
                                alt={`${t('orders.book')} ${index + 1}`} 
                                className="order-image"
                                onError={(e) => {
                                    e.target.src = imagen;
                                }}
                            />
                        ))
                    ) : (
                        <>
                            <img src={imagen} alt={`${t('orders.book')} 1`} className="order-image" />
                            <img src={imagen} alt={`${t('orders.book')} 2`} className="order-image" />
                        </>
                    )}
                </div>
                <div className="d-flex flex-column flex-md-row py-2 gap-2">
                    <button 
                        className='btn btn-outline-dark order-button-responsive'
                        onClick={(e) => e.stopPropagation()}
                        disabled={!isInTransit} // Solo habilitado si está en tránsito
                        title={isInTransit ? t('orders.trackShipping') : t('orders.trackShippingNotAvailable')}
                    >
                        <MdOutlineLocalShipping /> {t('orders.trackShipping')}
                    </button>
                    <button 
                        className='btn btn-outline-danger order-button-responsive'
                        onClick={(e) => {
                            e.stopPropagation();
                            if (!isDelivered && !isCancelled) {
                                // Lógica para cancelar pedido
                                console.log(`Cancelando pedido #${orderNumber}`);
                            }
                        }}
                        disabled={isDelivered || isCancelled} // Deshabilitado si está entregado o cancelado
                        title={isDelivered
                            ? t('orders.cancelOrderNotAvailable')
                            : isCancelled
                                ? t('orders.orderAlreadyCancelled')
                                : t('orders.cancelOrder')
                        }
                    >
                        <FaTimes /> {t('orders.cancelOrder')}
                        {isDelivered && <span className="visually-hidden"> ({t('orders.trackShippingNotAvailable')})</span>}
                    </button>
                    <button 
                        className='btn btn-outline-warning order-button-responsive'
                        onClick={(e) => e.stopPropagation()}
                        disabled={isCancelled} // Deshabilitado si está cancelado
                        title={isCancelled ? t('orders.reportProblemNotAvailable') : t('orders.reportProblem')}
                    >
                        <FaExclamationTriangle /> {t('orders.reportProblem')}
                    </button>
                </div>
            </div>
        </div>
    );
}