import React from 'react';
import {NavLink} from "react-router-dom";
import classes from './header.module.css';

const HeaderModule = () => {
    return (
        <header className={classes.header}>
            <nav className={classes.header_nav}>
                <NavLink className={classes.header_navLink} to='/admin'>Админка</NavLink>
                <NavLink className={classes.header_navLink} to='/login'>Логин</NavLink>
                <NavLink className={classes.header_navLink} to='/register'>Регистрация</NavLink>
                <NavLink className={classes.header_navLink} to='/profile'>Профиль</NavLink>
                <NavLink className={classes.header_navLink} to='/shop'>Магазин</NavLink>
                <NavLink className={classes.header_navLink} to='/cart'>Корзина</NavLink>
            </nav>
        </header>
    );
};

export default HeaderModule;