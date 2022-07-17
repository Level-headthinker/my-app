import React, { useState } from "react";

export default function TextForm(props) {
  const [text, settext] = useState("");
  const handleUpClick = () => {
    //console.log("you Clicked the upcase btn" + text);
    const newtxt = text.toUpperCase();
    settext(newtxt);
    props.showalert("Convert into Upper case","success")
  };
  const handlelowClick = () => {
    //console.log("you Clicked the upcase btn" + text);
    const newtxt = text.toLowerCase();
    settext(newtxt);
    props.showalert("Convert into Lower case","success")
  };
  const handleOnChange = (event) => {
    //console.log("handle On Change");
    settext(event.target.value);
  };
  return (
    <>
      <div className="container" style={{
              color: props.mode === "dark" ? "white" : "black"
            }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#6b6969" : "white",
              color: props.mode === "dark" ? "white" : "black"
            }}
            style1={{backgroundColor:props.mode1==="dark"?"#6b6969":"white",
                   color:props.mode==="dark"?"white":"black"
          }}
            id="text"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handlelowClick}>
          Convert Lowercase
        </button>
      </div>
      <div className="container"style={{
              color: props.mode === "dark" ? "white" : "black"
            }}>
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Time to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the text box"}</p>
      </div>
    </>
  );
}
