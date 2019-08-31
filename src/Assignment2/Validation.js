import React from 'react';

const validation = (props) => {
    let validationText = 'Text long Enough';
    if(props.len < 5)
    {
        validationText = 'Text is Short!!';
    }
   
    return (
    <p>{validationText}</p>
    )
}
export default validation;
