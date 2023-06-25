import React, {useState} from 'react';
 import { connect } from 'react-redux';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.action';
import './sign-in.styles.scss';
import { FaGoogle } from "react-icons/fa";
import Icon from './icon';
import {useNavigate} from 'react-router'

const SignIn =({emailSignInStart, googleSignInStart})=>{
  const navigate = useNavigate();
  const [userCredentials, setCredentials] = useState({email:'', password:''})

  const {email, password} = userCredentials;
  console.log(userCredentials);

  const handleSubmit = async event => {
    event.preventDefault();
    emailSignInStart(email, password)
  };

  const handleChange = event => {
    const { value, name } = event.target;

    setCredentials({ ...userCredentials, [name]: value });
  };
 console.log(handleChange, handleSubmit);
   
    return (
      
      <div className='sign-in'> 
        <h2 className='head'>Welcome</h2>
        <form className='form-input' onSubmit={handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={handleChange}
            value={email}
            placeholder='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={password}
            handleChange={handleChange}
            placeholder='password'
            required
          />
          <div className='buttons'>
            <CustomButton type='submit'> Sign in </CustomButton>
          </div>
        </form>
        <h5 className='pword'>or login with</h5><hr className='rule'></hr>
        <div className='icon'  onClick={googleSignInStart}> <Icon>
        <FaGoogle /> 
          </Icon> </div>
        <h5 className='forgot-password'>DON'T HAVE AN ACCOUNT ?</h5>
        <CustomButton type='submit'  onClick={()=>{ 
        navigate('/sign-up')}} > Register </CustomButton>
      </div>
    );
  }

  // <CustomButton 
  //           type='button'
  //           onClick={googleSignInStart} isGoogleSignIn>
  //               {''}
  //             Sign in Google {''}
  //           </CustomButton>

const mapDispatchToProps = (dispatch) => {
  return {
    googleSignInStart: () => 
      dispatch(googleSignInStart()),
    emailSignInStart : (email, password)=>
      dispatch(emailSignInStart({email, password}))
    
    
  }
}


export default connect(null, mapDispatchToProps)(SignIn);