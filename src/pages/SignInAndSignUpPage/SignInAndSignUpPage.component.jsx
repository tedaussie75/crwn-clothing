import React from 'react';

import './SignInAndSignUpPage.style.scss';

import SignInForm from '../../components/SignInForm/SignInForm.component';
import RegisterForm from '../../components/RegisterForm/RegisterForm.component';


const SignInPage = () => (
    <div className="signInandUpPage">
        <SignInForm />
        <RegisterForm />
    </div>
)

export default SignInPage;