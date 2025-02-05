import { useState } from "react";
const ResetGame = ({ resetGame }) => {
  const [bgColor, setBgColor] = useState("#000");
  return (
    <button
      data-testid="newGameButton"
      style={{
        width: 200,
        height: 50,
        borderRadius: 15,
        cursor: "pointer",
        marginTop: "50px",
        backgroundColor: bgColor,
        color: "white",
        fontWeight: 600,
        whiteSpace: "nowrap",
        padding: 1,
        textAlign: "center",
      }}
      onMouseOver={() => setBgColor("#4CAF50")}
      onMouseLeave={() => setBgColor("#000")}
      onClick={resetGame}
    >
      Click to start a New Game
    </button>
  );
};

export default ResetGame;
