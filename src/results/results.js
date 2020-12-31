import { useEffect, useState } from "react";
import "./results.css";

function Results({ totalSpeed }) {
	const [counter, setCounter] = useState(0);
	let duration = totalSpeed > 100 ? 5 : 15;
	console.log("totalSpeed: ", totalSpeed);
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

	return (
		<section className="BandwidthCalc-quiz">
			<h2>
				<span className="orange">{counter}</span> Mbps
			</h2>
			<p>
				With an internet speed of greater than{" "}
				<span className="orange">{counter}</span> Mbps, no one in your family
				will ever wait for that video to load or miss that game winning moment
				to lag.
			</p>
		</section>
	);
}

export default Results;
