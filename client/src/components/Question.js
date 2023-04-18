import React, { useState } from "react";
import "./Question.css"

function Question2({topic, body, answer}) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerSelect = (e) => {
    setSelectedAnswer(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: handle form submission
  };

  return (
    <div className="question-card">
      <h2 className="question-topic">{topic}</h2>
      <p className="question-body">{body}</p>
      <form onSubmit={handleSubmit}>
        <div className="answer-options">
          <label className="answer-option">
            <input
              type="radio"
              name="answer"
              value="a"
              onChange={handleAnswerSelect}
            />
            <span className="answer-text">{answer}</span>
          </label>
          <label className="answer-option">
            <input
              type="radio"
              name="answer"
              value="b"
              onChange={handleAnswerSelect}
            />
            <span className="answer-text">{answer}</span>
          </label>
          <label className="answer-option">
            <input
              type="radio"
              name="answer"
              value="c"
              onChange={handleAnswerSelect}
            />
            <span className="answer-text">{answer}</span>
          </label>
          <label className="answer-option">
            <input
              type="radio"
              name="answer"
              value="d"
              onChange={handleAnswerSelect}
            />
            <span className="answer-text">{answer}</span>
          </label>
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Question2;
