

import React, { useState } from 'react';
import { Tilt } from 'react-tilt';
import "./usp.scss";

const Usp = ({ clickState }) => {
  const [ uspEffect, setUspEffect] = useState(false);

  const handleUspEffect = () => {
    setUspEffect(true);
  };

  return (
    <div className='Usp' onMouseEnter={handleUspEffect}>
      <img className='usp-main-img' src='https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/usp-main-img.png' alt='' />
      <div className='usp-heading'>Our <span style={{ color: '#BD1643' }}>&nbsp;USP</span></div>
      

      <Tilt className="Tilt1" options={{ max: 25, scale: 1.1, speed: 300, glare: true, 'max-glare': 0.5 }}>
            <img className='usp-main-img-1' src='https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/usp-main-img-1.png' alt='' />
      </Tilt>
      
      <Tilt className="Tilt2" options={{ max: 25, scale: 1.1, speed: 300, glare: true, 'max-glare': 0.5 }}>
            <img className='usp-main-img-2' src='https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/usp-main-img-2.png' alt=''/>
      </Tilt>

      <Tilt className="Tilt3" options={{ max: 25, scale: 1.1, speed: 300, glare: true, 'max-glare': 0.5 }}>
      <img className='usp-main-img-3' src='https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/fashion-event/images/usp-main-img-3.png' alt=''/>
      </Tilt>

      
    </div>
  );
};

export default Usp;
