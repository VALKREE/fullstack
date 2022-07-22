import React from 'react';
import MyButton from "../../UI/MyButton/MyButton";
import classes from './GoodItem.module.css';

const GoodItem = (props) => {
    return (
        <div className={classes.good} id={props.good.id}>
            <h3 className={classes.good_title}>{props.good.title}</h3>
            <img src={props.good.image} alt={props.good.title} className={classes.good_image}/>
            <p className={classes.good_description}>{props.good.description}</p>
            <p className={classes.good_price}>{props.good.price}</p>
            <MyButton value={'Купить'}/>
        </div>
    );
};

export default GoodItem;