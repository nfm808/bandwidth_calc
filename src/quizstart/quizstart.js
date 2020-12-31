import React from "react";
import CheckLogo from "../assets/check.svg";
import "./quizstart.css";

function QuizStart({ startQuiz }) {
	return (
		<section className="BandwidthCalc-quiz BandwidthCalc-intro">
			<h2>Find your household's optimum bandwidth!</h2>
			<p>
				Answer the following questions to calculate the minimum internet speed
				your home needs.
			</p>

			<div onClick={startQuiz} className="BandwidthCalc-button-card">
				<figure className="BandwidthCalc-quizstart-figure">
					<img src={CheckLogo} className="BandwidthCalc-card-image" alt="" />
				</figure>
				<button className="BandwidthCalc-button">Start</button>
			</div>
		</section>
	);
}

export default QuizStart;
