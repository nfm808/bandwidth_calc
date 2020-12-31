import React from "react";
import CvecLogo from "../assets/cvec.svg";
import "./header.css";

function Header({ totalSpeed, resultsActive }) {
	return (
		<header className="BandwidthCalc-header">
			<div className="BandwidthCalc-logo-container">
				<img
					src={CvecLogo}
					className="BandwidthCalc-logo"
					alt="CVEC Fiber Logo"
				/>
			</div>
			{!resultsActive && <p>{totalSpeed} Mbps</p>}
		</header>
	);
}

export default Header;
