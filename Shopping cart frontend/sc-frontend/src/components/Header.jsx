import React from "react";

const HeaderComponent = ({}) => {
  return (
    <div>
      <header>
        <nav
          className="navbar navbar-expand-lg navbar-light"
          style={{ backgroundColor: "#E8A2A2" }}
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="http://localhost:3000/home">
              E-Commerce
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse" id="navbarNav">
              <ul className="navbar-nav">
              <li className="nav-item">
                  <a
                    className="nav-link"
                    aria-current="page"
                    href="http://localhost:3000/home"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    aria-current="page"
                    href="http://localhost:3000/products"
                  >
                    Products
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="http://localhost:3000/addProduct"
                  >
                    Admin
                  </a>
                </li>
                <li className="nav-item" >
                  <a
                    className="nav-link"
                    href="http://localhost:3000/displayProducts"
                  >
                    User
                  </a>
                </li>
                <div >
                <span className="w-100 mr-auto">
                  <a
                    className="nav-link"
                    href="http://localhost:3000/cart"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="currentColor"
                      className="bi bi-cart"
                      viewBox="0 0 20 20"
                    >
                      <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                    
                    </svg>
                    <i className="bi bi-cart"></i>
                  </a>
                </span> 
                </div>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default HeaderComponent;
