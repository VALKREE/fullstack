import React, {useState} from 'react';
import classes from './MyButton.module.css';

const MyButton = ({childern, ...props}) => {
    const [value, setValue] = useState('');
    function text() {
        setValue(value);
    }
    return (
        <button
            type='submit'
            {...props}
            className={classes.customButton}>{props.value}
        </button>
    );
};

export default MyButton;