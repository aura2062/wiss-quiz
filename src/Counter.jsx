import { useState } from 'react';

function Counter({startwert, titel, incrementBy}) {
    const [count, setCount] = useState(startwert);
    const [istSichtbar, setIstSichtbar] = useState(true);
    const [numberOfClicks, setNumberOfClicks] = useState(0);

    const erhoehen = () => {
        setCount(count + incrementBy);
    };

    const verringern = () => {
        if (count - incrementBy >= 0) {
            setCount(count - incrementBy);
        } else {
            setCount(count);
        }
    };

    const zuruecksetzen = () => {
        setCount(startwert);
    }

    const toggle = () => {
        setIstSichtbar(!istSichtbar);
    };

    const countClick = () => {
        setNumberOfClicks(numberOfClicks+1);
    };

    return (
        <div>
            <button onClick={() => {toggle(); countClick();}}>
                {istSichtbar? "Counter verstecken" : "Counter anzeigen"}
            </button>
            <p>anzahl an totalen Clicks: {numberOfClicks} </p>
            { istSichtbar && (
                <div>
                    <p>Aktueller Zähler: {count}</p>
                    <button onClick={() => {erhoehen(); countClick();}}>Erhöhen</button>
                    <button onClick={() => {verringern(); countClick();}}>Verringern</button>
                    <button onClick={() => {zuruecksetzen(); countClick();}}>Zuruecksetzen</button>
                </div>
            )}
        </div>
    );
}

export default Counter;