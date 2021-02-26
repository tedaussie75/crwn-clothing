import {createSelector} from 'reselect';

const selectItems = state => state.items;

const itemInfoselector = createSelector(
    [selectItems],
    items => items.sections
)

export default itemInfoselector;