import React, {useEffect, lazy, Suspense} from 'react';
import { connect } from 'react-redux';
import {  Routes,  Route} from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { GlobalStyle } from './global.styles.jsx';

import { checkUserSession } from './redux/user/user.action.js';
import { selectCollectionsForPreview } from './redux/shop/shop.selectors.js';
import { createStructuredSelector } from 'reselect';

import ErrorBoundary from './components/error-boundary/error-boundary.component'
import Spinner from './components/spinner/spinner.component.jsx';
import SignUp from './components/sign-up/sign-up.component.jsx';
import Header from './components/header/header.component.jsx';


const HomePage= lazy(()=> import("./pages/homepage/homepage.component.jsx"));
const ShopPage = lazy(()=> import('./pages/shop/shop.components.jsx'));
const SignInAndSignUpPage = lazy(()=> import('./pages/sign-in-and-sign-out/sign-in-and-sign-out.component.jsx'));
const CheckoutPage = lazy(()=>import('./pages/checkout/checkout.component.jsx'));

const App =({checkUserSession, currentUser, collectionsArray}) =>{
  
  useEffect (()=>{
    checkUserSession();
      }, [checkUserSession]);
    
   // const {setCurrentUser}= this.props;
    // this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth=>  {
    //   if (userAuth){
    //      const userRef = await createUserProfileDocument(userAuth);
         

    //    onSnapshot(userRef, (doc)=> {
    //     setCurrentUser({
    //       currentUser : {
    //         id : doc.id,
    //         ...doc
              
    //       }
    //     })
      // });  
      // } 
      //   setCurrentUser(userAuth);
    //});
    
     
  //  componentWillUnmount(){ this.unsubscribeFromAuth();}
  
    return( 
      <div className='bg'>
        <GlobalStyle/>
     <Header/>
     <ErrorBoundary  >
     <Suspense fallback={<Spinner/>}>
        <Routes>
         <Route 
           path='/'  element={<HomePage/>} />
          <Route  path='/shop/*' authed={true}  element={<ShopPage/>}>
           </Route>
          <Route exact path='/checkout'  element ={<CheckoutPage/>} />
          <Route exact  path='/signin'  element={currentUser ? <Navigate to='/'/> : <SignInAndSignUpPage/>}></Route>
          <Route exact path='/sign-up'  element ={<SignUp/>} />
        </Routes>
        </Suspense>
        </ErrorBoundary> 
    </div>
  )  
};

const mapStateToProps = createStructuredSelector({
  collectionsArray: selectCollectionsForPreview
})

 const mapDispatchToProps = (dispatch) => {
  return {
    checkUserSession: ()=> dispatch(checkUserSession())
  }
 }

export default connect(mapStateToProps, mapDispatchToProps)(App);
//"terminal.integrated.automationProfile.linux": {},