import React , { useContext } from 'react';
import { MainFlowContext } from '../MainFlow/MainFlow';
import './Button.modules.css';

const Button = props => {
    const context = useContext(MainFlowContext);
    // console.log(context);
    const description = props.description;
    return (
    <div className='button_wrapper'>
        <button className="button_style" onClick={props.clicked? props.clicked : () => context.clicked(props.path)}>
        {description}
        </button>
    </div>
    )}

export default Button;