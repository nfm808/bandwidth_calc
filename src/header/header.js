import React from "react";
import { ReactComponent as CvecLogo } from "../assets/cvec.svg";
import "./header.css";

function Header({ totalSpeed, resetCalculator }) {
	return (
		<header className="BandwidthCalc-header">
			<button
				onClick={() => resetCalculator()}
				className="BandwidthCalc-button-header"
			>
				Reset
			</button>
			<CvecLogo className="BandwidthCalc-logo" />

			<p>{totalSpeed} Mbps</p>
		</header>
	);
}

export default Header;
