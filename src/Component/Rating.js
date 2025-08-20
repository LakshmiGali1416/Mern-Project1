import React, { useState } from 'react';
import './Rating.css';

const Rating = () => {
  const [currentLine, setCurrentLine] = useState('');
  const [ratings, setRatings] = useState([]);

  const pickupLines = [
    "Are you a magician? Because whenever I look at you, everyone else disappears.",
    "Is your name Wi-Fi? Because I'm feeling a strong connection.",
    "Do you have a name, or can I call you mine?",
    "Are you French? Because Eiffel for you.",
    "Do you like Star Wars? Because Yoda one for me.",
    "If you were a vegetable, you’d be a cute-cumber!",
    "Do you believe in love at first sight—or should I walk by again?",
    "Are you Google? Because you’ve got everything I’m searching for.",
    "Are you a hacker? Because you just cracked my heart.",
    "Are you gravity? Because you’ve got me falling for you.",
    // ...add more as needed
  ];

  const generateLine = () => {
    const randomLine = pickupLines[Math.floor(Math.random() * pickupLines.length)];
    setCurrentLine(randomLine);
  };

  const rateLine = (score) => {
    if (!currentLine) return alert("Please generate a line first!");

    const newRating = { line: currentLine, score };
    setRatings([...ratings, newRating]);
    setCurrentLine('');
  };

  const removeRating = (index) => {
    const newRatings = ratings.filter((_, i) => i !== index);
    setRatings(newRatings);
  };

  const averageRating = ratings.length === 0
    ? 0.0
    : (ratings.reduce((sum, item) => sum + item.score, 0) / ratings.length).toFixed(1);

  return (
    <section id="rate" className="py-5" style={{ background: "linear-gradient(135deg, #fceabb, #f8b500)" }}>
      <div className="container">
        <div className="card shadow-lg p-5 border-0 rounded-4 mx-auto" style={{
          background: "rgba(255, 255, 255, 0.85)",
          backdropFilter: "blur(8px)",
          maxWidth: "850px"
        }}>
          <h2 className="text-center text-dark fw-bold mb-4">
            <i className="bi bi-star-fill text-warning me-2"></i>Rate Pick-Up Lines
          </h2>

          <div className="text-center mb-4">
            <button className="btn btn-lg btn-outline-success mx-2" onClick={() => rateLine(5)}>😍</button>
            <button className="btn btn-lg btn-outline-primary mx-2" onClick={() => rateLine(4)}>😊</button>
            <button className="btn btn-lg btn-outline-warning mx-2" onClick={() => rateLine(3)}>😐</button>
            <button className="btn btn-lg btn-outline-danger mx-2" onClick={() => rateLine(1)}>🙄</button>
          </div>

          <div className="text-center mb-3">
            <button className="btn btn-danger px-4 py-2 shadow-sm" onClick={generateLine}>
              🎲 Generate New Line
            </button>
            <p className="mt-3 fs-5 fw-semibold">{currentLine}</p>
          </div>

          <p className="text-center text-muted fs-5 mb-4">
            Average Rating: <strong>{averageRating}</strong>
          </p>

          <div>
            <h5 className="text-dark fw-semibold">📋 Your Ratings</h5>
            <ul className="list-group mb-4 rounded-3 overflow-auto" style={{ maxHeight: "200px" }}>
              {ratings.map((item, index) => (
                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                  {item.line}
                  <span className="badge bg-secondary me-3">Rating: {item.score}</span>
                  <button className="btn btn-sm btn-outline-danger" onClick={() => removeRating(index)}>
                    <i className="bi bi-x-lg"></i>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rating;
