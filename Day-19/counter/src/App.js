import Button from "./Button";
import "./App.css";

function App() {
  const n = [1, 2, 3, 4];
  return (
    <div className="App">
      <h3>
        There are 4 counter component instances that each manage their own
        state/data
      </h3>
      <div className="buttons-div">
        {n.map((i) => (
          <Button key={i} />
        ))}
      </div>
    </div>
  );
}

export default App;
