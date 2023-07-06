import React from "react";
import './Person.css';

const person = (props) => {
  return (
    <div className="Person">
        <p onClick={props.click}>
            I'm a {props.name} and i am {Math.floor(Math.random() * 30)} years old and my dad is {props.age} years old!
        </p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}/>
    </div>
  );
};

export default person;
  