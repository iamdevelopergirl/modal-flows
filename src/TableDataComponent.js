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
            {ListColumnsBody.map((listItem, index) => {
                return (
                    <TableDataComponent key={index} id={index + 1} item={listItem} handleDeleteModal={props.handleDeleteModal}/>
                )
            })}
        </div>
    )
}

const TableDataComponent = (props) => {
    return(
        <div className="data-container">
            <div className={`list-col-1`}>
                {props.item.name}
            </div>
            <div className={`list-col-2`}>
                {props.item.email}
            </div>
            <div className={`list-col-3`}>
                {props.item.mobileNum}
            </div>
            <div className={`list-col-4`}>
                {props.item.locType}
            </div>
            <div className={`list-col-5`}>
                {props.item.locString}
            </div>
            <div className={`list-col-6`}>
                <ButtonComponent className="delete_lead_btn" name="Mark Update" onClick={props.handleMarkUpdate}/>
                <ButtonComponent className="close_add_lead" name="Delete" onClick={props.handleDeleteModal}/>    
            </div>
        </div>
    )
}

export default TableDataComponentWrapper;