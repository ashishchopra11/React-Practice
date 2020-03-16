import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classes from './Person.css';
import Auxiliary from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
// import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

class Person extends Component {  
    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }
    componentDidMount() {
        // this.inputElementRef.focus();
        this.inputElementRef.current.focus();
    }
    render() {
        console.log('[person.js] rendering');
        return (
            <Auxiliary>
             {/* <div className={classes.Person}> */}
                 <p onClick={this.props.click}> I'm {this.props.name} and  i am {this.props.age} years old!'</p>
                 <p key="i2">{this.props.children}</p>
                 <input key="i3" 
                        ref={this.inputElementRef}
                        type="text" 
                        onChange={this.props.changed}
                        value={this.props.name}/>
            </Auxiliary>
             /* </div> */
          );
    }
};
Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};
export default withClass(Person, classes.Person);