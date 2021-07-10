import React from "react";
import sdata from "./Sdata";
import Card from "./Card";


const Amazon = ()=> {
return( <Card
    key={sdata[3].id} //needs to be use whenever a map is used //
    imgscr={sdata[3].imgscr}
    title={sdata[3].title}
    sname={sdata[3].sname}
    link={sdata[3].link}
  />
);
}
export default Amazon;