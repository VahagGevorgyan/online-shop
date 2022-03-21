import React from "react";
import "../Card.css";
import CardView from "./CardView";

export default function Card({
  data,
  addItem,
  addItemCount,
  subItemCount,
  basketItems,
}) {
  return (
    <div className="vuvu container">
      {data.map((item) => {
        return (
          <CardView
            key={item.id}
            item={item}
            addItem={addItem}
            addItemCount={addItemCount}
            subItemCount={subItemCount}
            basketItem={basketItems.find((elmnt) => elmnt.id === item.id
            )}
          />
        );
      })}
    </div>
  );
}
