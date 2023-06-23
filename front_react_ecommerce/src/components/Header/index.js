import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  

 
    // funcao para verificar se o usuario esta logado
   function verificarLogado() {
     if (localStorage.getItem('token') !== null) {
       return true;
      }else{
        return false;
     }
   }

  // deslogar o usuario
  function deslogar() {
    localStorage.clear();
    
  }

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  


  if(verificarLogado()){

    return (

      <header className="p-3 mb-3 border-bottom">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <Link
              to="/"
              className="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none"
            >
              <svg
                className="bi me-2"
                width="40"
                height="32"
                role="img"
                aria-label="Bootstrap"
              >
                <use xlinkHref="#bootstrap"></use>
              </svg>
            </Link>
  
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <Link to="/" className="nav-link px-2 link-secondary">
                  Loja
                </Link>
              </li>
              <li>
                <Link to="#" className="nav-link px-2 link-body-emphasis">
                  Favoritos
                </Link>
              </li>
              <li>
                <Link to="#" className="nav-link px-2 link-body-emphasis">
                  Pedidos
                </Link>
              </li>
              <li>
                <Link to="#" className="nav-link px-2 link-body-emphasis">
                  Configurações
                </Link>
              </li>
            </ul>
  
            {/* carrinho */}
            <div className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 d-flex align-items-center">
              <Link type="button" class="btn btn-outline-danger" to="/carrinho">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-cart3"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
                </svg>
              </Link>
            </div>
  
              {/* login */}
            <div className="dropdown text-end">
              <button
                className="btn dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown" 
                onClick={toggleDropdown}
                aria-expanded={dropdownOpen ? "true" : "false"}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="currentColor"
                  className="bi bi-person-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  <path
                    fillRule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                  />
                </svg>
              </button>
              <ul
                className={`dropdown-menu text-small ${dropdownOpen ? "show" : ""}`} data-popper-placement="top-start"  aria-labelledby="dropdownMenuButton"
              >
                <li>
                  <Link className="dropdown-item"  to="#">
                    Favoritos
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Pedidos
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/atualizar">
                    Perfil
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/" onClick={deslogar}>
                    Sign out
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    );


  }else{

      return (

        <header className="p-3 mb-3 border-bottom">
          <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              <Link
                to="/"
                className="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none"
              >
                <svg
                  className="bi me-2"
                  width="40"
                  height="32"
                  role="img"
                  aria-label="Bootstrap"
                >
                  <use xlinkHref="#bootstrap"></use>
                </svg>
              </Link>
    
              <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li>
                  <Link to="/" className="nav-link px-2 link-secondary">
                    Loja
                  </Link>
                </li>
                <li>
                  <Link to="#" className="nav-link px-2 link-body-emphasis">
                  Destaques
                  </Link>
                </li>
                <li>
                  <Link to="#" className="nav-link px-2 link-body-emphasis">
                    Novidades
                  </Link>
                </li>
                <li>
                  <Link to="#" className="nav-link px-2 link-body-emphasis">
                    Informações
                  </Link>
                </li>
              </ul>
    
              {/* carrinho */}
              <div className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 d-flex align-items-center">
                <button type="button" class="btn btn-outline-danger">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-cart3"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
                  </svg>
                </button>
              </div>
    
                {/* login */}
              <div className="dropdown text-end">
                <button
                  className="btn dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown" 
                  onClick={toggleDropdown}
                  aria-expanded={dropdownOpen ? "true" : "false"}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="currentColor"
                    className="bi bi-person-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path
                      fillRule="evenodd"
                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                    />
                  </svg>
                </button>
                <ul
                  className={`dropdown-menu text-small ${dropdownOpen ? "show" : ""}`} data-popper-placement="top-start"  aria-labelledby="dropdownMenuButton"
                >
                  <li>
                    <Link className="dropdown-item"  to="/login">
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/cadastrar">
                      Cadastrar
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>
      );


  }

 
}

export default Header;
