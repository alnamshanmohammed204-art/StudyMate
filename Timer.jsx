import { useState, useEffect } from "react";

function Timer() {
  const [time, setTime] = useState(25 * 60); // Default 25 minutes
  const [isActive, setIsActive] = useState(false);

  // Load timer value from local storage on initial render
  useEffect(() => {
    const savedTime = localStorage.getItem("timer");
    if (savedTime) {
      setTime(Number(savedTime)); // Restore time from local storage
    }
  }, []);

  // Save timer value to local storage when it changes
  useEffect(() => {
    localStorage.setItem("timer", time); // Save current time
  }, [time]);

  useEffect(() => {
    let interval;
    if (isActive) {
      interval = setInterval(() => {
        setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setTime(25 * 60); // Reset to 25 minutes
  };

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Study Timer</h2>
      <div className="flex items-center justify-center space-x-4 mb-4">
        <span className="text-5xl">{minutes < 10 ? `0${minutes}` : minutes}:</span>
        <span className="text-5xl">{seconds < 10 ? `0${seconds}` : seconds}</span>
      </div>
      <button
        onClick={toggleTimer}
        className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
      >
        {isActive ? "Pause" : "Start"}
      </button>
      <button
        onClick={resetTimer}
        className="w-full mt-4 bg-red-600 text-white py-2 rounded-md hover:bg-red-700"
      >
        Reset
      </button>
    </div>
  );
}

export default Timer;