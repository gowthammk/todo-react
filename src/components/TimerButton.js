import React from 'react';
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

function TimerButton(props) {
    return (
        <div>
            {(props.status === 0) ?
            <div>
                <AiOutlineCheck onClick={props.start}></AiOutlineCheck>
            </div>
            : ""
            }

            {(props.status === 1) ?
            <div>
                <AiOutlineClose onClick={props.stop}></AiOutlineClose>
            </div>
            : ""
            }

            {(props.status === 2) ?
            <div>
                <AiOutlineCheck onClick={props.resume}></AiOutlineCheck>
            </div>
            : ""
            } 
            </div>
            
    )
}

export default TimerButton;
