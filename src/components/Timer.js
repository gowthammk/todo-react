import React, { useState } from 'react';
import TimerButton from './TimerButton'
import TimerDisplay from './TimerDisplay'

function Timer(props) {

    const [time, setTime] = useState({h:0, m:0, s:0})
    const [interv, setInterv] = useState();
    const [status, setStatus] = useState(0);  
  
    const start = () => {
      run();
      setStatus(1);
      setInterv(setInterval(run, 1000));
    }
    
    var updatedS = time.s, updatedM=time.m, updatedH=time.h;
  
    const run = () => {
      if(updatedM === 60){
        updatedH++;
        updatedM = 0;
      }
      if (updatedS === 60){
        updatedM++;
        updatedS=0;
      }
      updatedS++;
      return setTime({h:updatedH, m:updatedM, s:updatedS});
    }
  
    const stop = () => {
      clearInterval(interv);
      setStatus(1);
    }
  
    //const resume = () => start();
   
    var operation = props.active === 1 ? start : stop;

    return (
        <div className="todo-timer">
          <TimerButton ops={operation} status={status} active={active}></TimerButton>
        {/* <TimerButton  start={start} status={status} stop={stop} resume={resume}></TimerButton> */}
        <TimerDisplay time={time} ></TimerDisplay>       
        </div>
    )
}

export default Timer;
