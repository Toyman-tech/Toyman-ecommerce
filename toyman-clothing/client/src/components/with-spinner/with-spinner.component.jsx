import React from "react";
import Spinner from '../spinner/spinner.component';

 const withSpinner = WrapppedComponent => ({ isLoading, ...otherProps})=>{
    return isLoading? <Spinner/> : <WrapppedComponent {...otherProps} />
 };
 export default withSpinner;