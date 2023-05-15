import "./car_item.css";
import CarDate from "../car_date/CarDate";

const CarItem = (props) => {
  return (
    <li className="car-item">
      <CarDate date={props.date} />
      <div className="car-item__name">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
      <div className="car-item__description">
        <div className="car-item__stock">
          <h3>Stock : {props.stock}</h3>
          <div className="car-item__price">Rp {props.amount}</div>
        </div>
      </div>
    </li>
  );
};

export default CarItem;
