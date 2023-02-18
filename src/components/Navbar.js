import React from "react";
export default function Navbar(props) {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary bg-dark"
        data-bs-theme={props.mode}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              src="https://i.imgur.com/KAv6TlH.png"
              alt="Bootstrap"
              width="30"
              height="30"
            />
            {props.topTitle},{props.kok}
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
                <a className="nav-link active" aria-current="page" href="/">
                  home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Link
                </a>
              </li>
            </ul>
            <input
              type="checkbox"
              className="btn-check"
              id="btn-check"
              autoComplete="off"
              onClick={props.toggle}
            />
            <label
              className="btn btn-outline-primary d-flex align-items-center"
              htmlFor="btn-check"
            >{props.modeText}</label>
          </div>
        </div>
      </nav>
    </div>
  );
}
