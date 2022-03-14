import React from "react";
import Basketicon from "./basket.svg";

export default function Headers(props) {
  
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <img
            onClick={props.openModal}
            src={Basketicon}
            style={{ width: "32px" }}
          />
          <span>{props.basketItems.reduce((acc,elmnt)=>{
             acc+=elmnt.count
             return acc
          },0)}</span>
        </div>
      </nav>
    </div>
  );
}
