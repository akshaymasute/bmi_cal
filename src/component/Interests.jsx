import { useState } from 'react';
import './Int.css';


function Interests() {
  // state variables
  const [amount, setAmount] = useState('');
  const [interest, setInterest] = useState('');
  const [time, setTime] = useState('');
  const [simple, setSimple] = useState('');

  // logic for calculating interest
  let calcInt = (e) => {
    e.preventDefault();

    if (isNaN(amount) || isNaN(interest) || isNaN(time)) {
      alert('Please enter a valid weight, feet, and inches');
      return;
    }

    let simple = (amount * interest * time) / 100;
    setSimple(simple);
  };

  // reload function
  let reload = () => {
    setAmount('');
    setInterest('');
    setTime('');
    setSimple('');
  };

  return (
    <>
      <div className="Container">
        <h1>Simple Calculator</h1>
        <p>Calculate your simple interest</p>

        <div className='result'>
          <h1>{simple} ₹</h1>
          <p>Total simple interest</p>
        </div>

        <form onSubmit={calcInt}>
          <div className='amount'>
            <p>Enter Principle Amount</p>
            <input 
              type="number"
              placeholder="Principle amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div className='interest' >
            <p>Enter Rate of Interest</p>
            <input
              type="number"
              placeholder="Rate of Interest (p.a) %"
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
            />
          </div>
          <div className='time'>
            <p>Enter Time Period</p>
            <input
              type="number"
              placeholder="Time period (in years)"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>
          <div className='btns'>
            <button className="btn" type="submit">Submit</button>
            <button className="btn btn-outline" onClick={reload} type="button">Reset</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Interests;