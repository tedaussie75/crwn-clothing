import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCollections} from '../../redux/shopInfos/shopInfos.selector';

import CollectionPreview from '../ColletionPreview/ColletionPreview.component';

import './CollectionOverview.style.scss';

const CollectionOverview = ({collections}) => (
    <div className="collection-overview">
        {collections.map( ({id, ...othersProps}) => <CollectionPreview {...othersProps} key={id}/>)}
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

export default connect(mapStateToProps)(CollectionOverview);