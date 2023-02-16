import React, { useState } from "react";

export default function About(props) {
  const emojis = [
    "😀",
    "😂",
    "🤣",
    "😍",
    "😎",
    "🤔",
    "😴",
    "🤯",
    "👀",
    "🙌",
    "🤩",
    "🥳",
    "🤪",
    "😇",
    "😋",
    "🥰",
    "😷",
    "🤗",
    "😢",
    "🤫"
  ];

  const incCount = () => {
    setCountText(countText + 1);
    const k = emojis[Math.floor(Math.random() * emojis.length)];
    setEmoji(k);
  };

  const [countText, setCountText] = useState(0);
  const [emoji, setEmoji] = useState("💖");
  return (
    <div className="d-flex justify-content-around flex-column mb-3 vh-100">
      <div className="p-2">
        <h1 className="display-1 text-center"> {emoji} About me.</h1>
      </div>
      <div className="p-1">
        <figure className="text-center mt-n5">
          <blockquote className="blockquote">
            <p>Ming Dynasty Pussy, Got me acting unwise.</p>
          </blockquote>
          <figcaption className="blockquote-footer">
            Emperor Xuanzang, cited from{" "}
            <cite title="Source Titles">Bible</cite>
          </figcaption>
        </figure>
      </div>
      <div className="p-2 flex-row d-flex justify-content-center">
        <button
          type="button"
          className="btn btn-primary btn-lg p-3"
          onClick={incCount}
        >
          Click here to get a random quote. (Used {countText} times.)
        </button>
      </div>
    </div>
  );
}
