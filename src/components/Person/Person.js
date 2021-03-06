import React from "react";
import './person.css';

const person = (props) => {
    return (
        <div className='person'>
            <p>I'm a {props.name} and I'm {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
};

export default person;
