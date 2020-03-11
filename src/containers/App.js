import React, { Component } from 'react';
import classes from './App.css';
// import Person from '../Components/Persons/Person/Person';
// import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';


class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] cosntructor');
  }


  state = {
    persons: [
      { id: 'as', name:'max',age:28},
      { id: 'as1', name:'manu',age:29},
      {id: 'as2', name:'Stephanie', age:26}
    ],
    otherState: 'soome other value',
    showPersons: false
  }
  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps',props)
    return state;
  }
   
  deletePersonHandler = (personIndex) =>{
    // const persons = this.state.persons.slice();
    console.log('this is a sample line');
    
   const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  // componentWillMount() {
  //   console.log('[App.js] componentWillMount');
  // }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;

  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p =>{
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    //const person = Object.assign({}, this.state.persons[personIndex])

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
  
    this.setState( {persons: persons } );
  }
  
  togglePersonsHandler = () =>{
    const doesShow = this.state.showPersons;
    this.setState({showPersons:!doesShow});
  }


  render() {
    console.log('[App.js] render ');
    let persons = null; 
    if(this.state.showPersons){
      persons =  <Persons persons={this.state.persons}
                   clicked={this.deletePersonHandler}
                   changed={this.nameChangedHandler} />;
    }
    
    return (  
      <div className={classes.App}>
        <Cockpit
        title={this.props.appTitle}
        showPersons={this.state.showPersons}
        persons={this.state.persons} 
        clicked={this.togglePersonsHandler}/>
       {persons}
     </div>
   
    );
  }
}

export default App;
