import React from "react";
import { ReactComponent as CheckLogo } from "../assets/check.svg";

function QuizStart({ startQuiz }) {
	return (
		<section className="BadwidthCalc-quiz BandwidthCalc-intro">
			<h2>Free yourself from ever waiting on your internet connection!</h2>
			<p>
				Answer the following questions to calculate the minimum internet
				bandwidth speed your home needs.
			</p>

			<div onClick={startQuiz} className="BandwidthCalc-button-card">
				<figure className="BandwidthCalc-figure">
					<CheckLogo className="BandwidthCalc-card-image" />
				</figure>
				<button className="BandwidthCalc-button">Start</button>
			</div>
		</section>
	);
}

export default QuizStart;
