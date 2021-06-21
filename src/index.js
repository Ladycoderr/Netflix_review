import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

//react dom converts this js in html file ,
//dom is used to use html in javascript files
//render returns the value which should be shown on desktop
//{ } to write js inside jsx ,, only operations can be done noot statement if else foor
// const name = "shivangi Mishra";
// var newdate = new Date();

//to use css inside jsx create structure like object of javascript {{Write inline css}}{}
//js objects written inside it//

// function ncard(val){
//   return(<Card
//   imgscr={val.imgscr}
//   title={val.title}
//   sname={val.sname}
//   link={val.sname}
// />
// );
//  }

ReactDOM.render(
  <App/>,
  document.getElementById("root")
);
