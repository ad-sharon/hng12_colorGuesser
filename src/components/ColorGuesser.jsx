import { useState, useEffect } from "react";
import TargetBox from "./TargetBox";
import UserOptions from "./UserOptions";
import Score from "./Score";
import StatusCorrect from "./StatusCorrect";
import StatusWrong from "./StatusWrong";
import ResetGame from "./ResetGame";

const getColors = () => {
  const choices = ["red", "green", "orange", "purple", "black", "blue"];
  return choices.sort(() => Math.random() - 0.5);
};

const ColorGuesser = () => {
  const correctSound = new Audio("/correctSound.mp3");
  const wrongSound = new Audio("/wrongSound.mp3");

  const [colors, setColors] = useState(getColors());
  const [target, setTarget] = useState(
    colors[Math.floor(Math.random() * colors.length)]
  );
  const [isCorrect, setIsCorrect] = useState(false);
  const [showCorrect, setShowCorrect] = useState(false);
  const [showWrong, setShowWrong] = useState(false);
  const [score, setScore] = useState(0);
  const [showUserOptions, setShowUserOptions] = useState(false);
  const [resetOpacity, setResetOpacity] = useState(false);

  const TargetDisappeared = () => {
    setShowUserOptions(true);
  };

  const handleUserGuess = (color) => {
    if (color === target) {
      setScore((prevScore) => prevScore + 1);
      correctSound.play();
      setIsCorrect(true);
      setShowCorrect(true);
      setShowWrong(false);
      setColors(getColors());
      setTarget(colors[Math.floor(Math.random() * colors.length)]);
      setShowUserOptions(false);
      setResetOpacity(true);
    } else {
      wrongSound.play();
      setIsCorrect(false);
      setShowWrong(true);
      setShowCorrect(false);
    }
  };

  useEffect(() => {
    if (isCorrect) {
      const timeoutId = setTimeout(() => {
        setShowCorrect(false);
        setIsCorrect(false);
        setResetOpacity(false);
      }, 1000);

      return () => clearTimeout(timeoutId);
    }
  }, [isCorrect]);

  const resetGame = () => {
    window.location.reload();
  };

  return (
    <section className="container">
      <h1>COLOR GUESSING GAME</h1>
      <p data-testid="gameInstructions">
        Welcome to the color guessing game! Try your best to guess the same
        color as the target. Good luck!!!
      </p>

      <section className="target_score">
        <TargetBox
          color={target}
          resetOpacity={resetOpacity}
          onTargetDisappear={TargetDisappeared}
        />
        <Score score={score} />
      </section>

      {showUserOptions && (
        <>
          <h3>Make your choice from the buttons below</h3>
          <UserOptions userOptions={colors} handleGuess={handleUserGuess} />
        </>
      )}

      {showCorrect && <StatusCorrect />}
      {showWrong && <StatusWrong onNewGame={resetGame} />}

      {/* New Game Button */}
      <ResetGame onClickHandler={resetGame} />
    </section>
  );
};

export default ColorGuesser;
