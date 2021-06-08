import React from 'react';
import ButtonComponent from './ButtonComponent';

const ListColumnsBody = [
    {
        name : "Elakya",
        email : "test2",
        mobileNum : "131123",
        locType : "123",
        locString : "123",
        action : "adsa"
    },
    {
        name : "Elakya",
        email : "test2",
        mobileNum : "131123",
        locType : "123",
        locString : "123",
        action : "adsa"
    },
    {
        name : "Elakya",
        email : "test2",
        mobileNum : "131123",
        locType : "123",
        locString : "123",
        action : "adsa"
    },
    {
        name : "Elakya",
        email : "test2",
        mobileNum : "131123",
        locType : "123",
        locString : "123",
        action : "adsa"
    }
]

const TableDataComponentWrapper = (props) => {
    return(
        <div className="table-data-container">
            {props.responseData.map((listItem, index) => {
                return (
                    <TableDataComponent key={listItem.id} id={listItem.id} item={listItem} handleDeleteModal={props.handleDeleteModal}/>
                )
            })}
        </div>
    )
}

const TableDataComponent = (props) => {
    let name = `${props.item.first_name} ${props.item.last_name}`;
    return(
        <div className="data-container">
            <div className={`list-col-1`}>
                {name}
            </div>
            <div className={`list-col-2`}>
                {props.item.email}
            </div>
            <div className={`list-col-3`}>
                {props.item.mobile}
            </div>
            <div className={`list-col-4`}>
                {props.item.location_type}
            </div>
            <div className={`list-col-5`}>
                {props.item.location_string}
            </div>
            <div className={`list-col-6`}>
                <ButtonComponent id={props.id} className="update_lead_modal_btn mark_update_btn" name="Mark Update" onClick={props.handleMarkUpdate}/>
                <ButtonComponent id={props.id} className="delete_lead_modal_btn close_delete_lead_main" name="Delete" onClick={() => props.handleDeleteModal(props.id)}/>    
            </div>
        </div>
    )
}

export default TableDataComponentWrapper;