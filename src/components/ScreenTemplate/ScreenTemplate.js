import React from 'react';
import './ScreenTemplate.modules.css';

const ScreenTemplate = props => {
    return (
        <div className="screen_style">
            {props.children}
        </div>);
}

export default ScreenTemplate;