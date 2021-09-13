import React,{useState, useEffect} from 'react';

import './Timer.css';

let interval = 0;

const Timer = (props) => {
    const [sec, setSec] = useState(0);
    const [min, setMin] = useState(0);

    useEffect(() => {  
        clearInterval(interval);
        interval = setTimeout(() => { 
            setSec(sec+1);
            if(sec === 59)
            {
                setMin(min+1);
                setSec(0);
            }
        }, 1000);
         
    }, [sec]);

    useEffect(() => {

        if(props.toggle === true || props.toggle === false)
        {
            setSec(0);
            setMin(0);
        }
    }, [props.toggle]);

    useEffect(() => {

        return () => {
           clearInterval(interval);
        };

    }, [props.exit])

    useEffect(() => {
        if(props.winner === true)
        clearInterval(interval);
    }, [props.winner]);

    return (
        <div>
           <div className="timer">
              <h1><span>{min}</span> : <span>{sec}</span></h1>
           </div>
        </div>
    )
}

export default Timer;