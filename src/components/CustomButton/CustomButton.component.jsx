import React from 'react';

import './CustomButton.style.scss';

const CustomButton = ({isGoogleSignIn, inverted, ...othersProps}) => (
    <button className={`custom-button ${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''}` } {...othersProps}>
        {othersProps.value}
    </button>
)

export default CustomButton;