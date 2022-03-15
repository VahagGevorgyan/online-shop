import { useState } from "react";

export default function CardView({ item, addItem,addItemCount,subItemCount }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  function sub() {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  }
  return (
    <div className="card card-size" key={item.id}>
      {<img src={item.images[0]} className="card-img-top" alt="..." />}
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
      </div>
      <div className="buttons">
        {isVisible && (
          <div>
            <button onClick={() => addItemCount(item)} className="btn btn-primary btn-sm">
              +
            </button>
            <span>{item.count}</span>
            <button onClick={() => subItemCount(item)} className="btn btn-primary btn-sm">
              -
            </button>
          </div>
        )}
        {!isVisible && (
          <button
            onClick={() => {
              if (count >= 0) {
                const newObj = { ...item, count: count };
                addItem(newObj);
                setCount(0);
                setIsVisible(true);
              }
            }}
          >
            add
          </button>
        )}
      </div>
    </div>
  );
}
