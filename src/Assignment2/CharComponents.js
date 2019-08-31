import React from 'react';
const charComponents = (props) => {
    var styles = {
        display : "inline-block",
        padding : "16px",
        textAlign: "center", 
        margin: "16px",
        border:  "1px solid black"

    };
    return  (
         <div style={styles} onClick = {props.click}>{props.chars}</div>
     )
}
export default charComponents;