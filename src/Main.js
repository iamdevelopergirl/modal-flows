import React from 'react';
import ButtonComponent from './ButtonComponent';
import TableHeaderComponent from './TableHeaderComponent';
import TableDataComponentWrapper from './TableDataComponent';
import ModalContainerComponent from './ModalContainerComponent';
import './styles/table-style.css';

export default class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showModal : false,
            modalType : "AddLead"
        }
    }

    handleDelete = () => {
        //call the api
        this.setState({
            showModal : false
        });
    }

    handleCancel = () => {
        this.setState({
            showModal : false
        });
    }

    handleSave = (state) => {
        //call the api
        this.setState({
            showModal : false
        });
    }

    handleClose = () => {
        this.setState({
            showModal : false
        });
    }

    handleAddClick = () => {
        this.setState({
            showModal : true
        });
    }

    handleDeleteModal = () => {
        this.setState({
            showModal : true,
            modalType : "DeleteLead"
        });
    }

    render(){
        return(
            <div>
                {this.state.showModal ? <ModalContainerComponent modalType={this.state.modalType} handleCancel={this.handleCancel} 
                handleClose={this.handleClose}
                handleDelete={this.handleDelete}
                handleSave={this.handleSave}
                /> : <div></div>}
                <ButtonComponent className="add_lead_modal_btn" name="Add Lead" onClick={this.handleAddClick}></ButtonComponent>
                <div className="leads_table">
                    <TableHeaderComponent/>
                    <TableDataComponentWrapper handleDeleteModal={this.handleDeleteModal}/>
                </div>
            </div>
        )
    }
}