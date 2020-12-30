import React, { useEffect, useState } from "react";
import Header from "./header/header";
import QuizStart from "./quizstart/quizstart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import CheckLogo from "./assets/check.svg";
import Person from "./assets/people.svg";
import "./App.css";

const Quiz = [
	{
		category: "people",
		question: "How many people live in your household?",
		points: 25,
		img: Person,
	},
	{
		category: "computers",
		question:
			"How many desktop computers, laptops, cell phones does your household have?",
		points: 10,
		img: Person,
	},
	{
		category: "TVs",
		question: "How many smart TVs (4k) does your household have?",
		example: "Roku, Amazon Fire Stick, Kodi",
		points: 25,
	},
	{
		category: "gaming devices",
		question: "How many gaming consoles and PCs does your household have?",
		example: "Xbox Series X, PS5, PS4, Nintendo Switch",
		points: 12,
	},
	{
		category: "smart devices",
		question: "How many smart devices does your household have?",
		example:
			"Refrigerator, Washer/Dryer, Garage Doors, Thermostats, Home Assistant, Alexa",
		points: 25,
	},
	{
		category: "security devices",
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
	const [totalSpeed, setTotalSpeed] = useState(0);
	const [quizActive, setQuizActive] = useState(false);
	const [resultsActive, setResultsActive] = useState(false);
	const [questionIndex, setQuestionIndex] = useState(0);
	const [people, setPeople] = useState(0);
	const [computers, setComputers] = useState(0);
	const [tv, setTv] = useState(0);
	const [gaming, setGaming] = useState(0);
	const [devices, setDevices] = useState(0);
	const [security, setSecurity] = useState(0);

	// add points (Mbps)
	const setPoints = (int, points) => {
		let total = int * points;
		console.log("total: ", total);
		switch (questionIndex) {
			case 0:
				console.log("people");
				setPeople(total);
				console.log("people: ", people);
				break;
			case 1:
				console.log("computers");
				setComputers(total);
				console.log("computers: ", computers);
				break;
			case 2:
				console.log("tv");
				setTv(total);
				console.log("tv: ", tv);
				break;
			case 3:
				console.log("gaming");
				setGaming(total);
				console.log("gaming: ", gaming);
				break;
			case 4:
				console.log("devicecs");
				setDevices(total);
				console.log("devices: ", devices);
				break;
			case 5:
				console.log("security");
				setSecurity(total);
				console.log("security: ", security);
				break;
			default:
				break;
		}
	};

	// reset calculator
	const resetCalculator = () => {
		setTotalSpeed(0);
		setComputers(0);
		setDevices(0);
		setGaming(0);
		setPeople(0);
		setQuestionIndex(0);
		setTv(0);
		setSecurity(0);
		setQuizActive(false);
		setResultsActive(false);
	};

	// start quiz
	const startQuiz = () => {
		setQuizActive(true);
	};

	const sumTotalSpeed = () => {
		let total = people + computers + tv + devices + security + gaming;
		setTotalSpeed(total);
		return 0;
	};

	// next question
	const nextQuestion = (e) => {
		if (e && e.key !== "Enter") {
		} else {
			sumTotalSpeed();
			let el = document.querySelector(".BandwidthCalc-input");
			el.value = "";
			el.focus();
			el.scrollIntoView();
			if (questionIndex == 5) {
				setResultsActive(true);
			} else {
				let i = questionIndex + 1;
				setQuestionIndex(i);
			}
		}
	};

	// previous question
	const prevQuestion = () => {};
	return (
		<div className="BandwidthCalc">
			<Header totalSpeed={totalSpeed} resetCalculator={resetCalculator} />
			{!quizActive && !resultsActive && <QuizStart startQuiz={startQuiz} />}
			{quizActive && (
				<section className="BadwidthCalc-quiz">
					<p>Question: {questionIndex + 1} / 6</p>
					<h2>{Quiz[questionIndex].question}</h2>
					<div className="Bandwidth-quiz-button-container">
						<figure className="BandwidthCalc-figure">
							<img
								className="BandwidthCalc-card-image"
								src={Quiz[questionIndex].img}
								alt=""
							/>
						</figure>
						<label
							className="BandwidthCalc-label"
							htmlFor={Quiz[questionIndex].category}
						>
							Enter number of {Quiz[questionIndex].category} here:
						</label>
						<input
							type="number"
							pattern="[0-9]*"
							id={Quiz[questionIndex].category}
							className="BandwidthCalc-input"
							min="0"
							onKeyDown={(e) => nextQuestion(e)}
							onChange={(e) =>
								setPoints(Number(e.target.value), Quiz[questionIndex].points)
							}
						/>
						{Quiz[questionIndex].example && (
							<p>Examples: {Quiz[questionIndex].example}</p>
						)}

						<button
							className="BandwidthCalc-button"
							onClick={() => nextQuestion()}
							onKeyDown={(e) => nextQuestion(e)}
						>
							Next
						</button>
					</div>
				</section>
			)}
			<footer></footer>
		</div>
	);
}

export default App;
