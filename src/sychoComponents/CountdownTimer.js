import React from 'react'
import { useNavigate } from 'react-router-dom';

const CountDownTimer = ({hoursMinSecs}) => {
   
    const { hours = 0, minutes = 0, seconds = 60 } = hoursMinSecs;
    const [[hrs, mins, secs], setTime] = React.useState([hours, minutes, seconds]);
    const navigate = useNavigate();

    const tick = () => {
         if (mins === 0 && secs === 0) {
            navigate('/section1');  }
       else if (secs === 0) {
            setTime([hrs, mins - 1, 59]);
        } else {
            setTime([hrs, mins, secs - 1]);
        }
    };


    const reset = () => setTime([ parseInt(minutes), parseInt(seconds)]);

    
    React.useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        return () => clearInterval(timerId);
    });

    
    return (
        <>
            <span>{`${hrs.toString().padStart(2, '0')}:${mins
            .toString()
            .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`}</span> 
        </>
    );
}

export default CountDownTimer;