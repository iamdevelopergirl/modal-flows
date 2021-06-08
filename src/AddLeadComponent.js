import React from 'react';
import ButtonComponent from './ButtonComponent';
import LocationTypeComponent from './LocationTypeComponent';
import InputComponent from './InputComponent';

export default class AddLeadModalComponent extends React.Component { 

    constructor(props){
        super(props);
        this.state = {
            saveDisabled : true,
            first_name : "",
            last_name : "",
            email : "",
            mobile : "",
            location_type : "City",
            location_string : ""
        }
    }

    isNil(obj){
        if (typeof obj === 'undefined' || obj === null) {
            return true;
        }
        return false;
    }

    isString(str){
        if (!this.isNil(str) && (typeof str === "string")) {
            return true;
        }
        return false;
    }

    _isVaildEmail(email) {
        if (!this.isString(email) || email.length === 0 || email.length > 320) {
          return false;
        }
        let reg = /^([A-Za-z0-9!#$%&'*+/=?^‘{|}~_\-\.])+\@([a-zA-Z0-9\-\.])+\.([a-zA-Z0-9\-]+)$/;
        if (reg.test(email) === false) {
            return false;
        }
        return true;
    }

    _validateInputs(){
        if(!this.isString(this.state.first_name) || !this.isString(this.state.last_name) ||
            !this.isString(this.state.email) || !this.isString(this.state.mobile) ||
            !this.isString(this.state.location_string)){

        }
        else{
            this.setState({
                saveDisabled : false
            })
        }
        
    }

    handleSubmit = (event) => {
      event.preventDefault();
    }

    _handleChange = (event) => {
        const value = event.target.value;
        this.setState({
            ...this.state,
            [event.target.name]: value
        });

        if(event.target.name === "location_string" && this._validateInputs()){
            this.setState({
                saveDisabled : false
            });
        }
    }


    render(){
        return (
        <form className="add_lead_form" onSubmit={this.handleSubmit}>
          <div className="header_container">
            <header className="add-lead-header">
                Add Lead
            </header>  
          </div>
          <div className="add_lead_form_container">
          <section className="add-lead-input-container">
            <InputComponent
              title="First Name"
              name="first_name"
              value={this.state.firstName}
              onChange={this._handleChange}
            />
            <InputComponent
              title="Last Name"
              name="last_name"
              value={this.state.lastName}
              onChange={this._handleChange}
            />
          </section>
          <section className="add-lead-input-container">
            <InputComponent
              title="Email"
              name="email"
              value={this.state.email}
              onChange={this._handleChange}
            />
            <InputComponent
              title="Mobile"
              name="mobile"
              value={this.state.mobile}
              onChange={this._handleChange}
            />
          </section>
          <section className="add-lead-input-container">
            <LocationTypeComponent
              title="Location Type"
              onChange={this.handleChange}
            />
            <InputComponent 
              title="Location String"
              name="location_string"
              value={this.state.locationString}
              onChange={this._handleChange}
            />
          </section>
          <section className="add-lead-action-container">
            <ButtonComponent className="close_add_lead" name="Close" onClick={this.props.handleClose}/>
            <ButtonComponent className="add_lead_btn" name="Save" onClick={() => this.props.handleSave(this.state)} disabled={this.state.saveDisabled}/>
          </section>
          </div>
          
        </form>
        )
    }
}