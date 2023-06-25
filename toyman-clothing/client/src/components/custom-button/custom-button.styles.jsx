import styled, {css} from 'styled-components';

const buttonStyles = css`
background: linear-gradient(to right, #14163c 0%, #03217b 79%);
color: white;
border : none;
width: 75%;
letter-spacing: 0.2rem;
height: 3 rem;
border-radius: 2rem;
&:hover {
     color: yellow;
    border: 1px solid #03217b;
}
  
`;

const invertedButtonStyles = css`
background: linear-gradient(to right, #14163c 0%, #03217b 79%);
width:100%;
color: white;
border-radius: 2rem;
font-size: 11px;

&:hover {
  color: yellow;
  border: none;
}
`;
const googleSignInStyles= css`
background-color: #8042f4;
color: white;
width: 100%;
letter-spacing: 0.2rem;
height: 2 rem;
color: white;
border-radius: 2rem;
&:hover {
  background-color: #35e871;
}
`;

const getButtonStyles = props =>{
    if (props.isGoogleSignIn){
        return googleSignInStyles;
    }
    return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
min-width: 165px;
line-height: 50px;
padding: 0 35px ;
font-size: 15px;
text-transform: uppercase;
font-weight: bolder;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;

 
${getButtonStyles}
`