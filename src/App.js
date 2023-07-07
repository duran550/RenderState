import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const app = (props) => {
  const [personState, setPersonState] = useState({
    persons: [
      { id:0, name: "Max", age: 28 },
      { id:1, name: "Manu", age: 29 },
      { id:2, name: "Stephanie", age: 26 },
    ],
    otherState: "Some other Value",
    // showPersons: true,
  });

  const [showPersons, setShowPersons] = useState(false);

  const togglePersonHandler = () => {
    setShowPersons(!showPersons);
  };

  const nameChangedHandler = (event, id) => {
    const personIndex = personState.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...personState.persons[personIndex]
    }

    person.name = event.target.value;
    const persons = [...personState.persons];
    persons[personIndex] = person;

    setPersonState({
      persons: persons
    });
  };

  const style = {
    backgroundColor: "#fff",
    font: "inherit",
    // border: "1x solid blue",
    padding: "8px",
    cursor: "pointer",
  };

  let persons = null;

  if (showPersons) {
    persons = (
      <div>
        {personState.persons.map((person, index) => {
          return (
            <Person
              click={() => deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={index}
              changed={(event) => nameChangedHandler(event, index)}
            />
          );
        })}
      </div>
    );

    style.backgroundColor = "black";
    style.color = "whitesmoke";

  }

  const deletePersonHandler = (personIndex) => {
    // const persons = personState.persons.slice();
    const persons = [...personState.persons];
    persons.splice(personIndex, 1)
    setPersonState({persons: persons})
  };

  return (
    <div className="App">
      <h1>Hi im a react-dev</h1>
      <button style={style} onClick={togglePersonHandler}>
        {showPersons ? "Hide Content" : "Show Content"}
      </button>
      {persons}
    </div>
  );
};

export default app;
