import React from 'react';
import MyInput from "../../UI/MyInput/MyInput";
import MyButton from "../../UI/MyButton/MyButton";

const Login = () => {
    return (
        <div className=''>
            <form action="" className=''>
                Введите логин<MyInput />
                Введите пароль<MyInput />
                <MyButton />
            </form>
        </div>
    );
};

export default Login;