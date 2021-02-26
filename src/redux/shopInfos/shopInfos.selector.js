import {createSelector} from 'reselect';

const COLLECTION_ID_MAP = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    womens: 4,
    mens: 5
} 

const selectShopInfos = state => state.shopInfos;

export const selectCollections = createSelector(
    [selectShopInfos],
    collections => collections.shopData
)

export const selectCollection = collectionUrlParam => createSelector(
    [selectCollections],
    collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
)