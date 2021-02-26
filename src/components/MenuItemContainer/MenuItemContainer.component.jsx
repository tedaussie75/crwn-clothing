import React from "react";
import {connect} from 'react-redux';
import { createStructuredSelector } from "reselect";
import itemInfoselector from '../../redux/itemsInfos/itemsInfos.selectors';
import MenuItem from '../MenuItem/MenuItem.component';
import './MenuItemContainer.style.scss';

const MenuItemContainer = ({items}) =>{
    return(
        <div id="menuItemContainer">
            { items.map( ({id, ...othersProps}) =><MenuItem {...othersProps} key={id}/>)
            }
        </div>
    )
};

const mapStateToProps = createStructuredSelector({
    items : itemInfoselector
})

export default connect(mapStateToProps)(MenuItemContainer);