import React from "react";

import CollectionItem from '../CollectionItem/CollectionItem.component';
import { withRouter} from 'react-router-dom';

import './ColletionPreview.style.scss';

const CollectionPreview = ({title,items,match, history}) => {
    return(
        <div className="collectionPreviewContainer">
            <h3 onClick={()=> history.push(`${match.path}/${title.toLowerCase()}`)}>{title.toUpperCase()}</h3>
            <div className="collectionPreview">
                {items.filter( (item, index)  => index < 4).map( item => 
                    <CollectionItem  key={item.id} item={item}/>)}
            </div>
        </div>
    )
}


export default withRouter(CollectionPreview);