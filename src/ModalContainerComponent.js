import React from 'react';
import ReactDOM from 'react-dom'
import AddLeadModalComponent from './AddLeadComponent';
import DeleteComponent from './DeleteComponent';
import MarkUpdateComponent from './MarkUpdateComponent';
import './styles/modal-component.css';

function ModalContent(props) {
    const { open, children } = props;
    let className = "portal-modal"
    if (open) {
        className += " portal-modal-open"
    }

    return (
        <div className={className}>
            {children}
        </div>
    )
}

class OnBoardModal extends React.Component {

    componentDidMount() {
        this.node = document.getElementById("modal-container") || document.createElement('div');
        if (this.node) {
            ReactDOM.render(
                <ModalContent {...this.props} />,
                this.node
            );
        }
    }

    componentDidUpdate() {
        ReactDOM.render(
            <ModalContent {...this.props} />,
            this.node
        );
    }

    componentWillUnmount() {
        ReactDOM.unmountComponentAtNode(this.node)
    }

    render() {
        // returning this dummy el ensures reference to the component is returned
        // returning null won't return refernce to the component
        // script is an ideal el to return here as no css gets applied on script el
        return <script />
    }
}

export default class ModalContainerComponent extends React.Component{
    render(){
        let view = null;
        switch(this.props.modalType) {
            case "AddLead":
                view = <AddLeadModalComponent handleSave={this.props.handleSave} handleClose={this.props.handleClose}/>
                break;
            case "DeleteLead":
                view = <DeleteComponent deleteId={this.props.deleteId} handleDelete={this.props.handleDelete} handleCancel={this.props.handleCancel}/>
                break;
            case "MarkUpdate":
                view = <MarkUpdateComponent deleteId={this.props.deleteId} data={this.props.data} handleMarkUpdate={this.props.handleMarkUpdate} handleCancel={this.props.handleCancel}/>
                break;
            default:
                break;
        }
        return(
        <div>
            <OnBoardModal open={true}>
                {view}
            </OnBoardModal>
         </div>   
        )
    }
}