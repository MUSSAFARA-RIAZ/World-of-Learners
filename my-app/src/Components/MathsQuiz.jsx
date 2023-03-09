import React, { useState } from 'react';
import './quiz.css';

export default function App() {
	const questions = [
		{
			questionText: '5 - 1 = ?',
			answerOptions: [
				{ answerText: '10', isCorrect: false },
				{ answerText: '7', isCorrect: false },
				{ answerText: '4', isCorrect: true },
				{ answerText: '2', isCorrect: false },
			],
		},
		{
			questionText: '12 + 4 = ?',
			answerOptions: [
				{ answerText: '100', isCorrect: false },
				{ answerText: '16', isCorrect: true },
				{ answerText: '14', isCorrect: false },
				{ answerText: '9', isCorrect: false },
			],
		},
		{
			questionText: '18 + ? = 24 ',
			answerOptions: [
				{ answerText: '6', isCorrect: true },
				{ answerText: '10', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '8', isCorrect: false },
			],
		},
		{
			questionText: '7 x 5 = ?',
			answerOptions: [
				{ answerText: '20', isCorrect: false },
				{ answerText: '65', isCorrect: false },
				{ answerText: '40', isCorrect: false },
				{ answerText: '35', isCorrect: true },
			],
		},
		{
			questionText: '? x 4 = 36',
			answerOptions: [
				{ answerText: '7', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '9', isCorrect: true },
				{ answerText: '5', isCorrect: false },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app' id="#flower-quiz">
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length} 😁 
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button className='.button' onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}