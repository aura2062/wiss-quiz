import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    const [istSichtbar, setIstSichtbar] = useState(true);
    const [numberOfClicks, setNumberOfClicks] = useState(0);

    const erhoehen = () => {
        setCount(count + 5);
    };

    const verringern = () => {
        if (count - 5 >= 0) {
            setCount(count - 5);
        } else {
            setCount(count);
        }
    };

    const zuruecksetzen = () => {
        setCount(0);
    }

    const toggle = () => {
        setIstSichtbar(!istSichtbar);
    };

    const countClick = () => {
        setNumberOfClicks(numberOfClicks + 1);
    };

    return (
        <div>
            <button onClick={() => {toggle(); countClick();}}>
                {istSichtbar? "Counter verstecken" : "Counter anzeigen"}
            </button>
            <p>anzah an totalen Clicks: {numberOfClicks} </p>
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