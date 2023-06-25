import React from "react";
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const handleSuccess=()=>{
    MySwal.fire({
     icon:'success',
     title:'Payment was succesful',
     confirmButtonText: 'Cool'  
    });
}

const handleError =()=>{
    MySwal.fire({
     icon:'error',
     title:'Invalid payment, please ensure you use the provided card details ',
     confirmButtonText: 'Oh Okay' 
    });
}


const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 1000;
    const publishablekey = 'pk_test_51MkabaKMI64olOgIfSzkqlSbBnZmAUsX8JtH4RqFMUlFZOdnzCfDtISUGTbo85jaBwSLFtugBQj51j2fMUyJPOVS00HDBovth7';
    const onToken =  async token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response=>{
            if(response.status===200){
               handleSuccess();
            };
        }).catch(error=> {
        handleError();
    });
       
    }

    return(
     <StripeCheckout
      label = 'Pay Now'
      name="Toyin Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description= {`Your total is ${price}`}
      amount = {priceForStripe}
      panelLabel ='Pay Now'
      token={onToken}
      stripeKey ={publishablekey}
      />
    )
} ;

export default StripeCheckoutButton;