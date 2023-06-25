import React from "react";
import { connect } from "react-redux";
import { ReactComponent as Logo } from "../../assets/crown.svg.svg";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import {createStructuredSelector} from 'reselect';
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { signOutStart } from "../../redux/user/user.action";
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink} from "./header.styles";

const Header = ( {currentUser, hidden, signOutStart} ) => (
  <HeaderContainer>
    <LogoContainer to='/' >
      <Logo className = "logo"/>
      </LogoContainer>
    <OptionsContainer>
        <OptionLink to= '/shop'>
            SHOP
        </OptionLink>
        <OptionLink to = '/shop'>
            ABOUT
        </OptionLink>
        {
            currentUser? <OptionLink as='div' onClick={signOutStart}> LOGIN</OptionLink>  : <OptionLink to = '/signin'>
            LOGOUT
        </OptionLink>
       }
        <CartIcon/>

    </OptionsContainer>
    {
      hidden ? null :
    <CartDropdown/> 
    }
  </HeaderContainer>

);
   
const  mapStateToProps = createStructuredSelector({ 
  currentUser: selectCurrentUser,
  hidden : selectCartHidden
 })
    const mapDispatchToProps = (dispatch) => {
    return {
      signOutStart: () => {
        dispatch(signOutStart())
      }
    }
   }

 export default connect(mapStateToProps, mapDispatchToProps) (Header);