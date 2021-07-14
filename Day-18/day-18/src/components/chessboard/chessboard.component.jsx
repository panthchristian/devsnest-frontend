import Row from "../row/row.component";

const Chess = () => {
  const n = 8;

  return (
    <div className="board ">
      {[...Array(n)].map((item, idx) => (
        <Row key={idx} />
      ))}
    </div>
  );
};

export default Chess;
