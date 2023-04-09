import React, { useState, useEffect} from "react";
const { reddit} = require("@kindl3d/reddit.js");
export default function About(props) {
  let debug_count = 0
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
  let stylefortextarea = `min-vh-100 pt-5 bg${props.mode} px-5`;
  const [countText, setCountText] = useState(0);
  const [emoji, setEmoji] = useState("💖");
  const [copybutton, setCopy] = useState("Copy");
  const [para, setPara] = useState("IDK WHAT IS THIS");
  const [info, setInfo] = useState({
    author: "JOE MAMA",
    title: "WHO IS JOE",
    url: "https://www.reddit.com/r/copypasta",
  });
  const [distate, setDis] = useState(false); 
  
  
  const copy = () => {
    navigator.clipboard.writeText(para);
    setCopy("Copied to clipboard.");
    setTimeout(copyfunc, 1000)
  }
  
  function copyfunc(){
    setCopy("Copy")
  }

  const incCount = () => {
    setPara("LOADING... PLEASE FUCKING WAIT.")
    setDis(true);
    setInfo({
      author: "LOADING",
      title: "LOADING",
      url: "www.google.com",
    });
    setCountText(countText + 1);
    const k = emojis[Math.floor(Math.random() * emojis.length)];
    setEmoji(k);
    reddit("copypasta").then( post => {
        setPara(post['text']);
        setInfo({author:post['author'], title:post['title'], url:post['permalink']});
        setDis(false);
    });
}
 useEffect(() => {
  debug_count++;
  if(debug_count == 1){
    return;
  }
   reddit("copypasta").then((post) => {
     setPara(post["text"]);
     setInfo({
       author: post["author"],
       title: post["title"],
       url: post["permalink"],
     });
     setDis(false);
   });
 }, []);

  
  return (
    <div
      data-bs-theme={props.mode}
      className="d-flex justify-content-center flex-column  bg-body container p-5"
    >
      <div className="p-2">
        <h1 className="display-1 text-center">
          {emoji} COPYPASTA FROM REDDIT. {emoji}
        </h1>
      </div>
      <div className="p-2 flex-row d-flex justify-content-center  mt-3">
        <button
          type="button"
          className="btn btn-primary btn-lg p-3"
          onClick={incCount}
          disabled={distate}
        >
          Click here to get a random cursed copypasta.
        </button>
      </div>
      <p className="text-center mb-5">
        {countText === 0
          ? "Press the button! 😳😳"
          : countText === 1
          ? "Used 1 time."
          : `Used ${countText} times.`}
      </p>
      <div className={stylefortextarea}>
        <h4 className="text-center mb-4">
          <a href={info["url"]} target="_blank">
            {info["title"]}
          </a>
        </h4>
        <figure className="text-center">
          <figcaption className="blockquote-footer">
            {info["author"]}, cited from
            <cite title="Source Titles">
              {" "}
              <a href="https://www.reddit.com/r/copypasta" target="_blank">
                r/copypasta
              </a>
            </cite>
          </figcaption>
          <button onClick={copy} className="btn btn-primary p-2 btn-lg mb-5 mt-1">📋 {copybutton}</button>
          <br></br>
          <blockquote className="blockquote">
            <p className="text-break">{para}</p>
          </blockquote>
        </figure>
      </div>
    </div>
  );
}
