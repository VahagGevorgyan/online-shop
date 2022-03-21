import "../modal.css";

export default function Modal(props) {
  return (
    <div className="modal-main">
      {props.basketItems.map((item) => {
        console.log(item);
        return (
          <div key={item.id}>
            <span>{item.price}</span>
            <h4>{item.title}</h4>
            <img className="card-imgv" src={item.images[0]} />
            <span>{item.count}</span>
            <button onClick={()=>props.onDelete(item.id)}>delete</button>
            <button onClick={()=>props.addItemCount(item)}>+</button>
            <button onClick={()=>props.subItemCount(item)}>-</button>

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
