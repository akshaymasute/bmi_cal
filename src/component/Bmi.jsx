import { useState } from 'react';
import './Bmi.css';

function Bmi() {
  // state variables
  const [weight, setWeight] = useState('');
  const [feet, setFeet] = useState('');
  const [inches, setInches] = useState('');
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');

  // logic for calculating BMI
  let calcBmi = (e) => {
    e.preventDefault();

    // Convert inputs to numbers
    const weightNum = parseFloat(weight);
    const feetNum = parseFloat(feet);
    const inchesNum = parseFloat(inches);

    if (!weightNum || !feetNum || isNaN(inchesNum)) {
      alert('Please enter a valid weight, feet, and inches');
      return;
    }

    // Convert height to total inches
    const totalHeightInches = feetNum * 12 + inchesNum;

    let bmi = (weightNum / (totalHeightInches * totalHeightInches)) * 703;
    setBmi(bmi.toFixed(2)); // Set BMI with two decimal places

    if (bmi < 18.5) {
      setMessage('Underweight');
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      setMessage('Healthy weight');
    } else if (bmi >= 25 && bmi <= 29.9) {
      setMessage('Overweight');
    } else {
      setMessage('Obesity');
    }
  };

  // reload function
  let reload = () => {
    setWeight('');
    setFeet('');
    setInches('');
    setBmi('');
  };

  return (
    <>
      <div className="Container">
        <h1>BMI - Calculator</h1>
        <form onSubmit={calcBmi}>
          <div>
            {/* <label>Weight (lbs)</label> */}
            <input
              type="text"
              placeholder="Enter weight value"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            {/* <label>Height</label> */}
            <div style={{ display: 'flex', gap: '10px' }}>
              <input
                type="text"
                placeholder="Feet"
                value={feet}
                onChange={(e) => setFeet(e.target.value)}
              />
          
                <input
                type="text"
                placeholder="Inches"
                value={inches}
                onChange={(e) => setInches(e.target.value)}
              />
                </div>
          </div>
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" onClick={reload} type="button">
              Reset
            </button>
          </div>
          <div>
            <h2>BMI: {bmi}</h2>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </>
  );
} 

export default Bmi;