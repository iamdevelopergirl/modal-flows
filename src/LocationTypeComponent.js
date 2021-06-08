import React from 'react';

const LocationTypeComponent = (props) => {
    return(
        <div>
        <div className="text-container">{props.title}</div>
        <select name="location_type" className="value-container" onChange={props.handleChange}>
            <option value="City">City</option>
            <option value="Zip">Zip</option>
            <option value="Country">Country</option>
        </select>
        </div>
    )
}

export default LocationTypeComponent;