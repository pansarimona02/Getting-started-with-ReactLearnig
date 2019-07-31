import React from 'react';
import './App.css';
import Person from './Person/Person';
function App() {
    return(
      <div className="App">
        <h1>HI</h1>
        <p>How Are You?</p>
        <Person  name="mona" age="24">Hi I cut cake on 2 of August</Person>
      </div>
    ); 
    //return React.createElement('div', {className : "App"},React.createElement('h1',null,'hi, how are you?'));



}

export default App;
