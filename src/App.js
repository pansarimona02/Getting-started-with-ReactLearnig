import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserOutput from './Assignment1/UserOutput';
import UserInput from './Assignment1/UserInput';

class App extends Component { //prior 16.8 only way to create class.
  //INTRODUCING state : Special properties for component only
  state = {
    persons: [
      { name: "mona", age: 30 },
      { name: "Abc", age: 20 }
    ],
    users: [
      {name: "user1", id:1},
      {name: "user2", id:2},
      {name: "user3", id:3}
    ]
  }
  switchNameHandler = (newName) => {
    this.setState({
      persons: [{ name: newName, age: 21 },
      { name: "shweta", age: 26 }]
    })
  }
  switchUserHandler =(event) => {
    this.setState({
      users: [     
           {name: event.target.value},
           {name: event.target.value},
           {name: event.target.value}
      ]
    })
  }
  render() {
    return (
      <div className="App center-div">
        <div className="divBlock">
          <p>How Are You?</p>
          <button className="button1" onClick={() => this.switchNameHandler("SHWETA")}>SWITCH NAME</button>
          <Person click={this.switchNameHandler.bind(this, "MONA")} name={this.state.persons[0].name} age={this.state.persons[0].age}>Hi I cut cake on 2 of August</Person>
        </div>


        <div className="divBlock">
          <p>USER</p>
          <UserInput  changed= {this.switchUserHandler} currentName = {this.state.users[0].name}/>
          <UserOutput name ={this.state.users[0].name}></UserOutput>
          <UserOutput name ={this.state.users[1].name}></UserOutput>
          <UserOutput name ={this.state.users[2].name}></UserOutput>
        </div>
      </div>
    );
  }

  //return React.createElement('div', {className : "App"},React.createElement('h1',null,'hi, how are you?'));

}



export default App;
