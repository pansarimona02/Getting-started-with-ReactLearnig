import React from 'react';

const person = (props) => {
    return (
        <div><p>I am a Person and i am {props.name} and am {props.age} old</p>
        <p>{props.children}</p></div>
    )
};
export default person;
