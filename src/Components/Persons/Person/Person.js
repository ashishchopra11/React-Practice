import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classes from './Person.css';
import Auxiliary from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import AuthContext from '../../../context/auth-context';
// import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

class Person extends Component {  
    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount() {
        // this.inputElementRef.focus();
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }
    render() {
        console.log('[person.js] rendering');
        return (
            <Auxiliary>
                
                {this.context.authenticated ? <p>Authenticated!</p> : <p>Please Log in</p> }
                 <p onClick={this.props.click}> I'm {this.props.name} and  i am {this.props.age} years old!'</p>
                 <p key="i2">{this.props.children}</p>
                 <input key="i3" 
                        ref={this.inputElementRef}
                        type="text" 
                        onChange={this.props.changed}
                        value={this.props.name}/>
              
            </Auxiliary>
             
          );
    }
};
Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};
export default Person;