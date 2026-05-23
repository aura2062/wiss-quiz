import { useState } from 'react';

function Counter({startwert = 0, titel = "Zähler", incrementBy = 1}) {
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
            { istSichtbar && (
                <div>
                    <p>anzahl an totalen Clicks: {numberOfClicks} </p>
                    
                    <p>{titel}: {count}</p>
                    <button onClick={() => {erhoehen(); countClick();}}>Erhöhen</button>
                    <button onClick={() => {verringern(); countClick();}}>Verringern</button>
                    <button onClick={() => {zuruecksetzen(); countClick();}}>Zuruecksetzen</button>
                </div>
            )}
        </div>
    );
}

export default Counter;