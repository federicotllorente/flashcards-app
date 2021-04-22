import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../img/Logo dark.png';

const Login = () => {
    return (
        <div className="login-register">
            <div className="login-register__title">
                <img src={Logo} alt="Flashcards App Logo" />
            </div>
            <div className="login-register__form">
                <h2>Login with your account</h2>
                <form>
                    <input type="text" name="username" id="username" placeholder="Username" required />
                    <input type="password" name="password" id="password" placeholder="Password" required />
                    <button type="submit">Login</button>
                </form>
            </div>
            <div className="login-register__footer">
                <h4><Link to="/register">Don't you have an account yet? Sign up!</Link></h4>
                <p><Link to="/login/forget">Did you forget your password?</Link></p>
                <p><Link to="/contact">Contact us</Link></p>
            </div>
        </div>
    );
};

export default Login;