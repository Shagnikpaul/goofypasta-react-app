import React from "react";


export default function Navbar(props) {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary bg-dark"
        data-bs-theme={props.mode}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="https://www.reddit.com/r/copypasta">
            <img
              src="https://media.tenor.com/0pO-d7FH3QgAAAAj/spongebob-meme-spongebob.gif"
              alt="Bootstrap"
              width="40"
              height="40"
            />
            {props.topTitle} {props.kok}
          </a>
          <input
            type="checkbox"
            className="btn-check"
            id="btn-check"
            autoComplete="off"
            onClick={props.toggle}
          />
          <label className="btn btn-outline-primary" htmlFor="btn-check">
            {props.modeText}
          </label>
        </div>
      </nav>
    </div>
  );
}
