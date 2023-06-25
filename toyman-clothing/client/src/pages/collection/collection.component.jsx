import React from "react";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";
import './collection.styles.scss';
import CollectionItem from "../../components/collection-item/collection-item.component";

const CollectionPage = ( {collections})=> { 

    const {title, items} = collections;
     console.log(collections);
     console.log(title, items);    
     return(
    <div className="collection-page">
        <h2 className="title"> {title}</h2>
     <div className="items">
       { items.map(item =>  (<CollectionItem key={item.id} item={item} />))
       }
     </div>
    </div>
)};
 

const mapStateToProps = (state, ownProps) => ({
   collections: 
    selectCollection(ownProps.collectionId)(state)

});


export default connect(mapStateToProps)(CollectionPage);