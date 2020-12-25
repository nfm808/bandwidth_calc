import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCoffee} from '@fortawesome/free-solid-svg-icons'
import './App.css';

function App({ domElement }) {
  const SpeedsAvailable = domElement.getAttribute("data-speedsAvailable").split(',').map(speed => Number(speed));
  const [ loading, setLoading ] = useState(false);
  const [ numberPeople, setNumberPeople ] = useState(0);
  const [ numberDevices, setNumberDevices ] = useState(0);
  console.log(SpeedsAvailable);
  return (
    <div className="BandwidthCalc">
      <FontAwesomeIcon icon={faCoffee} />
    </div>
  );
}

export default App;
