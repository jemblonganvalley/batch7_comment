import "./Card.css";

const Card = ({ from, message, date }) => {
  return (
    <div className="card">
      <h3 className="title"> {from} </h3>
      <p className="body"> {message} </p>
      <small className="date"> {date} </small>
    </div>
  );
};

export default Card;
