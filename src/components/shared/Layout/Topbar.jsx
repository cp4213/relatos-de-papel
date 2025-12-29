import { useState, useEffect, useRef, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import { AppRoutes } from "../../../routes/appRoutes";
import userAvatar from "../../../assets/images/user.png";
import catalog_list from "../../../utilities/catalog_list.json";

const SEARCH_DELAY = 300;
const MAX_RESULTS = 5;

export default function Topbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [hasMoreResults, setHasMoreResults] = useState(false);
  const searchTimeoutRef = useRef(null);
  const searchContainerRef = useRef(null);

  const allItems = useMemo(
    () => catalog_list.pages.flatMap(page => page.items),
    []
  );

  useEffect(() => {
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }

    const term = searchInput.trim();
    
    if (!term) {
      setSearchResults([]);
      setHasMoreResults(false);
      setShowResults(false);
      return;
    }

    searchTimeoutRef.current = setTimeout(() => {
      const searchTerm = term.toLowerCase();
      const results = allItems.filter(item => {
        const searchText = `
          ${item.titulo}
          ${item.autor}
          ${item.descripcion}
        `.toLowerCase();
        return searchText.includes(searchTerm);
      });

      const limitedResults = results.slice(0, MAX_RESULTS);
      setSearchResults(limitedResults);
      setHasMoreResults(results.length > MAX_RESULTS);
      setShowResults(true);
    }, SEARCH_DELAY);

    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }
    };
  }, [searchInput, allItems]);


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target)
      ) {
        setShowResults(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleResultClick = (item) => {
    setShowResults(false);
    setSearchInput("");
    navigate(AppRoutes.bookDetail.replace(":id", item.titulo), {
      state: { book: item },
    });
  };

  const handleViewMore = () => {
    const searchTerm = searchInput.trim();
    if (searchTerm) {
      setShowResults(false);
      setSearchInput("");
      navigate(AppRoutes.home, {
        state: { searchTerm: searchTerm },
      });
    }
  };

  return (
    <nav className="navbar navbar-expand bg-light border-bottom px-3">
      
      {/* Search */}
      <div className="d-flex flex-grow-1 me-3 position-relative" ref={searchContainerRef}>
        <form className="w-100" onSubmit={(e) => e.preventDefault()}>
          <input
            className="form-control"
            type="search"
            placeholder="Buscar libros..."
            value={searchInput}
            onChange={handleSearchChange}
            onFocus={() => {
              if (searchResults.length > 0 || searchInput.trim()) {
                setShowResults(true);
              }
            }}
          />
        </form>

        {/* Dropdown de resultados */}
        {showResults && (
          <div
            className="position-absolute top-100 start-0 w-100 bg-white border rounded shadow-lg mt-1"
            style={{ zIndex: 1000, maxHeight: "400px", overflowY: "auto" }}
          >
            {searchResults.length === 0 && searchInput.trim() ? (
              <div className="p-3 text-muted text-center">
                No se encontraron resultados
              </div>
            ) : (
              <>
                {searchResults.map((item, index) => (
                  <button
                    key={`${item.titulo}-${item.autor}-${index}`}
                    className="dropdown-item text-start w-100 border-0 bg-transparent"
                    onClick={() => handleResultClick(item)}
                    style={{ cursor: "pointer" }}
                  >
                    <div className="fw-bold">{item.titulo}</div>
                    <div className="text-muted small">{item.autor}</div>
                  </button>
                ))}
                {hasMoreResults && (
                  <>
                    <hr className="my-1" />
                    <button
                      className="dropdown-item text-center fw-bold text-primary w-100 border-0 bg-transparent"
                      onClick={handleViewMore}
                      style={{ cursor: "pointer" }}
                    >
                      Ver más resultados
                    </button>
                  </>
                )}
              </>
            )}
          </div>
        )}
      </div>

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
