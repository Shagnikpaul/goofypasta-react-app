import React, { useState } from "react";
import {randomPostFromSub} from "justreddit";

export default function About(props) {
  const emojis = [
    "😀",
    "😂",
    "☠",
    "😍",
    "😎",
    "💀",
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
    "🗿",
    "🤗",
    "😳",
    "🤫",
  ];


  const incCount = () => {
    setPara("LOADING... PLEASE FUCKING WAIT.")
    setDis(true);
    setCountText(countText + 1);
    const k = emojis[Math.floor(Math.random() * emojis.length)];
    setEmoji(k);
    const options = { subReddit: "copypasta", sortType: "top", postGetLimit:10,excludeRaw:false};
    randomPostFromSub(options).then((result) => {
      setPara(result['content']);
      setInfo({author:result['author'], title:result['title'], url:result['url']});
      setDis(false);
    });
  };

  const [countText, setCountText] = useState(0);
  const [emoji, setEmoji] = useState("💖");
  const [para, setPara] = useState("IDK WHAT IS THIS");
  const [info, setInfo] = useState({author:"JOE MAMA", title:"WHO IS JOE", url:"www.google.com"});
  const [distate, setDis] = useState(false);
  return (
    <div
      data-bs-theme={props.mode}
      className="d-flex justify-content-center flex-column  bg-body container p-5"
    >
      <div className="p-2">
        <h1 className="display-1 text-center"> {emoji} COPYPASTA GRABBER.</h1>
      </div>
      <div className="p-2 flex-row d-flex justify-content-center  mt-3">
        <button
          type="button"
          className="btn btn-primary btn-lg p-3"
          onClick={incCount}
          disabled={distate}
        >
          Click here to get a random cursed sentence.
        </button>
      </div>
      <p className="text-center mb-5"> {(countText==0)?"Press the button! 😳😳":(countText==1?"Used 1 time.":`Used ${countText} times.`)}</p>
      <div className="">
        <h4 className="text-center mb-4">
          <a href={info["url"]}>{info["title"]}</a>
        </h4>
        <figure className="text-center">
          <figcaption className="blockquote-footer">
            {info["author"]}, cited from
            <cite title="Source Titles"> {"r/copypasta"}</cite>
          </figcaption>
          <blockquote className="blockquote">
            <p className="text-break">{para}</p>
          </blockquote>
        </figure>
      </div>
    </div>
  );
}
