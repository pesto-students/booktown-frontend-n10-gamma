import React from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import { Button, Input } from '../../common';
import useSignupContainer from './signupContainer';
import { InputContainer, SignupComponentTitle, SignUpContainer } from './styledComponents';

const SignupComponent = props => {
    const {componentState, handleChange, handleCreateAccount} = useSignupContainer();
    return (
        <SignUpContainer>
            <SignupComponentTitle>SignUp</SignupComponentTitle>
            <form className='signup-form'>
                <InputContainer>
                    <Input
                        style={{marginRight: '5px'}}
                        type='text'
                        name='firstName'
                        placeholder='First Name'
                        label='First Name'
                        value={componentState.firstName}
                        onChange={(e)=>handleChange(e.target.name, e.target.value)}
                    />
                      <Input
                        className='signup-input'
                        type='text'
                        name='lastName'
                        placeholder='Last Name'
                        label='Last Name'
                        value={componentState.lastName}
                        onChange={(e)=>handleChange(e.target.name, e.target.value)}
                    />
                </InputContainer>
                <InputContainer >
                    <Input
                        style={{width: '320px'}}
                        type='email'
                        name='email'
                        placeholder='Email'
                        label='Email'
                        value={componentState.email}
                        onChange={(e)=>handleChange(e.target.name, e.target.value)}
                    />
                </InputContainer>
                <InputContainer >
                    <Input
                        style={{width: '320px'}}
                        type='password'
                        name='password'
                        placeholder='Password'
                        label='Password'
                        value={componentState.password}
                        onChange={(e)=>handleChange(e.target.name, e.target.value)}
                    />
                </InputContainer>
                <InputContainer >
                    <Input
                        style={{width: '320px'}}
                        type='password'
                        name='confirmPassword'
                        placeholder='Email'
                        label='Confirm Password'
                        value={componentState.confirmPassword}
                        onChange={(e)=>handleChange(e.target.name, e.target.value)}
                    />
                </InputContainer>
                
            </form>
            <Button 
                onClick={handleCreateAccount} 
                disabled={!componentState.isSuccess}
                style={{margin:'10px 0', width:'320px'}} text='SignUp'
            />
            <ReCAPTCHA
                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                onChange={(e)=>{e? handleChange('isSuccess', true): handleChange('isSuccess', false)}}
            />
        </SignUpContainer>        
    );
};

SignupComponent.propTypes = {
    
};

export default SignupComponent;