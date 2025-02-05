const Score = ({ score }) => {
  return (
    <h3 data-testid="score" style={{ color: "green" }}>
      SCORE : {score}{" "}
    </h3>
  );
};

export default Score;
