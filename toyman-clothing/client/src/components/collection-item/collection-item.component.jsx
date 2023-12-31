import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import "./collection-item.styles.scss";

import { connect } from "react-redux";

import { addItem } from "../../redux/cart/cart.action";

const CollectionItem = ({item,  addItem}) => {

 const { name, price, imageUrl}=item;

    return(
    <div className="collection-item">
        <div className="image"
        style={{backgroundImage:`url(${imageUrl})`}}/>
        <div className="collection-footer"> 
         <span className="name">{name}</span>
         <span className="price">${price}
         </span>
        </div>
        <CustomButton onClick={()=> addItem(item)}  inverted className='custom-button'>Add to Cart</CustomButton>
  </div>
    )

}

const mapDispatchToProps = (dispatch) => {
    return {
        addItem: (item) => {
            dispatch(addItem(item))
        }
    }
}

export default connect(null, mapDispatchToProps)(CollectionItem);      