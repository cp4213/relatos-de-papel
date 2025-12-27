import { useLocation } from "react-router-dom";
import avatar_usuario from '../../assets/images/user.png';

export default function CatalogItemDetail() {
    const { book } = useLocation().state;
    if (!book) {
        return <Navigate to="/" />;
    }
    const { url_caratula, titulo, descripcion, precio_usd, autor, stock } = book;
    const renderStock = () => {
        if (stock > 0) {
            return (<p className="m-0 text-success small">
                <span className="in-stock"></span>
                En stock: {stock}
            </p>)
        } else {
            return (<p className="m-0 text-danger small">
                <span className="sold-out"></span>
                Agotado
            </p>)
        }
    }
    return (
        <div className="container-detail">
            <div className="container-detail-image">
                <img src={url_caratula} alt={titulo} />
            </div>
            <div className="container-detail-content">
                <h1>{titulo}</h1>
                <p className="text-muted small">{autor}</p>
                <p>{descripcion}</p>
                <div className="d-flex align-items-center gap-2 mb-2">
                    <p className="fs-5 fw-bold m-0">${precio_usd}</p>
                    {renderStock()}
                </div>
                <button className="btn btn-dark mb-2">
                    <span className="me-2">🛒</span>
                    Añadir al carrito
                </button>
                <div className="alert alert-info" role="alert">
                    <p className="m-0"><b>Entrega Digital:</b> Recibe el acceso instantáneo tras la compra.</p>
                </div>
            </div>
            <div className="separator"></div>
            <div className="container-detail-reviews">
                <h4>Reseñas de la comunidad ⭐</h4>
                <div className="bg-body-tertiary p-4 rounded border">
                    <h6>Escribir una reseña</h6>
                    <textarea className="form-control mt-2 mb-2" placeholder="Escribe tu reseña aquí"></textarea>
                    <button className="btn btn-outline-dark">
                        Publicar reseña
                    </button>
                </div>
                <div className="d-flex gap-2">
                    {/* <img className="rounded-circle" src={avatar_usuario} alt="" style={{width: '40px', height: '40px'}} /> */}
                    <div className="bg-body-secondary p-3 rounded-circle border" style={{width: '40px', height: '40px'}}></div>
                    <div>
                        <h6>Usuario123 <span className="text-muted" style={{fontSize: '0.75rem', fontWeight: 'normal'}}>• Hace 2 días</span></h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}