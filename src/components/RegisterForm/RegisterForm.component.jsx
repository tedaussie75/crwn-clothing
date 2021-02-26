import React, {Component} from 'react';

import './RegisterForm.style.scss';

import FormInput from '../FormInput/FormInput.component';
import CustomButton from '../CustomButton/CustomButton.component';
import {auth, createUserProfileDocument} from '../../Firebase/firebase.utils';

class RegisterForm extends Component {
    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
        this.handleSubmit = async element => {
            element.preventDefault();

            const {displayName,email,password,confirmPassword} = this.state;
            
            if(password !== confirmPassword) {
                alert("password don't match");
                return;
            }

            try {
                const {user} = await auth.createUserWithEmailAndPassword(email, password);
                createUserProfileDocument(user, {displayName});

                this.setState({
                    displayName: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                })
            } catch (error) {
                console.error(error);
            }
        }

        this.handleChange = element => {
            const {name, value} = element.target;
            this.setState({[name]: value})
        }
    }
    render() {
        const {displayName,email,password,confirmPassword} = this.state;
        return(
            <div className="sign-up">
                <h2>I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form onSubmit={this.handleSubmit} className="sign-up-form">
                    <FormInput name="displayName" type="text" label="Display Name" value={displayName} onChange={this.handleChange} required/>
                    <FormInput name="email" type="email" label="Email" value={email} onChange={this.handleChange} required/>
                    <FormInput name="password" type="password" value={password} label="Password" onChange={this.handleChange} required/>
                    <FormInput name="confirmPassword" type="password" value={confirmPassword} label="Confirm Password" onChange={this.handleChange} required/>
                    <CustomButton type="submit" value="Sign Up"/>
                </form>
            </div>
        )
    }
}

export default RegisterForm;