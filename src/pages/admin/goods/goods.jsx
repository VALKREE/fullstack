import React from 'react';
import classes from "../goods/goods.module.css";
import Navigation from "../../../components/admin/navigation/navigation";
import MyInput from "../../../UI/MyInput/MyInput";
import MyButton from "../../../UI/MyButton/MyButton";


const Goods = () => {
    return (
        <div className={classes.goods}>
            <Navigation/>
            <form action="" className={classes.form}>
                <MyInput
                    type='text'
                    placeholder='Ваше наименование'
                />
                <MyInput
                    type='text'
                    placeholder='Ваше описание'
                />
                <MyButton
                    value='Опубликовать'
                />
            </form>
        </div>
    );
};

export default Goods;