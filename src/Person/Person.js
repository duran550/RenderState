import React from "react";
import "./Person.css";

const person = (props) => {
  const style = {
    background: "gray",
    color: "whitesmoke",
    width: "100px",
    marginTop: "10px",
    cursor:"pointer"
  };

  return (
    <div className="Person">
      <p>
        I'm {props.name} and i am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <div>
        <input type="text" onChange={props.changed} value={props.name} style={{backgroundColor:"lightgray"}}/>
      </div>
      <button onClick={props.click} style={style}>
        Delete
      </button>
    </div>
  );
};

export default person;
