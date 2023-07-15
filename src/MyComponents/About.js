import React from "react";

export default function About(props) {
  // const [myStyle, setMyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });

  // const [btnText, setbtnText] = useState("enable dark mode");

  // const toggleStyle = () => {
  //   if (myStyle.color === "black") {
  //     setMyStyle({
  //       color: "white",
  //       backgroundColor: "black",
  //     });
  //     setbtnText("enable light mode");
  //   } else {
  //     setMyStyle({ color: "black", backgroundColor: "white" });
  //     setbtnText("enable dark mode");
  //   }
  // };

  let myStyle = {
    color: props.mode === "dark" ? "white" : "rgb(57 58 62)",
    backgroundColor: props.mode === "dark" ? "rgb(57 58 62)" : "white",

    // border: "2px solid",
    // borderColor: props.mode === "dark" ? "white" : "rgb(57 58 62)",
  };

  return (
    <div
      className="container"
      style={{ color: props.mode === "dark" ? "white" : "rgb(57 58 62)" }}
    >
      <h1 className="my-3">About Us</h1>

      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              <strong>Analyse Your Text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              The Text Details Tool is a simple yet powerful utility that allows
              you to perform various operations on text, such as counting word
              and character frequencies, transforming case, capitalization, and
              removing spaces. Whether you need to analyze text data or modify
              the formatting of a document, this tool has got you covered.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              <strong>Free to Use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              an intuitive and versatile utility that is absolutely free to use! With this app, you can easily perform a range of operations on your text, all without spending a dime. Say goodbye to the hassle of finding costly software or subscriptions for your text manipulation needs.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              <strong> Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body " style={myStyle}>
              With browser compatibility, you can enjoy the benefits of the Text Details Tool on your desktop computer, laptop, or even your mobile devices. You can access it from anywhere, whether you're at home, in the office, or on the go. As long as you have an internet connection, our app is just a few clicks away.
            </div>
          </div>
        </div>

        <div className="dropdown my-4" style={myStyle} >
          <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Function of Text-detail App
          </button>
          <ul className="dropdown-menu" >
            <li><a className="dropdown-item" href="/">UpperCase to LoweCase</a></li>
            <li><a className="dropdown-item" href="/">Lowercase to UpperCase</a></li>
            <li><a className="dropdown-item" href="/">Copy the Text</a></li>
            <li><a className="dropdown-item" href="/">Remove the space</a></li>
           

          </ul>
        </div>
      </div>
      <div className="container">
        {/* <button
          onClick={toggleStyle}
          type="button "
          className="btn btn-primary my-3"
        >
          {btnText}
        </button> */}
      </div>
    </div>
  );
}
