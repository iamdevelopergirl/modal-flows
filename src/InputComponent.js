import React from 'react';
import './styles/input-box.css';

const InputComponent = (props) => {
    return (
        <div>
            <div className="text-container">{props.title}</div>
            <input type="text" className="value-container" name={props.name} onChange={props.onChange}/>
        </div>
        
        
    )
}

export default InputComponent;