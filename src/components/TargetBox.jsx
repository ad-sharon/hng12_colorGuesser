import { useState, useEffect } from "react";

const TargetBox = ({ color, resetOpacity, onTargetDisappear }) => {
  const [targetOpacity, setTargetOpacity] = useState(1);
  const [pulseCount, setPulseCount] = useState(0);

  useEffect(() => {
    if (color !== " " && resetOpacity) {
      setTargetOpacity(1);
      setPulseCount(0);
    } else {
      setTargetOpacity(1);

      const pulseInterval = setInterval(() => {
        setPulseCount((prevCount) => {
          if (prevCount < 2) {
            return prevCount + 1;
          }
          clearInterval(pulseInterval);
          return prevCount;
        });
      }, 1000);

      if (pulseCount >= 2) {
        setTargetOpacity(0);
        setTimeout(() => {
          onTargetDisappear();
        }, 200);
      }

      return () => clearInterval(pulseInterval);
    }
  }, [color, resetOpacity, pulseCount, onTargetDisappear]);

  return (
    <div
      data-testid="colorBox"
      style={{
        opacity: targetOpacity,
        backgroundColor: color,
        width: "150px",
        height: "100px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        animation: pulseCount < 2 ? "pulse 1s infinite" : "none",
      }}
    >
      TARGET
    </div>
  );
};

export default TargetBox;
