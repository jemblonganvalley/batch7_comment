import "./Card.css";

const Card = ({ title, body }) => {
  return (
    <div className="card">
      <h3 className="card_title"> {title} </h3>
      <p className="card_body">{body}</p>
    </div>
  );
};

export default Card;
