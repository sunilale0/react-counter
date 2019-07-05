import React from 'react';

const Greeting = (props) => {
    return (
    
    <p> 
        Hello {props.name} {props.value}! This is the greeting that I have for now.
    </p>
    );
}

export default Greeting;
