import Card from "../card/card.component";
import "./card-container.styles.css";

const CardContainer = () => {
  return (
    <div className="card-container">
      <Card name="Pizza" cal="55" />
      <Card name="Burger" cal="100" />
      <Card name="Coke" cal="59" />
      <Card name="Browne" cal="37" />
      <Card name="Fried Rice" cal="63" />
      <Card name="Lassania" cal="44" />
    </div>
  );
};

export default CardContainer;
