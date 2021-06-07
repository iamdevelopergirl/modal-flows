import React from 'react';

const LocationTypeComponent = (props) => {
    return(
        <div>
        <div>{props.title}</div>
        <select className={props.className} onChange={props.handleChange}>
            <option value="City">City</option>
            <option value="Zip">Zip</option>
            <option value="Country">Country</option>
        </select>
        </div>
    )
}

export default LocationTypeComponent;