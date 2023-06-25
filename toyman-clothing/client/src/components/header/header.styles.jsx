import styled from 'styled-components';
import {Link} from 'react-router-dom';



export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-item : center; 
  background: linear-gradient(to right, #14163c 0%, #b4b6cf 20%);
  vertical-align: center;

  @media screen and (max-width: 800px){
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
`;

export const LogoContainer = styled (Link)`
height: 100%;
width: 70px;
padding: 20px;
justify-content: center;
align-item: center;
margin-right: 3px;
&:hover{ padding: 25px; }

@media screen and (max-width: 800px){
width: 50px
padding: 0;
}
`;

 export const OptionsContainer = styled.div`
 width: 50%;
 height: 100%;
 display: flex;
 align-items: center;
 justify-content: flex-end;
 margin-right: 30px;
 @media screen and (max-width: 800px){
  width: 80%;
 }
 
 `;

 export const OptionLink = styled(Link)`
 padding: 10px 30px;
 font-weight: 500;
 
 text-decoration: none;
 color: black;
 font-size: large;
 font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif ;
 cursor : pointer;
 &:hover{
  color: rgb(144, 47, 255);
  font-size: larger;
 `;