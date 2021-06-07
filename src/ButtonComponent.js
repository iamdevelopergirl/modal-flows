import React from 'react';
import './styles/button.css';

const ButtonComponent = (props) => {
    return (
        <button type="button" className="button-component" onClick={props.onClick} disabled={props.disabled}>{props.name}</button>
    )
}

export default ButtonComponent;