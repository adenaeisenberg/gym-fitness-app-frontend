import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";
export function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            GymFit
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="./">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="./exercises">All Exercises</Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Account Settings
                </a>
                <ul className="dropdown-menu">
                  {localStorage.jwt === undefined ? (
                    <>
                      <li className="dropdown-item">
                        <Link to="./signup">Signup</Link>
                      </li>
                      <li className="dropdown-item">
                        <Link to="./login">Login</Link>
                      </li>
                    </>
                  ) : (
                    <li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      {/* added a /  */}

                      <li>
                        <LogoutLink />
                      </li>
                    </li>
                  )}
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
}
