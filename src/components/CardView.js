import { useEffect, useState } from "react";

export default function CardView({
  item,
  addItem,
  addItemCount,
  subItemCount,
  basketItem,
}) {
  // const myVisible = basketItem?.count ? true : false;
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(basketItem ? true : false);
  }, [basketItem]);
  
  function addProductToBasket() {
    if (count >= 0) {
      const newObj = { ...item, count: count };
      addItem(newObj);
      setCount(0);
      setIsVisible(true);
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
            <button
              onClick={() => addItemCount(item)}
              className="btn btn-primary btn-sm"
            >
              +
            </button>
            <span>{basketItem?.count || 0}</span>
            <button
              onClick={() => subItemCount(item)}
              className="btn btn-primary btn-sm"
            >
              -
            </button>
          </div>
        )}
        {!isVisible && <button onClick={addProductToBasket}>add</button>}
      </div>
    </div>
  );
}
