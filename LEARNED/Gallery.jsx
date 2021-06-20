import React from "react";
const img = "https://picsum.photos/200/300";
const img1 = "https://picsum.photos/250/300";
const img2 = "https://picsum.photos/300/300";
function Gallery() {
  return (
    <div className="img_div">
      <img src={img} alt="randomimages" />
      <img src={img1} alt="randomimages" />
      <img src={img2} alt="randomimages" />;
    </div>
  );
}
export default Gallery;
