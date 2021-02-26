import React from 'react';

import {connect} from 'react-redux';

import { selectCollection } from '../../redux/shopInfos/shopInfos.selector';
import CollectionItem from '../../components/CollectionItem/CollectionItem.component';

import './Collection.style.scss';


const CollectionPage = ({collection}) => {
    const {title, items} = collection;
    return(

        <div className="Collection">
            <h2>{title}</h2>
            {
                items.map(item => <CollectionItem  key={item.id} item={item}/>)
            }
        </div>
    )

}

const mapStateToProps = (state, ownProps) => ({
    collection : selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);