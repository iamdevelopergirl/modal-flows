import React from 'react';
import './styles/button.css';

const ButtonComponent = (props) => {
    return (
        <button type="button" id={props.id} className={`button-component ${props.className}`} onClick={props.onClick} disabled={props.disabled}>{props.name}</button>
    )
}

export default ButtonComponent;