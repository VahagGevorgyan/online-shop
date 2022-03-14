import "../modal.css";

export default function Modal(props) {
  return (
    <div className="modal-main">
      {props.basketItems.map((item) => {
        console.log(item);
        return (
          <div>
            <p>{item.price}</p>
            <h4>{item.title}</h4>
            <img className="card-imgv" src={item.images[0]} />
            <p>{item.count}</p>
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
