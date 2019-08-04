import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component { //prior 16.8 only way to create class.
//INTRODUCING state : Special properties for component only
  state = {
    persons: [
      {name: "monika", age: 30},
      {name: "anamika", age: 20}
    ] 
  }
  switchNameHandler= () => {
    this.setState({
      persons: [{name: "komal", age : 21},
      {name:"shweta", age: 26}]
  })
  }
  render() {
    return (
      <div className="App">
        <h1>HI</h1>
        <p>How Are You?</p>
        <button onClick={this.switchNameHandler}>SWITCH NAME</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>Hi I cut cake on 2 of August</Person>
      </div>
    );
  }

  //return React.createElement('div', {className : "App"},React.createElement('h1',null,'hi, how are you?'));

}



export default App;
