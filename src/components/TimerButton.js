import React from 'react';
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

function TimerButton(props) {
    return (
        <div>
            {(props.status === 0) ?
            <div>
                <AiOutlineCheck onClick={props.ops}></AiOutlineCheck>
            </div>
            : ""
            }

            {(props.status === 1) ?
            <div>
                <AiOutlineClose onClick={props.ops}></AiOutlineClose>
            </div>
            : ""
            }

            {/* {(props.active === 2) ?
            <div>
                <AiOutlineCheck onClick={props.ops}></AiOutlineCheck>
            </div>
            : ""
            } */}
        </div>
            
    )
}

export default TimerButton;
