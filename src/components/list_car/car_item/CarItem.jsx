import "./car_item.css";
import Card from "../../UI/Card";
import CarDate from "../car_date/CarDate";

const CarItem = (props) => {
  return (
    <li>
      <Card className="car-item">
        <CarDate date={props.date} />
        <div className="car-item__name">
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </div>
        <div className="car-item__description">
          <div className="car-item__stock">
            <h3>Stock : {props.stock}</h3>
            <div className="car-item__price">{props.amount}</div>
          </div>
        </div>
      </Card>
    </li>
  );
};

export default CarItem;
