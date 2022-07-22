import React, {useState} from 'react';
import classes from './MyInput.module.css';

const MyInput = (props) => {
    return (
        <input
            type={props.type}
            placeholder={props.placeholder}
            value={props.value}
            className={classes.customInput}
        />
    );
};

export default MyInput;