import { useState } from "react";
const ResetGame = ({ onClickHandler }) => {
  const [bgColor, setBgColor] = useState("#000");
  return (
    <button
      data-testid="newGameButton"
      style={{
        padding: "10px 20px",
        fontSize: "18px",
        cursor: "pointer",
        backgroundColor: bgColor,
        color: "white",
        border: "none",
        borderRadius: "5px",
        marginTop: "20px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      }}
      onMouseOver={() => setBgColor("#4CAF50")}
      onMouseLeave={() => setBgColor("#000")}
      onClick={onClickHandler}
    >
      Click to start a New Game
    </button>
  );
};

export default ResetGame;
