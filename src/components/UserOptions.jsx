const UserOptions = ({ userOptions, handleGuess }) => {
  return (
    <div className="contianer">
      {userOptions.map((color) => (
        <button
          className="userOptions"
          data-testid="colorOption"
          key={color}
          style={{
            width: "200px",
            height: "100px",
            margin: "10px",
            cursor: "pointer",
            backgroundColor: color,
            borderRadius: "10px",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
          }}
          onClick={() => handleGuess(color)}
        ></button>
      ))}
    </div>
  );
};

UserOptions.defaultProps = {
  userOptions: [],
  handleGuess: () => {},
};

export default UserOptions;
