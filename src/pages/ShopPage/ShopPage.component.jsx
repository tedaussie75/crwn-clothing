import React from "react";

import {Route} from 'react-router';

import CollectionOverview from '../../components/CollectionOverview/CollectionOverview.component';
import CollectionPage from '../Collection/Collection.component';

import './ShopPage.style.scss';

const ShopPage = ({match}) =>{
    return(
        <div className="shopPage">
            <Route exact path={`${match.path}`} component={CollectionOverview}/>
            <Route exact path={`${match.path}/:collectionId`} component={CollectionPage}/>
        </div>
    )
}


export default ShopPage;