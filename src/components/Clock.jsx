import { useState } from 'react';
import { useEffect } from 'react';

function Clock() {
    const [time, setTime] = useState(new Date());
    useEffect (
        function() {
            const intervalId = setInterval(function() {
                setTime(new Date());
            }, 1000);

            return function() {
                clearInterval(intervalId);
            };
        }
    )
    return (
        <div>
            <p>Current time: {time.toLocaleTimeString()}</p>
        </div>
    );
}

export default Clock;