import React, {useState} from "react";
import './sign-up.styles.scss'
import { connect } from "react-redux";
import FormInput from "../form-input/form-input.component";
 
import CustomButton from "../custom-button/custom-button.component";
import { signUpStart } from "../../redux/user/user.action";

const SignUp= ({signUpStart})=> {
    const [userCredentials, setUserCredentials] = useState(
        {
            displayName : '',
            email: '',
            password : '',
            confirmPassword : ''
        }
    )
    
    const {displayName, email, password, confirmPassword }= userCredentials;
    
    const handleSubmit = async event => {
        event.preventDefault();

        if (password !== confirmPassword){
           alert( "passwords don't match ");
           return;
        }
        signUpStart ({displayName, email, password})   ;
        // try{
        //     const {user} = await createUserWithEmailAndPassword(auth, email, password);
         
        // await   createUserProfileDocument(user, {displayName}); 
        // setUserCredentials ( {
        //     displayName : '',
        //     email: '',
        //     password : '',
        //     confirmPassword : ''
        // });
        // } catch(error)
        // { console.error(error);
        // }
    };

    const handleChange = event =>{
        const {name, value} = event.target;   
         setUserCredentials({...userCredentials, [name]: value});
    }

        return(
            <div className="sign-up">
                <div className="main-container">
                <h2 className="tittle">
                     Register
                </h2>
                <form className="sign-up-form" onSubmit={handleSubmit}>
                  <FormInput 
                  type='text'
                  name='displayName'
                  value={displayName}
                  onChange ={handleChange}
                  placeholder='Display Name'
                  required />
                     <FormInput 
                  type='email'
                  name='email'
                  value={email}
                  onChange ={handleChange}
                  placeholder='Email'
                  required />
                     <FormInput 
                  type='password'
                  name='password'
                  value={password}
                  onChange ={handleChange}
                  placeholder='password'
                  required />
                     <FormInput 
                  type='password'
                  name='confirmPassword'
                  value={confirmPassword}
                  onChange ={handleChange}
                  placeholder='Confirm Password'
                  required />
                  <CustomButton type= 'submit' className='buttons'> SIGN UP </CustomButton>
                </form>
                </div>
            </div>
        )
};
const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
  });
  
  export default connect(
    null,
    mapDispatchToProps
  )(SignUp);