import React, { useEffect, useState } from "react";
import Header from "./header/header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as CheckLogo } from "./assets/check.svg";
import "./App.css";

function App({ domElement }) {
	const SpeedsAvailable = domElement
		.getAttribute("data-speedsAvailable")
		.split(",")
		.map((speed) => Number(speed));
	const [loading, setLoading] = useState(false);
	const [numberPeople, setNumberPeople] = useState(0);
	const [numberDevices, setNumberDevices] = useState(0);
	const [totalSpeed, setTotalSpeed] = useState(0);
	console.log(SpeedsAvailable);

	// reset calculator
	const resetCalculator = () => {
		setNumberDevices(0);
		setNumberPeople(0);
		setTotalSpeed(0);
	};

	return (
		<div className="BandwidthCalc">
			<Header totalSpeed={totalSpeed} resetCalculator={resetCalculator} />
			<section className="BadwidthCalc-quiz BandwidthCalc-intro">
				<h2>Free yourself from ever waiting on your internet connection!</h2>
				<p>
					Answer the following questions to calculate the minimum internet
					bandwidth speed your house needs.
				</p>

				<div className="BandwidthCalc-button-card">
					<CheckLogo className="BandwidthCalc-card-image" />
					<button className="BandwidthCalc-button">Start</button>
				</div>
			</section>
			<footer></footer>
		</div>
	);
}

export default App;
