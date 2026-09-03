import {useState} from 'react'

import "./Header.css";

function Header({ onMenuClick }) {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);


  return (
    <>
    <header className="header">

      <nav className="navbar navbar-expand-lg bg-white border-bottom">

        <div className="container-fluid px-4">

          {/* Menu Button */}
          <button
              className="btn btn-light me-3"
              onClick={onMenuClick}
            >
            <i className="bi bi-list fs-4"></i>
          </button>


          {/* Logo */}
          <a href="/" className="navbar-brand d-flex align-items-center me-4">

            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxvTdxftYG1LWyJiPriAFutjIuP9NLvuWPECxL1IBmWw&s=10"
              alt="Logo"
              width="42"
              height="42"
              className="me-2"
            />

            <div className="brand-text">
              <h5 className="mb-0">
                Go<span>TRI</span>
              </h5>

              <small className="text-secondary">
                Best HTML template
              </small>
            </div>

          </a>


          {/* Search */}
          <div className="input-group search-box me-4">

              <span className="input-group-text">
                <i className="bi bi-search"></i>
              </span>
              <input
                     type="search"
                     className="form-control"
                       placeholder="Search here..."
              />

  

               <button className="btn">
                   <i className="bi bi-sliders"></i>
               </button>

          </div>


          {/* Navigation */}
          <div className="navbar-nav main-navigation">

            {/* Pages */}
            <div className="nav-item dropdown">

              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Pages
              </a>

              <ul className="dropdown-menu">

                <li>
                  <a className="dropdown-item" href="#">
                    Profile
                  </a>
                </li>

                <li>
                  <a className="dropdown-item" href="#">
                    Company
                  </a>
                </li>

                <li>
                  <a className="dropdown-item" href="#">
                    Career
                  </a>
                </li>

                <li>
                  <a className="dropdown-item" href="#">
                    Forum
                  </a>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <a className="dropdown-item" href="#">
                    Help Center
                  </a>
                </li>

              </ul>

            </div>


            {/* Components */}
            <div className="nav-item dropdown">

              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Components
              </a>

              <div className="dropdown-menu components-dropdown p-3">

                <h6 className="fw-bold">
                  Creative & Unique Components
                </h6>

                <p className="small text-secondary">
                  Our components are flexible to adopt.
                  Use these to create new page.
                </p>

                <div className="row">

                  <div className="col-6">

                    <a className="dropdown-item" href="#">
                      <i className="bi bi-card-text me-2"></i>
                      Cards
                    </a>

                    <a className="dropdown-item" href="#">
                      <i className="bi bi-bar-chart me-2"></i>
                      Chartjs
                    </a>

                    <a className="dropdown-item" href="#">
                      <i className="bi bi-calendar me-2"></i>
                      Datepicker
                    </a>

                    <a className="dropdown-item" href="#">
                      <i className="bi bi-calendar3 me-2"></i>
                      Calendar
                    </a>

                  </div>

                  <div className="col-6">

                    <a className="dropdown-item" href="#">
                      <i className="bi bi-grid me-2"></i>
                      Collapse
                    </a>

                    <a className="dropdown-item" href="#">
                      <i className="bi bi-tag me-2"></i>
                      Pricing
                    </a>

                    <a className="dropdown-item" href="#">
                      <i className="bi bi-window me-2"></i>
                      Modal
                    </a>

                    <a className="dropdown-item" href="#">
                      <i className="bi bi-person me-2"></i>
                      Avatar
                    </a>

                  </div>

                </div>

              </div>

            </div>


            {/* Supportive */}
            <div className="nav-item dropdown">

              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Supportive
              </a>

              <ul className="dropdown-menu">

                <li>
                  <a className="dropdown-item" href="#">
                    Sign in
                  </a>
                </li>

                <li>
                  <a className="dropdown-item" href="#">
                    Sign up
                  </a>
                </li>

                <li>
                  <a className="dropdown-item" href="#">
                    Password
                  </a>
                </li>

                <li>
                  <a className="dropdown-item" href="#">
                    Error
                  </a>
                </li>

                <li>
                  <a className="dropdown-item" href="#">
                    Maintenance
                  </a>
                </li>

              </ul>

            </div>

          </div>


          {/* Right Side */}
          <div className="ms-auto d-flex align-items-center gap-2">


            {/* Weather */}
            <div className="weather d-flex align-items-center px-3">

              <h5 className="mb-0">
                36<span>°C</span>
              </h5>

              <div className="ms-2">
                <small className="text-secondary">
                  11:24am
                </small>

                <div className="small">
                  London
                </div>
              </div>

            </div>


            {/* Dark Mode */}
            <button className="btn btn-light">
              <i className="bi bi-sun"></i>
            </button>


            {/* Applications */}
            <div className="dropdown">

              <button
                className="btn btn-light"
                data-bs-toggle="dropdown"
              >
                <i className="bi bi-grid-3x3-gap"></i>
              </button>

              <div className="dropdown-menu dropdown-menu-end application-dropdown p-3">

                <h6 className="fw-bold">
                  Applications
                </h6>

                <p className="small text-secondary">
                  Make your app innovative
                </p>

                <div className="row g-2">

                  <div className="col-4">
                    <a href="#" className="app-item">
                      <i className="bi bi-bank"></i>
                      <strong>Finance</strong>
                      <small>Accounting</small>
                    </a>
                  </div>

                  <div className="col-4">
                    <a href="#" className="app-item">
                      <i className="bi bi-globe"></i>
                      <strong>Network</strong>
                      <small>Stabilize</small>
                    </a>
                  </div>

                  <div className="col-4">
                    <a href="#" className="app-item">
                      <i className="bi bi-box"></i>
                      <strong>Inventory</strong>
                      <small>Assuring</small>
                    </a>
                  </div>

                  <div className="col-4">
                    <a href="#" className="app-item">
                      <i className="bi bi-folder"></i>
                      <strong>Project</strong>
                      <small>Management</small>
                    </a>
                  </div>

                  <div className="col-4">
                    <a href="#" className="app-item">
                      <i className="bi bi-people"></i>
                      <strong>Social</strong>
                      <small>Tracking</small>
                    </a>
                  </div>

                  <div className="col-4">
                    <a href="#" className="app-item">
                      <i className="bi bi-book"></i>
                      <strong>Learning</strong>
                      <small>Make-easy</small>
                    </a>
                  </div>

                </div>

              </div>

            </div>


            {/* Language */}
            <div className="dropdown">

              <button
                className="btn btn-light"
                data-bs-toggle="dropdown"
              >
                <i className="bi bi-globe2"></i>
                <span className="ms-1">EN</span>
              </button>

              <ul className="dropdown-menu dropdown-menu-end">

                <li>
                  <a className="dropdown-item" href="#">
                    🇬🇧 English
                  </a>
                </li>

                <li>
                  <a className="dropdown-item" href="#">
                    🇫🇷 French
                  </a>
                </li>

                <li>
                  <a className="dropdown-item" href="#">
                    🇩🇪 German
                  </a>
                </li>

                <li>
                  <a className="dropdown-item" href="#">
                    🇮🇳 Hindi
                  </a>
                </li>

              </ul>

            </div>


            {/* Notification */}
            <div className="not-fi">
                <button className="btn btn-light notification-btn">
                    <i className="bi bi-bell"></i>

                  <span className="badge bg-danger">
                         9+
                  </span>
                </button>
            </div>

            {/* Profile */}
            <div className="dropdown">

              <button
                className="btn p-0"
                data-bs-toggle="dropdown"
              >

                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWKLUwXP-IKv2EBZcU_x5CXTJoo5_JaKqFHlZEcpN9WA&s=10"
                  alt="User"
                  className="profile-img"
                />

              </button>

              <div className="dropdown-menu dropdown-menu-end profile-dropdown p-2">

                <div className="d-flex align-items-center p-2 border-bottom mb-2">

                  <img
                    src="/assets/user.jpg"
                    alt="User"
                    className="profile-large"
                  />

                  <div className="ms-2">

                    <h6 className="mb-1">
                      AdminUIUX
                    </h6>

                    <small className="text-secondary">
                      🇺🇸 United States
                    </small>

                  </div>

                </div>

                <a className="dropdown-item" href="#">
                  <i className="bi bi-grid me-2"></i>
                  My Dashboard
                </a>

                <a className="dropdown-item" href="#">
                  <i className="bi bi-currency-dollar me-2"></i>
                  Earning
                </a>

                <a className="dropdown-item" href="#">
                  <i className="bi bi-gift me-2"></i>
                  Subscription
                </a>

                <a className="dropdown-item" href="#">
                  <i className="bi bi-file-text me-2"></i>
                  Statement
                </a>

                <a className="dropdown-item" href="#">
                  <i className="bi bi-gear me-2"></i>
                  Account Setting
                </a>

                <hr className="dropdown-divider" />

                <a className="dropdown-item text-danger" href="#">
                  <i className="bi bi-box-arrow-right me-2"></i>
                  Logout
                </a>

              </div>

            </div>

          </div>

        </div>

      </nav>
    </header>
  
    </>
    
  );
}

export default Header;
