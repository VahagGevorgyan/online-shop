import "./App.css";
import Card from "./components/card.js";
import { useEffect, useState } from "react";
import Headers from "./components/header.js";
import Modal from "./components/modal";

function App() {
  const [data, setData] = useState([]);
  const [basketItems, setBasketItems] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);

  function addItem(obj) {
    setBasketItems((prev) => [...prev, obj]);
  }
  function deletProductFromBusket(id) {
    setBasketItems(basketItems.filter((item) => id !== item.id));
  }
  function addItemCount(item) {
    setBasketItems((prev) =>
      prev.map((el) =>
        el.id === item.id ? { ...el, count: el.count + 1 } : el
      )
    );
  }
  function subItemCount(item) {
    setBasketItems((prev) =>
      prev.map((el) =>
        el.id === item.id && el.count > 0 ? { ...el, count: el.count - 1 } : el
      )
    );
  }
  function openModal() {
    setIsOpenModal(true);
  }
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setData(data.products));
  }, []);
  return (
    <div className="container">
      <Headers basketItems={basketItems} openModal={openModal} />
      <Card
        data={data}
        addItem={addItem}
        addItemCount={addItemCount}
        subItemCount={subItemCount}
        basketItems={basketItems}
      />
      {isOpenModal && (
        <Modal
          onClose={() => setIsOpenModal(false)}
          basketItems={basketItems}
          onDelete={deletProductFromBusket}
          addItemCount={addItemCount}
          subItemCount={subItemCount}
        />
      )}
    </div>
  );
}

export default App;
