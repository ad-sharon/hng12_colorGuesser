import { useState, useEffect } from "react";
import UserOptions from "./UserOptions";
import TargetBox from "./TargetBox";
import Score from "./Score";
import ResetGame from "./ResetGame";

const getColors = () => {
  const choices = ["red", "green", "orange", "purple", "black", "blue"];
  return choices.sort(() => Math.random() - 0.5);
};

const ColorGuesser = () => {
  const [colors, setColors] = useState(getColors());
  const [target, setTarget] = useState(
    colors[Math.floor(Math.random() * colors.length)]
  );
  const [userFeedback, setUserFeedback] = useState({ text: "", color: "" });
  const [isCorrect, setIsCorrect] = useState("");
  const [showCorrect, setShowCorrect] = useState("");
  const [showWrong, setShowWrong] = useState("");
  const [score, setScore] = useState(0);

  // function to handle user guesses
  const handleUserGuess = (color) => {
    if (color === target) {
      setScore(score + 1);
      setUserFeedback({
        text: "🎉 Correct! You're killing it! 🎉",
        color: "green",
      });
      setIsCorrect(true);
      setShowCorrect(true);
      setShowWrong("");
      setColors(getColors());
      setTarget(colors[Math.floor(Math.random() * colors.length)]);
    } else {
      setUserFeedback({
        text: "Oops! You failed.Click the New Game button below to try again.",
        color: "red",
      });
      setIsCorrect(false);
      setShowWrong(true);
      setShowCorrect("");
    }
  };

  useEffect(() => {
    if (isCorrect !== "") {
      setTimeout(() => {
        setShowCorrect("");
        setIsCorrect("");
      }, 1000);
    }
  }, [isCorrect]);

  // function to start a new round
  const resetGame = () => {
    const newColors = getColors();
    setColors(newColors);
    setTarget(newColors[Math.floor(Math.random() * newColors.length)]);
    setUserFeedback({ text: "", color: "" });
    setScore(0);
    setShowWrong("");
  };

  return (
    <div className="container" style={{ position: "absolute" }}>
      <h1>COLOR GUESSING GAME</h1>
      <p data-testid="gameInstructions">
        Welcome to the color guessing game. Try your best to guess the correct
        color. Good luck!!!
      </p>
      <div
        style={{
          display: "flex",
          marginTop: 50,
          gap: "30%",
          margin: 10,
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <TargetBox color={target} />
        <Score score={score} />
      </div>
      <h3>Make your choice from the buttons below</h3>
      <UserOptions userOptions={colors} handleGuess={handleUserGuess} />

      {/* Correct answer animation */}
      {showCorrect && (
        <h2
          className="floatingCorrect"
          data-testid="gameStatus"
          style={{
            position: "absolute",
            zIndex: 99,
            margin: "auto",
            border: "1px solid",
            opacity: 1,
            padding: "100px",
            borderRadius: "10px",
            backgroundColor: "#f7f7f7",
            color: userFeedback.color,
          }}
        >
          {userFeedback.text}
        </h2>
      )}

      {/* Wrong answer animation */}
      {showWrong && (
        <>
          <div
            data-testid="gameStatus"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100vh",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: 98,
            }}
          ></div>

          <h2
            className="floatingWrong"
            data-testid="gameStatus"
            style={{
              zIndex: 99,
              border: "1px solid",
              opacity: 1,
              paddingTop: "50px",
              paddingBottom: "50px",
              paddingInline: "20px",
              borderRadius: "10px",
              backgroundColor: "#f7f7f7",
              color: userFeedback.color,
            }}
          >
            {userFeedback.text} <br />
            <ResetGame resetGame={resetGame} />
          </h2>
        </>
      )}
    </div>
  );
};

export default ColorGuesser;
