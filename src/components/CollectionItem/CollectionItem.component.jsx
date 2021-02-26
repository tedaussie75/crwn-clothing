import React from "react";

import {connect} from 'react-redux';
import CustomButton from '../CustomButton/CustomButton.component';

import {addItem} from '../../redux/cart/cart.actions.js'

import './CollectionItem.style.scss';

const CollectionItem = ({item, addItem}) => {
    const {name, imageUrl,price} = item;
    return(
        <div className="CollectionItem">
            <div className="item-container">
                <img src={imageUrl} alt={name} />
                <CustomButton inverted value="Add to cart" onClick={() => addItem(item)}/>
            </div>
            <span>{name}</span>
            <span>{price} $</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null,mapDispatchToProps)(CollectionItem);