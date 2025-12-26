import { Link, Navigate, Route, Routes } from "react-router"
import error404 from "../assets/images/error400-cover.png"

const Error404 = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center h-100">
      <img src={error404} alt="Error 404" className="w-50" />
      <h1>Página no encontrada</h1>
      <p>La página que estás buscando no existe.</p>
      <Link to="/">Volver a la página principal</Link>
    </div>
  )
}
export default function RoutesWithNotFound({ children }) {
  return (
    <Routes>
      {children}
      <Route path="*" element={<Navigate to="/404" />} />
      <Route path="/404" element={<Error404 />} />
    </Routes>
  )
}