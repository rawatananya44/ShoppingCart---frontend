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
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default HeaderComponent;
