import React, { useState } from 'react';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';
import '../index.css'


export default function ReactRangeSlider() {
    const [ value, setValue ] = useState(0); 

  return (
    <div>
        <div className='range-slider'>
        <RangeSlider
            className='bs-range-slider'
            value={value}
            max='95'  
            step='1'
            onChange={changeEvent => setValue(changeEvent.target.value)}
        />
        </div>
        
    <div className='range-values'>
        <div>
            <p>{value}</p>
            <p>Retailer</p>
        </div>
        <div>+</div>
        <div>
            <p>{95 - value}</p>
            <p>You</p>
        </div>
        <div>+</div>
        <div>
            <p>5%</p>
            <p>Carro</p>
        </div>
        <div>=</div>
        <div>
            <p>100%</p>
            <p>Total</p>
        </div>
    </div>
    </div>
      
  );
}