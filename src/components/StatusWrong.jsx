import ResetGame from "./ResetGame";
const StatusWrong = ({ onNewGame }) => {
  return (
    <>
      <section
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 98,
        }}
      ></section>

      <h2
        className="floatingWrong"
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
          color: "red",
          opacity: 1,
        }}
      >
        Oops! You failed. Click the button below to try again. <br />
        <div onClick={onNewGame}>
          <ResetGame />
        </div>
      </h2>
    </>
  );
};

export default StatusWrong;
