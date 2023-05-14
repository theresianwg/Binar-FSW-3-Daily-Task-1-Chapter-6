import "./car_date.css";

const CarDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className="car-date">
      <div className="car-date__month">{month}</div>
      <div className="car-date__day">{day}</div>
      <div className="car-date__year">{year}</div>
    </div>
  );
};

export default CarDate;
