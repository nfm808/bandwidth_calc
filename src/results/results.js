import { useEffect, useState } from "react";
import CvecLogo from "../assets/cvec.svg";
import "./results.css";

function Results({ totalSpeed, resultsActive }) {
	const [counter, setCounter] = useState(0);
	let duration = totalSpeed > 100 ? 5 : 15;
	useEffect(() => {
		let count = 0;
		const interval = setInterval(() => {
			count += 1;
			totalSpeed > 0 && setCounter((counter) => counter + 1);
			if (count === totalSpeed || totalSpeed === 0) {
				clearInterval(interval);
			}
		}, duration);
	}, [totalSpeed, duration]);

	const packageChoice = () => {
		let value = "";
		totalSpeed > 100 ? (value = "100 Mbps Plan") : (value = "Gig Plan");
		return value;
	};

	const shareResults = () => {
		if (navigator.share) {
			navigator
				.share({
					title: "CVEC Fiber Speed Calculator",
					url: "https://cvecfiber.com/speed-calculator",
					text: `Our family needs ${totalSpeed} Mbps and we're going to get up to 1 Gig from CVEC Fiber!`,
				})
				.then(() => {
					console.log("thanks for sharing");
				})
				.catch(console.error);
		} else {
			console.log("unsupported browser");
		}
	};

	return (
		<section className="BandwidthCalc-quiz">
			<figure className="BandwidthCalc-quizstart-figure">
				<img
					src={CvecLogo}
					className="BandwidthCalc-card-image"
					alt="CVEC Fiber Logo"
				/>
			</figure>
			<h2>
				<span className="orange">{counter}</span> Mbps
			</h2>
			<p>
				With an internet speed of greater than{" "}
				<span className="orange">{counter}</span> Mbps, no one in your family
				will ever wait for that video to load or miss that game winning moment
				to lag.
			</p>
			{navigator.share !== "undefined" &&
				typeof navigator.share !== "undefined" && (
					<button
						onClick={() => shareResults()}
						className="BandwidthCalc-button"
					>
						Share your Results
					</button>
				)}
		</section>
	);
}

export default Results;
