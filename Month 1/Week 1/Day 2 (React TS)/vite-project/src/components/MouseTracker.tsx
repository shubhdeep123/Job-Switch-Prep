import {useState, useEffect} from 'react';

export function MouseTracker() {
    const [position, setPosition] = useState({x:0, y:0});
    const [isTracking, setIsTracking] = useState(true);

    useEffect(() =>{
        if (!isTracking) return;

        function updateMousePosition(e:MouseEvent) {
            setPosition({x: e.clientX, y: e.clientY});
        }

        window.addEventListener('mousemove', updateMousePosition);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        }
    }, [isTracking])

    return (
        <div>
            <p>Mouse position: {position.x}, {position.y}</p>
            <button onClick={() => setIsTracking(!isTracking)}>
                {isTracking ? "Stop Tracking" : "Start Tracking"}
            </button>
        </div>
    )
}