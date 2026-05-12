import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import heroImg from './assets/hero.png';
import './App.css';
import TodoList from './components/TodoList';  // Import TodoList component
import studyMateLogo from '/studyMateLogo.png'; // Logo path
import Journal from './components/Journal';  // Import Journal component
import Timer from './components/Timer';      // Import Timer component

function App() {
  const [count, setCount] = useState(0);
  const [motivationalMessage, setMotivationalMessage] = useState("");

  // Updated motivational quotes without authors
  const motivationalMessages = [
    "Start where you are. Use what you have. Do what you can.",
    "Every morning you have two choices: continue to sleep with your dreams or wake up and chase them.",
    "You don’t have to be great to start. But you have to start to be great.",
    "The secret of getting ahead is getting started.",
    "Clear your desk. Tie your hair. Grab a coffee, and just start.",
    "If we wait until we’re ready, we’ll be waiting for the rest of our lives.",
    "We generate fears while we do nothing. We overcome these fears by taking action.",
    "A journey of a thousand miles begins with one step.",
    "Action is the foundational key to all success.",
    "The greatest amount of wasted time is time not getting started.",
    "Just do it.",
    "There are no shortcuts to any place worth going.",
    "The expert in anything was once a beginner.",
    "Hard work beats talent when talent doesn’t work hard."
  ];

  // Display a random motivational message when the button is clicked
  const displayMessage = () => {
    const randomIndex = Math.floor(Math.random() * motivationalMessages.length);
    setMotivationalMessage(motivationalMessages[randomIndex]);
  };

  return (
    <>
      {/* Header Section with Logo */}
      <section id="header" className="text-center py-12">
        <div className="flex justify-center mb-8">
          <img src={studyMateLogo} alt="StudyMate Logo" className="w-32" />
        </div>

        <div className="hero flex justify-center gap-6 mb-8">
          <img src={heroImg} className="w-44" alt="Hero" />
          <img src={reactLogo} className="w-24" alt="React logo" />
          <img src={viteLogo} className="w-24" alt="Vite logo" />
        </div>

        <h1 className="text-4xl font-semibold text-gray-800 mb-4">Get started with StudyMate</h1>
        <p className="text-xl mb-8">
          Edit <code className="bg-gray-100 p-2 rounded-md">src/App.jsx</code> and save to test <code className="bg-gray-100 p-2 rounded-md">HMR</code>
        </p>
        <button
          type="button"
          className="bg-purple-500 text-white px-6 py-3 rounded-full hover:bg-purple-600 transition"
          onClick={() => setCount(count + 1)}
        >
          Count is {count}
        </button>
      </section>

      {/* Motivational Message */}
      <section id="motivational-message" className="text-center py-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Motivational Message</h2>
        <p className="text-xl mb-4">{motivationalMessage}</p>
        <button
          className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition"
          onClick={displayMessage}
        >
          Show a Motivational Message
        </button>
      </section>

      <div className="ticks"></div>

      {/* To-Do List Section */}
      <section id="todo-list-section" className="py-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">To-Do List</h2>
        <TodoList />
      </section>

      <div className="ticks"></div>

      {/* Journal Section */}
      <section id="journal-section" className="py-12">
        <Journal />  {/* Display Journal component */}
      </section>

      <div className="ticks"></div>

      {/* Study Timer Section */}
      <section id="study-timer-section" className="py-12">
        <Timer />  {/* Display Timer component */}
      </section>

      <section id="spacer"></section>
    </>
  );
}

export default App;