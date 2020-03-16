import React, { PureComponent } from 'react';
import Person from './Person/Person';


class Persons extends PureComponent {

// */PureComponent predefined checks all the conditions that you will be checking manually*/


    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js] getDerivedStateFromProps');
    //     return state;
    // }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[Persons.js] shouldComponentUpdate');
    //     if(nextProps.persons !== this.props.persons ||
    //        nextProps.changed !== this.props.changed ||
    //        nextProps.clicked !== this.props.clicked
    //        ) {
    //     return true;
    //     } else{
    //       return false;
    //     }
    //  }
        
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeupdate');
        return { message: 'SnapShot!' };
    }
    componentWillUnmount() {
      console.log('[Person.js] componentWillUnmount');
    }

    componentDidUpdate(prevProps, prevState, Snapshot) {
        console.log('[Persons.js] componentDidUpdate');
        console.log(Snapshot);
    }

    render() {
        console.log('[Persons.js] rendering.....');
        return   
        
       (context) => this.props.persons.map((person, index) => {
            return ( 
              <Person
                    click={() => this.props.clicked(index)} 
                    name = {person.name}
                    age = {person.age} 
                    key = {person.id} 
                    changed = {(event) =>this.props.changed(event, person.id)}
                    // isAuth={this.props.isAuthenticated}
                    />
            );
          });
        
        }
    }
      export default Persons;