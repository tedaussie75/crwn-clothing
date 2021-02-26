import React, {Component} from 'react';

import './SignInForm.style.scss';

import FormInput from '../FormInput/FormInput.component';
import CustomButton from '../CustomButton/CustomButton.component';
import {auth, signInWithGoogle} from '../../Firebase/firebase.utils';

class SignInForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        this.handleSubmit = async element => {
            element.preventDefault();
            
            this.setState({email: '', password: ''})

            const {email,password} = this.state;
            
            try {
                await auth.signInWithEmailAndPassword(email, password);
                this.setState({email: '', password: ''});
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
        const {email,password} = this.state;
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" label="Email" value={email} onChange={this.handleChange} required/>
                    <FormInput name="password" type="password" value={password} label="Password" onChange={this.handleChange} required/>
                    <div className="buttons">
                        <CustomButton type="submit" value="Sign in"/>
                        <CustomButton type="button" onClick={signInWithGoogle} value="Sign in with Google" isGoogleSignIn/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignInForm;