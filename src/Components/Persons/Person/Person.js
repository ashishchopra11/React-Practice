import React from 'react';
import classes from './Person.css';
// import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

const person = (props) =>{
    // const rnd = Math.random();
    // if(rnd > 0.9){
    //      throw new Error('Something went wrong' );
    // }
    return (
//    <div className="Person" style={style}> 
       <div className={classes.Person}>
            <p onClick={props.click}> I'm {props.name} and  i am {props.age} years old!'</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
     );
};
export default person;