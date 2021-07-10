import React from "react";
import Images from "./Images"

function Card(props) {
  return (
    <>
      <div className="cards">
        <div className="card">
          <Images imgscr={props.imgscr}/>
          <div className="card__info">
            <span className="card__category">{props.title}</span>
            <h3 className="card_title">{props.sname}</h3>
            <div className="btn">
              <a href={props.link} target="_blank">
                <button>Watch now</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
