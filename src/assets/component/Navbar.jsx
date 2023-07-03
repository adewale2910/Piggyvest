import React from "react";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary nega">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/logo_08e6965627/logo_08e6965627.svg"
              alt="logo"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul
              id="right"
              className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
            >
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Save
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Invest
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Stories
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  FAQs
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Resources
                </a>

                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Ebook
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                    Calculator
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Comics
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <a
                class="btn btn-bordered cc "
                target="_blank"
                href="https://dashboard.piggyvest.com/login"
              >
                Sign in
              </a>

              <a
                class="btn  btn-primary"
                target="_blank"
                href="https://dashboard.piggyvest.com/register"
              >
                Create free account
              </a>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
