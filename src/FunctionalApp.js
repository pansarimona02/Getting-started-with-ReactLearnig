import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

// Alternative way for Aap.js class
const FunctionalApp = (props) => {
// after ver 16.8
//INTRODUCING state : Special properties for component only
const [ personState, setPersonState ] = useState({
  persons: [
    {name: "monika", age: 30},
    {name: "anamika", age: 20}
  ] 
});


 const switchNameHandler = () => {
    setPersonState({
      persons: [{name: "komalika", age : 21},
      {name:"shweta", age: 26}]
  });
  };

    return (
      <div className="App">git
        <h1>HI</h1>
        <p>How Are You?</p>
        <button onClick={switchNameHandler}>SWITCH NAME</button>
        <Person click= {switchNameHandler} name={personState.persons[0].name} age={personState.persons[0].age}>Hi I cut cake on 2 of August</Person>
      </div>
    )
  

  //return React.createElement('div', {className : "App"},React.createElement('h1',null,'hi, how are you?'));

};
export default FunctionalApp;
