import React, { useState } from 'react';
import actions from './mapping';
import './Home.css';

export default function Home() {
    const [type, setType] = useState(10000);
    const [time, setTime] = useState('0 seconds');
    const [loading, setLoading] = useState(false);

    const handleOnClick = async action => {
        setLoading(true);
        setTime(`...`);
        await new Promise(resolve => setTimeout(resolve, 0)); // Ensure state update
        const startTime = performance.now();
        console.log(action(generateRandomArray(type)));
        const endTime = performance.now();
        setTime(`${((endTime - startTime) / 1000).toFixed(3)} seconds`);
        setLoading(false);
    };

    const Button = ({ action, title }) => (
        <button 
            className={'buttons'}
            onClick={() => handleOnClick(action)}
        >
            {title}
        </button>
    );

    const Toggle = ({ title, num }) => (
        <>
            <button
                className={`toggle-button ${type === num ? 'active' : ''}`} 
                onClick={() => setType(num)} 
            >
                {title}
            </button>
        </>
    );

    return (
        <>
            {loading && <div className="overlay"></div>}
            <div className={'centralDiv'}>
                {Object.keys(actions).map((object) => <Button {...actions[object]}/>)}
            </div>

            <div className='results'>
                {time}
            </div>
    
            <div className="toggle-container">
                <Toggle title={"10000"} num={10000} />
                <Toggle title={"50000"} num={50000} />
                <Toggle title={"100000"} num={100000} />
            </div>
        </>
    );
}

function generateRandomArray(tamanho) {

    // Gera um array de números sequenciais de 1 até 100000
    const array = Array.from({ length: tamanho }, (_, i) => i + 1);
  
    // Embaralha o array usando o algoritmo de Fisher-Yates
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  
    return array;
}
