import React from "react";
import styled from 'styled-components';

export default function Icon({children}){
    return(
        <StyledIcon > {children}</StyledIcon>
    )
}

const StyledIcon = styled.div`
   height: 2.5rem;
   width: 2.5rem;
   display: flex;
   justify-content: center;
   align-items : center;
   border-radius: 4rem;
   cursor: pointer;
   background: rgb(131,58,180);
   background: radial-gradient(circle, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 44%, rgba(252,176,69,1) 83%);
   color: white;
   svg{
    width: 1.5rem;
    height: 1.5rem;
   }
`;