import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import "./index.css";
import Navbar from "./Navbar.jsx";
import sdata from "./Sdata.jsx";



const App= ()=>(
  <>
    <Navbar />
    {sdata.map((val) => {
      /* {(favSeries==="Netflix")?<Netflix/>:<Amazon/>} */ //Create searchbar later//
      return( <Card
          key={val.id} //needs to be use whenever a map is used //
          imgscr={val.imgscr}
          title={val.title}
          sname={val.sname}
          link={val.link}
        />
      );
    })}
  </>
)
export default App;