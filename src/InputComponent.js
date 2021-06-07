import React from 'react';
import './styles/input-box.css';

const InputComponent = (props) => {
    return (
        <label>
            <div className="text-container">{props.title}</div>
            <input type="text" className="value-container" name={props.name} onChange={props.onChange}/>
        </label>
        
    )
}

export default InputComponent;