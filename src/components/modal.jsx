import "../modal.css";
import { useRef, useEffect } from "react";

export default function Modal(props) {
  const modalContentRef = useRef();

  const modalBodyClickHandler = (evt) => {
    if (
      evt.target !== modalContentRef.current &&
      !modalContentRef.current.contains(evt.target)
    ) {
    }
    return props.onClose();
  };
  useEffect(() => {
    document.addEventListener("click", modalBodyClickHandler, true);
    return () => {
      document.removeEventListener("click", modalBodyClickHandler, true);
    };
  }, []);
  return (
    <div className="modal-main" ref={modalContentRef}>
      {props.basketItems.map((item) => {
        return (
          <div key={item.id}>
            <span>{item.price}</span>
            <h4>{item.title}</h4>
            <img className="card-imgv" src={item.images[0]} />
            <span>{item.count}</span>
            <button onClick={() => props.onDelete(item.id)}>delete</button>
            <button onClick={() => props.addItemCount(item)}>+</button>
            <button onClick={() => props.subItemCount(item)}>-</button>
          </div>
        );
      })}
      <div className="footer">
        <button onClick={props.onClose} className="button">
          Close
        </button>
      </div>
    </div>
  );
}
