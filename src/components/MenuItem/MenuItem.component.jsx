import React from "react";

import './MenuItem.style.scss';

import { withRouter} from 'react-router-dom';

const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => (
    <div className={`menuItem ${size}`} onClick={()=> history.push(`${match.url}${linkUrl}`)}>
        <img src={imageUrl} alt={title} />
        <div className="menuItemContent">
            <p>{title}</p>
            <p>SHOP NOW</p>
        </div>
    </div>
)

export default withRouter(MenuItem);