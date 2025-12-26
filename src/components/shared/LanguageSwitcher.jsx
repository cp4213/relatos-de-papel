import { useTranslation } from "react-i18next";

export default function LanguageSwitcher({ compact = false }) {
  const { i18n } = useTranslation();

  const currentLang = i18n.language || "es";

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="dropdown">
      <button
        className={`btn btn-outline-light ${compact ? "btn-sm" : "w-100"
          }`}
        data-bs-toggle="dropdown"
      >
        🌐 {!compact && currentLang.toUpperCase()}
      </button>

      <ul className="dropdown-menu">
        <li>
          <button className="dropdown-item" onClick={() => i18n.changeLanguage("es")}>
            ES
          </button>
        </li>
        <li>
          <button className="dropdown-item" onClick={() => i18n.changeLanguage("en")}>
            EN
          </button>
        </li>
      </ul>
    </div>
  );
}
