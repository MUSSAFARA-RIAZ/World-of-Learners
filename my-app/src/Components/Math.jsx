import React, { useState } from 'react';
// Import the CSS file

const Math = () => {
  // Array of jumbled words and their correct answers
  const words = [
    { jumbled: 'DLO', answer: 'OLD' },
    { jumbled: 'GDO', answer: 'DOG' },
    { jumbled: 'RABIT', answer: 'RABBIT' },
    { jumbled: 'OLW', answer: 'OWL' },
    { jumbled: 'DHOC', answer: 'DOLPHIN' },
  ];

  // State to track current word index and user input
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);

  // Function to handle user input change
  const handleInputChange = (e) => {
    setUserInput(e.target.value.toUpperCase());
  };

  // Function to check if user input matches the correct answer
  const checkAnswer = () => {
    if (userInput === words[currentIndex].answer) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  // Function to proceed to the next word
  const nextWord = () => {
    setUserInput('');
    setIsCorrect(false);
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <div className="container">
      {currentIndex < words.length ? (
        <div>
          <h2  style={{color:'red'}} className="word">Unscramble the word: {words[currentIndex].jumbled}</h2>
          <input
          style={{color:'red'}}
            className="input"
            type="text"
            value={userInput}
            onChange={handleInputChange}
            placeholder="Your guess"
          />
          <button className="button" style={{color:'black', backgroundColor:"#b0ff11", border:"2px solid black", marginBottom:"20px"}} onClick={checkAnswer}>Check</button>
          {isCorrect && <p style={{color:'black', backgroundColor:"palevioletred"}}>Correct!</p>}
          {!isCorrect && userInput !== '' && <p style={{color:'red'}}>Incorrect. Try again!</p>}
          <button className="button" style={{color:'black', backgroundColor:"#b0ff11", border:"2px solid black", marginBottom:"20px"}} onClick={nextWord}>Next</button>
        </div>
      ) : (
        <h2 style={{color:'red'}}>Congratulations! You've unscrambled all the words!</h2>
      )}
    </div>
  );
};

export default Math;
