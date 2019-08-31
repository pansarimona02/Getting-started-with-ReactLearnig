import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserOutput from './Assignment1/UserOutput';
import UserInput from './Assignment1/UserInput';
import Validation from './Assignment2/Validation';
import CharComponents from './Assignment2/CharComponents';

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
    ],
    userInputText: ''
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
  textLengthHandler = (event) =>
  {
    this.setState({
      userInputText : event.target.value
    })

  }
  deleteChar = (i) => {
    const text = this.state.userInputText.split('');
    text.splice(i,1);
    const updatedText= text.join('');
    this.setState({userInputText : updatedText});
  }
  render() {
    const charList = this.state.userInputText.split('').map((ch, i) => {
      return <CharComponents
      chars= {ch}
      key={i} 
      click={() => this.deleteChar(i)}/>;
    });
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


        {/*Create An input Field with a change Listner which outputs the length of the entered text below it*/}
        <div  className="divBlock">
          <input type="text" onChange= {this.textLengthHandler}/>
          <p>{this.state.userInputText.length}</p>
          <Validation len= {this.state.userInputText.length}/>
          {charList}
          
        </div>
      </div>
    );
  }

  //return React.createElement('div', {className : "App"},React.createElement('h1',null,'hi, how are you?'));

}



export default App;
