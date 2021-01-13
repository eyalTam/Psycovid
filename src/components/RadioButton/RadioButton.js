import React from 'react';
import '../ContentStyling/ContentStyling.modules.css';

const CheckBox = props => {
    return(
        <div className='check_box_container'>
            <label for={props.description}> {props.description}</label>
            <input className="check_box" type="radio"  name={props.name} onChange={props.changed}/>
        </div>
)}

export default CheckBox;