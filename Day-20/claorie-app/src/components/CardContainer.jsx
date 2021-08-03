import { useState } from "react";
import Card from "./Card";

const CardContainer = (props) => {
  const arr = [
    {
      food: "Lasagna",
      calorie: "430",
    },
    {
      food: "Fettuccine Alfredo",
      calorie: "400",
    },
    {
      food: "Cheeseburger",
      calorie: "354",
    },
    {
      food: "Burger",
      calorie: "100",
    },
    {
      food: "French fries",
      calorie: "340",
    },
    {
      food: "Hot dog",
      calorie: "151",
    },
    {
      food: "Salad",
      calorie: "375",
    },
  ];

  // console.log(useState);
  let [foods, setFood] = useState(arr);

  // console.log(foods, setFood);

  const deleteTask = (id, food) => {
    const newFood = foods.filter((el, idx) => idx !== id);
    setFood(newFood);
  };

  return (
    <div className="card-container">
      {foods.length > 0 ? (
        foods.map((item, idx) => (
          <Card
            key={idx}
            food={item.food}
            onDelete={deleteTask}
            calorie={item.calorie}
            id={idx}
          />
        ))
      ) : (
        <h1 style={{ textAlign: "center" }}>No entry</h1>
      )}
    </div>
  );
};

export default CardContainer;
