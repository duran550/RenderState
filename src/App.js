import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const app = (props) => {
  const [personState, setPersonState] = useState({
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 26 },
    ],
    otherState: "Some other Value",
    showPersons: true
  });

  const [showPersons, setShowPersons] = useState(false)

  const togglePersonHandler = () => {
    setShowPersons(!showPersons)
}

  const switchNameHandler = (newName) => {
    // console.log("Was Clicked!")
    // personState.persons[0].name = "Maxmillian"; Do not update state directly
    setPersonState({
      persons: [
        { name: newName, age: 28 },
        { name: "Manu", age: 29 },
        { name: "Stephanie", age: 27 },
      ],
    });
  };

  const nameChangedHandler = (event) => {
    setPersonState({
      persons: [
        { name: "Max", age: 28 },
        { name: event.target.value, age: 29 },
        { name: "Stephanie", age: 26 },
      ],
    });
  };

  const style = {
    backgroundColor: "white",
    font: "inherit",
    // border: "1x solid blue",
    padding: "8px",
    cursor: "pointer",
  };

  return (
    <div className="App">
      <h1>Hi im a react-dev</h1>
      <button style={style} onClick={togglePersonHandler}>
        {showPersons ? "Hide Content": "Show Content"}
      </button>
      { showPersons ? <div>
        <Person
          name={personState.persons[0].name}
          age={personState.persons[0].age}
        />
        <Person
          name={personState.persons[1].name}
          age={personState.persons[1].age}
          click={switchNameHandler.bind(this, "Max!")}
          changed={nameChangedHandler}
        >
          My Hobbies: Racing
        </Person>
        <Person
          name={personState.persons[2].name}
          age={personState.persons[2].age}
        />
      </div> : null}
    </div>
  );
};

export default app;
