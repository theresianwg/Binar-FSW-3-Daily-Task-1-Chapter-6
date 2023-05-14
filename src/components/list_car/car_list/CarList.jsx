import "./car_list.css";
import CarItem from "../car_item/CarItem";

const CarList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="car-list-notfound">Car not found.</h2>;
  }
  return (
    <ul className="car-list">
      {props.items.map((item) => (
        <CarItem key={item.id} title={item.title} description={item.description} stock={item.stock} amount={item.amount} date={item.date} />
      ))}
    </ul>
  );
};

export default CarList;
