import React from 'react';
import ButtonComponent from './ButtonComponent';
import TableHeaderComponent from './TableHeaderComponent';
import TableDataComponentWrapper from './TableDataComponent';
import ModalContainerComponent from './ModalContainerComponent';
import './styles/table-style.css';
import './styles/main.css';

export default class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showModal : false,
            modalType : "",
            responseData : []
        }
    }

    componentDidMount(){
        fetch("http://3.227.13.153:4000/api/leads/?location_string=India", { method: 'GET' })
        .then((response) => {
            console.log(response.status);
            if(response.status === 200){
                return response.json();
            }
        }).then((data) => {
            // `data` is the parsed version of the JSON returned from the above endpoint.
            console.log(data); 
            this.setResponseData(data);
        });
    }

    setResponseData = (response) => {
        this.setState({
            responseData :  response
        })
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

    createNewGuid = () => {
        let d = new Date().getTime();
        let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            let r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c === 'x' ? r : (r & 0x7 | 0x8)).toString(16);
        });
        return uuid;
    };

    handleSave = (state) => {
        //call the api
        let addLeadData = {
            "id" : this.createNewGuid(),
            "first_name" : state.first_name,
            "last_name" : state.last_name,
            "mobile" : state.mobile,
            "email" : state.email,
            "location_type" : state.location_type,
            "location_string" : state.location_string
          }
        fetch("http://35.175.131.85:4000/api/leads/", 
        { method: 'POST',
          body : JSON.stringify(addLeadData) 
        })
        .then((response) => {
            console.log(response.status);
        });
        
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
            showModal : true,
            modalType : "AddLead"
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
                <div className="main_container">
                    
                    <div className="add-lead-container">
                        <ButtonComponent className="add_lead_modal_btn" name="Add Lead" onClick={this.handleAddClick}></ButtonComponent>
                    </div>
                    
                    <div className="leads_table">
                        <TableHeaderComponent/>
                        <TableDataComponentWrapper handleDeleteModal={this.handleDeleteModal} responseData={this.state.responseData}/>
                    </div>

                {this.state.showModal ? <ModalContainerComponent modalType={this.state.modalType} 
                handleCancel={this.handleCancel} 
                handleClose={this.handleClose}
                handleDelete={this.handleDelete}
                handleSave={this.handleSave}
                /> : null}
                </div>
            </div>
        )
    }
}