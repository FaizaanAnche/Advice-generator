import { useEffect, useState } from 'react';
import './App.css';
import diceIcon from "./images/icon-dice.svg"
import divider from "./images/pattern-divider-desktop.svg"
import axios from 'axios';

function App() {

  const [advice, setAdvice] = useState("");
  const [adviceId, setAdviceId] = useState();

  useEffect(() => getAdvice);

  async function getAdvice(){
    const response = await axios.get("https://api.adviceslip.com/advice");
    console.log(response);
    setAdviceId(response.data.slip.id);
    setAdvice(response.data.slip.advice);
  }

  return (
    <div className="App">
      <div className="box">
        <p className="advice-id">ADVICE #{adviceId}</p>
        <p className='advice'>"{advice}"</p>
        <button className="circular-button" onClick={getAdvice}>
            <img src={diceIcon} alt="dice"/>
        </button>
        <img src={divider} alt="divider" className='divider'/>
      </div>
    </div>
  );
}

export default App;
