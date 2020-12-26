import React from 'react';
import './header.css';

function Header({totalSpeed, resetCalculator}) {
  return (
    <header className="BandwidthCalc-header">
      <button onClick={() => resetCalculator()} className="BandwidthCalc-button-header">Reset</button>
      <p>Bandwidth Calculator</p>
      <p>{totalSpeed} Mbps</p>
    </header>
  )
}

export default Header;