import React, { useState } from "react";
import PropTypes from "prop-types";

export default function About(props) {
  return (
    <div className="row align-items-end bcgl">
      <h1 className="display-1 text-center">About me.</h1>
      <figure className="text-center mt-n5">
        <blockquote className="blockquote">
          <p>Ming Dynasty Pussy, Got me acting unwise.</p>
        </blockquote>
        <figcaption className="blockquote-footer">
          Emperor Xuanzang, cited from <cite title="Source Title">Bible</cite>
        </figcaption>
      </figure>
      <div className="d-grid gap-2 col-2 mx-auto mt-5 col">
        <button className="btn btn-primary p-3" type="button">
          Click here to display a random quote.
        </button>
      </div>
    </div>
  );
}
