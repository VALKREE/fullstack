import React from 'react';
import {Link} from 'react-router-dom';
import classes from './navigation.module.css';

const Navigation = () => {
    return (
        <div className={classes.navigation}>
            <Link className={classes.link} to='/admin/goods'>Товары</Link>
            <Link className={classes.link} to='/admin/news'>Новости</Link>
            <Link className={classes.link} to='/admin/users'>Пользователи</Link>
        </div>
    );
};

export default Navigation;