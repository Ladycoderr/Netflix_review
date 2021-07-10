import React from "react";
import sdata from "../Sdata";
import Card from "../Card";


const Netflix = ()=> {
return( <Card
    key={sdata[1].id} //needs to be use whenever a map is used //
    imgscr={sdata[1].imgscr}
    title={sdata[1].title}
    sname={sdata[1].sname}
    link={sdata[1].link}
  />
);
}
export default Netflix;