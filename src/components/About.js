import React from "react";
import PropTypes from "prop-types";

export default function About(props) {
  return (
    <div>
      <h1 className="display-1 text-center">About me.</h1>
      <figure className="text-center">
        <blockquote className="blockquote">
          <p>Ming Dynasty Pussy, Got me acting unwise.</p>
        </blockquote>
        <figcaption className="blockquote-footer">
          Emperor Xuanzang, cited from <cite title="Source Title">Bible</cite>
        </figcaption>
      </figure>
    </div>
  );
}
