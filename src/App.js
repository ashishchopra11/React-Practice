import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name:'max',age:28},
      {name:'manu',age:29},
      {name:'Stephanie', age:26}
    ]
  }
  switchNameHandler = (newName) =>{
    // console.log('was clicked');
    this.setState({
      persons: [
        {name:'Ashish',age:23},
        {name:'rawat',age:22},
        {name:'Stephanie', age:26}
      ]
    })
  }
  render() {
    return (
      <div className="App">
      <h1>Hi , I am Sanjay.....Sanjay Singhania</h1>
      <button onClick={() => this.switchNameHandler('Maximilian!!')}>Switch Name</button>
      <Person 
      name={this.state.persons[0].name}   
      age={this.state.persons[0].age}/>
      <Person
       name={this.state.persons[1].name} 
       age={this.state.persons[1].age}/>
      <Person
       name={this.state.persons[2].name} 
       age={this.state.persons[2].age}
         click = {this.switchNameHandler.bind(this, 'MAX!!!!!!!')}>My Hobbies : Racing</Person>
      
      </div>
    );
  }
}

export default App;
