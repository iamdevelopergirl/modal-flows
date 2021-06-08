import React from 'react';
import ButtonComponent from './ButtonComponent';
import InputComponent from './InputComponent';

class MarkUpdateComponent extends React.Component { 
    constructor(props){
        super(props);
        this.state = {
            value : "",
        }
    }

    componentDidMount = () => {
        let index = this.props.data.findIndex(item => item.id === this.props.deleteId);
        this.setState({
            value : this.props.data[index]["communication"]
        });
    }

    handleChange = (event) => {
        this.setState({
            value : event.target.value
        });
    }

    render(){
        return(
        <div>  
            <div className="update_lead_form">
                <div className="header_container">
                    <header className="mark-update-header">
                        Mark Communication
                    </header>  
                </div>
                <div>
                    <p className="communication_header"> Communication </p>
                    <textarea name="communication" className="communication_textarea" value={this.state.value} onChange={this.handleChange}/>
                </div>
                <section className="delete-lead-action-container">
                    <ButtonComponent className="update_lead_btn" name="Save" onClick={() => this.props.handleMarkUpdate(this.props.deleteId, this.state.value)}/>
                    <ButtonComponent className="cancel_mark_update" name="Close" onClick={this.props.handleCancel}/>    
                </section>
            </div>
        </div>
        )
    }
}

export default MarkUpdateComponent;