import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../img/Logo dark.png';

const Register = () => {
    return (
        <div className="login-register">
            <div className="login-register__title">
                <img src={Logo} alt="Flashcards App Logo" />
            </div>
            <div className="login-register__form">
                <h2>Create your account</h2>
                <form>
                    <input type="text" name="firstname" id="firstname" placeholder="First name" required />
                    <input type="text" name="lastname" id="lastname" placeholder="Last name" required />
                    <input type="text" name="username" id="username" placeholder="Username" required />
                    <input type="password" name="password" id="password" placeholder="Password" required />
                    <input type="password" name="password2" id="password2" placeholder="Repeat your password" required />
                    <button type="submit">Register</button>
                </form>
            </div>
            <div className="login-register__footer">
                <h4><Link to="/login">Do you already have an account?</Link></h4>
                <p><Link to="/contact">Contact us</Link></p>
            </div>
        </div>
    );
};

export default Register;