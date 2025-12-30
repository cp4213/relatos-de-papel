import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { AppRoutes } from "../../../routes/appRoutes";
import { useAuth } from "../../../context/AuthContext";
import LanguageSwitcher from "../LanguageSwitcher";

export default function Sidebar() {
  const { isAuthenticated } = useAuth();
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

  return (
    <div
      className={`d-flex flex-column bg-dark text-white vh-100 p-3 ${collapsed ? "sidebar-collapsed" : "sidebar-expanded"
        }`}
      style={{ width: collapsed ? "80px" : "240px", transition: "width 0.3s" }}
    >
      <div className={`d-flex ${collapsed ? "justify-content-center" : "justify-content-between"} align-items-center mb-4`}>
        {!collapsed && <h5 className="mb-0">Relatos de Papel</h5>}
        <button
          className="btn btn-sm btn-outline-light"
          onClick={() => setCollapsed(!collapsed)}
        >
          ☰
        </button>
      </div>

      {/* Navigation */}
      <ul className="nav nav-pills flex-column mb-auto">
        {!isAuthenticated && (
          <li className="nav-item">
            <NavLink className="nav-link text-white" to={AppRoutes.auth}>
              🔒 {!collapsed && t("navigation.login")}
            </NavLink>
          </li>
        )}
        <li className="nav-item">
          <NavLink className="nav-link text-white" to={AppRoutes.home}>
            📚 {!collapsed && t("navigation.catalog")}
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white" to={AppRoutes.cart}>
            🛒 {!collapsed && t("navigation.cart")}
          </NavLink>
        </li>
        {
          isAuthenticated && (
            <li className="nav-item">
              <NavLink className="nav-link text-white" to={AppRoutes.private.orders}>
                🧾 {!collapsed && t("navigation.orders")}
              </NavLink>
            </li>
          )
        }
      </ul>

      {/* Language */}

      <div className="mt-auto text-center">
        <LanguageSwitcher compact={collapsed} />
      </div>

    </div>
  );
}
