import { Link } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import { AppRoutes } from "../../../routes/appRoutes";
import userAvatar from "../../../assets/images/user.png";
export default function Topbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar navbar-expand bg-light border-bottom px-3">
      
      {/* Search */}
      <form className="d-flex flex-grow-1 me-3">
        <input
          className="form-control"
          type="search"
          placeholder="Buscar libros..."
        />
      </form>

      {/* Profile */}
      <div className="dropdown">
        <button
          className="btn btn-light dropdown-toggle d-flex align-items-center"
          data-bs-toggle="dropdown"
        >
          <img
            src={user?.avatar || userAvatar}
            alt="avatar"
            className="rounded-circle me-2"
            style={{ width: "32px", height: "32px" }}
          />
          {user?.email}
        </button>

        <ul className="dropdown-menu dropdown-menu-end">
          <li>
            <Link className="dropdown-item" to={AppRoutes.private.profile}>
              Mi cuenta
            </Link>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <button className="dropdown-item text-danger" onClick={logout}>
              Cerrar sesión
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
