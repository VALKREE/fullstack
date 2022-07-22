import React from 'react';
import Navigation from "../../../components/admin/navigation/navigation";
import classes from './users.module.css';
import MyInput from "../../../UI/MyInput/MyInput";
import MyButton from "../../../UI/MyButton/MyButton";

const Users = () => {
    return (
        <div className={classes.users}>
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

export default Users;