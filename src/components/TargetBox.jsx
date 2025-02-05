const TargetBox = ({ color }) => {
  return (
    <div
      data-testid="colorBox"
      style={{
        border: "3px solid rgba(111, 98, 98, 0.7)",
        color: "white",
        backgroundColor: color,
        width: "200px",
        height: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 50,
      }}
    >
      TARGET
    </div>
  );
};

export default TargetBox;
