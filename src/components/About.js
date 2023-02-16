import React, { useState } from "react";
import PropTypes from "prop-types";

export default function About(props) {
  return (
    <div className="d-flex justify-content-around flex-column mb-3 vh-100">
      <div className="p-2">
        <h1 className="display-1 text-center">About me.</h1>
      </div>
      <div className="p-2 flex-grow">
        <figure className="text-center mt-n5">
          <blockquote className="blockquote">
            <p>Ming Dynasty Pussy, Got me acting unwise.</p>
          </blockquote>
          <figcaption className="blockquote-footer">
            Emperor Xuanzang, cited from <cite title="Source Title">Bible</cite>
          </figcaption>
        </figure>
      </div>
      <div className="p-2 flex-row d-flex justify-content-center">
        <button type="button" className="btn btn-primary btn-lg p-3">
          Click here to get a random quote.
        </button>
      </div>
    </div>
  );
}
