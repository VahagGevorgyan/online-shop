import React from "react";
import "../Card.css";
import CardView from "./CardView";

export default function Card({ data, addItem, addItemCount, subItemCount }) {
  return (
    <div className="vuvu container">
      {data.length > 0 &&
        data.map((item) => {
          return (
            <CardView
              key={item.id}
              item={item}
              addItem={addItem}
              addItemCount={addItemCount}
              subItemCount={subItemCount}
            />
          );
        })}
    </div>
  );
}
