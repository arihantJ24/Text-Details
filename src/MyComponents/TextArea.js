import React, { useState } from "react";

export default function TextArea(props) {
  // event - make the leeter to uppercase
  const handleUpClick = () => {
    // console.log("uppercase clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  // event - make the letter to lowercase
  const handleLowClick = () => {
    // console.log("Lowercase clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };

  // event - make the text area clear
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };

  // event - make the text area capitilise
  const handleCapClick = () => {
    const str = text;
    const arr = str.split(" ");
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    const str2 = arr.join(" ");

    setText(str2);
  };
  const handleCopy = () => {
    // var text = document.getElementById("myBox");
    // text.select();
    navigator.clipboard.writeText(text);
    props.showAlert("copy to clipboard", "success");
  };

  const handleExtraSpace = () => {
    let newText = text.split(/[ ] + /);
    setText(newText.join(" "));
  };

  // event -  for typing the value, use for using the state
  const handleOnChange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  // text = " NEW TEXT"; wrong way to change the state
  // setText("new text"); correct way to us it

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "rgb(57 58 62)" }}
      >
        <h1 className="text-center mb-3">{props.heading} </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor:
                props.mode === "dark" ? "rgb(57 58 62)" : "white ",
              color: props.mode === "dark" ? "white" : "rgb(57 58 62)",
            }}
            placeholder="Write your text here..." 
            
            id="myBox"
            rows="6"
          ></textarea>
        </div>
        <button
          className="btn btn-secondary mx-2 my-2"
          disabled={text.length === 0}
          onClick={handleUpClick}
        >
          Convert to UpperCase
        </button>

        <button
          disabled={text.length === 0}
          className="btn btn-secondary mx-2  my-2"
          onClick={handleLowClick}
        >
          Convert to LowerCase
        </button>

        <button
          disabled={text.length === 0}
          className="btn btn-secondary mx-2  my-2"
          onClick={handleCapClick}
        >
          Capitilise the Text
        </button>

        <button
          disabled={text.length === 0}
          className="btn btn-secondary mx-2  my-2"
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-secondary mx-2  my-2"
          onClick={handleExtraSpace}
        >
          Remove Extra Space
        </button>
        <button
          className="btn btn-danger mx-2  my-2"
          disabled={text.length === 0}
          onClick={handleClearClick}
        >
          Clear Text
        </button>
      </div>

      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "rgb(57 58 62)" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {" "}
          <span className="badge bg-secondary">
            {" "}
            {/* this method use to remove the space  */}
            {
              text.split(/\s+/).filter((element) => {
                return element.length !== 0;
              }).length
            }
          </span>{" "}
          Words and <span className="badge bg-secondary"> {text.length}</span>{" "}
          Characters.
        </p>
        <div style={{ height: '70px' }}></div>
        {/* <h2>preview</h2>
        <p>{text}</p> */}
      </div>
    </>
  );
}
