import React from "react";
import AlphabetQuiz from "./Components/AlphabetQuiz.jsx";
import Animals from "./Components/AnimalsQuiz.jsx";
import MathsQuiz from "./Components/MathsQuiz.jsx";
import {  Router, Routes, Route, Link } from "react-router-dom";
import './Components/quiz.css';

function Quiz() {
  return (
    <div>
   
      <Router>
      <div className="link-container">
      <Link to="/alphabet" className="App_Nav_Link">
      {" "}
      Alphabet
      </Link>
      <Link to="/animals" className="App_Nav_Link">
      {" "}
      Animals
      </Link>{" "}
      <Link to="/math" className="App_Nav_Link">
      {" "}
      Maths
      </Link>
      </div>
        <Routes>
          <Route path="/alphabet" element={<AlphabetQuiz/>}></Route>
          <Route path="/animals" element={<Animals />}></Route>
          <Route path="/math" element={<MathsQuiz />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default Quiz;
