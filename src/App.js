import React, { useEffect, useState } from "react";
import Header from "./header/header";
import QuizStart from "./quizstart/quizstart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as CheckLogo } from "./assets/check.svg";
import "./App.css";

const Quiz = [
	{
		question: "How many people live in your household?",
		points: 25,
	},
	{
		question:
			"How many desktop computers, laptops, cell phones does your household have?",
		points: 10,
	},
	{
		question: "How many smart TVs (4k) does your household have?",
		example: "Roku, Amazon Fire Stick, Kodi",
		points: 25,
	},
	{
		question: "How many gaming consoles or PCs does your household have?",
		example: "Xbox Series X, PS5, PS4, Nintendo Switch",
		points: 12,
	},
	{
		question: "How many smart devices does your household have?",
		example:
			"Refrigerator, Washer/Dryer, Garage Doors, Thermostats, Home Assistant, Alexa",
		points: 25,
	},
	{
		question: "How many online security devices does your household have?",
		example: "WiFi Security Cameras, Security Hub, Ring Doorbell",
		points: 10,
	},
];

function App({ domElement }) {
	const SpeedsAvailable = domElement
		.getAttribute("data-speedsAvailable")
		.split(",")
		.map((speed) => Number(speed));
	const [loading, setLoading] = useState(false);
	const [numberPeople, setNumberPeople] = useState(0);
	const [numberDevices, setNumberDevices] = useState(0);
	const [totalSpeed, setTotalSpeed] = useState(0);
	const [quizActive, setQuizActive] = useState(false);
	const [resultsActive, setResultsActive] = useState(false);
	const [questionIndex, setQuestionIndex] = useState(0);
	console.log(SpeedsAvailable);

	// reset calculator
	const resetCalculator = () => {
		setNumberDevices(0);
		setNumberPeople(0);
		setTotalSpeed(0);
	};

	// start quiz
	const startQuiz = () => {
		setQuizActive(true);
	};

	return (
		<div className="BandwidthCalc">
			<Header totalSpeed={totalSpeed} resetCalculator={resetCalculator} />
			{!quizActive && !resultsActive && <QuizStart startQuiz={startQuiz} />}
			{quizActive && (
				<section>
					<h2>{Quiz[questionIndex].question}</h2>
					{Quiz[questionIndex].example && <p>{Quiz[questionIndex].example}</p>}
					<div>
						<figure></figure>
					</div>
				</section>
			)}
			<footer></footer>
		</div>
	);
}

export default App;
