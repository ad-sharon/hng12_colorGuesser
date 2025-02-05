const StatusCorrect = () => {
  return (
    <div
      className="floatingCorrect"
      data-testid="gameStatus"
      style={{
        position: "absolute",
        top: 0,
        zIndex: 99,
        border: "1px solid",
        paddingTop: "50px",
        paddingBottom: "50px",
        paddingInline: "20px",
        borderRadius: "10px",
        backgroundColor: "#f7f7f7",
        color: "green",
        opacity: 1,
      }}
    >
      <h2 style={{ color: "green" }}>🎉 Correct! You&apos;re killing it! 🎉</h2>
    </div>
  );
};

export default StatusCorrect;
