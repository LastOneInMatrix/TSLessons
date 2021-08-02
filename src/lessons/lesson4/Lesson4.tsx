import React from 'react'
import './lesson_4';
import {onCreateClick, Reject_Promise, Resolve_Promise} from "./lesson_4";

const Lesson4 = () => {
    return (
        <div>
            <button id='btn-create-promise' onClick={onCreateClick}>Create Promise</button>
            <button id='btn-resolve-promise' onClick={Resolve_Promise}>Resolve Promise</button>
            <button id='btn-reject-promise' onClick={Reject_Promise}>Reject Promise</button>
        </div>
    );
}

export default Lesson4;