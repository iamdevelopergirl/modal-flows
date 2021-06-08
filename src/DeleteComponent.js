import React from 'react';
import ButtonComponent from './ButtonComponent';

const DeleteComponent = (props) => {
    return(
        <div>
            
            <div className="delete_lead_form">
                <div className="header_container">
                    <header className="delete-lead-header">
                        Do you wish to delete this lead?
                    </header>  
                </div>
                <section className="delete-lead-action-container">
                    <ButtonComponent className="delete_lead_btn" name="Delete" onClick={() => props.handleDelete(props.deleteId)}/>
                    <ButtonComponent className="cancel_delete_lead" name="Cancel" onClick={props.handleCancel}/>    
                </section>
            </div>
        </div>
    )
}

export default DeleteComponent;