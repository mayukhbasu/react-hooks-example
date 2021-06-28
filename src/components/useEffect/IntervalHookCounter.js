import React, {useState, useEffect} from 'react';

function IntervalHookCounter() {
    const [count, setCount] = useState(0);

    const ticket = () => {
        setCount((prevCount) => prevCount + 1);
    }

    useEffect(() => {
        const interval = setInterval(ticket, 1000);
        return () => {
            clearInterval(interval);
        }
    }, [])
    return (
        <div>
            {count}
        </div>
    );
}

export default IntervalHookCounter;