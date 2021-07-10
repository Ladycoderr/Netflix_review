import React from 'react';
import Heading from "./Heading.jsx";
import Gallery from "./Gallery";
import {add,mul,div,sub} from "./Cal.jsx"
function App(){
    return <>
        <Heading />
    <Gallery/>
   <h1><li>addition is {add(40,4)}</li>
   <li>multiplications is {mul(40,4)
   }</li>
   <li>division is {div(22,7)}</li>
   <li>substaction is {sub(20,2)}</li>
   </h1>
</>
}
export default App; 