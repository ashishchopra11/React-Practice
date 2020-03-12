import React, {Component} from 'react';
import classes from './Person.css';
import Auxiliary from '../../../hoc/Auxiliary';
// import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

class Person extends Component {  
    render() {
        console.log('[person.js] rendering');
        return (
            <Auxiliary>
             {/* <div className={classes.Person}> */}
                 <p onClick={this.props.click}> I'm {this.props.name} and  i am {this.props.age} years old!'</p>
                 <p>{this.props.children}</p>
                 <input type="text" 
                        onChange={this.props.changed}
                        value={this.props.name}/>
            </Auxiliary>
             /* </div> */
          );
    }
};
export default Person;