import "./card.styles.css";

const Card = ({ name, cal }) => {
  return (
    <div className="card">
      <h1>{name}</h1>
      <h2>you have consumed {cal} cal today</h2>
    </div>
  );
};

export default Card;
