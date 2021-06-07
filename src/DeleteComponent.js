import React, { isValidElement } from 'react';
import ButtonComponent from './ButtonComponent';

const DeleteComponent = (props) => {
    return(
        <div>
            <div className="delete_lead_form">
                <header>
                    Do you wish to delete this lead
                </header>
                <section>
                    <ButtonComponent className="delete_lead_btn" name="Delete" onClick={props.handleDelete}/>
                    <ButtonComponent className="close_add_lead" name="Cancel" onClick={props.handleCancel}/>    
                </section>
            </div>
        </div>
    )
}

export default DeleteComponent;