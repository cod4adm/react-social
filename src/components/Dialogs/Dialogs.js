import React from 'react';
import DialogItem from "./DialogItem";
import Message from "./Message";
import {Field, reduxForm} from "redux-form";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogsData.map ( dialog => <DialogItem id={dialog.id} key={dialog.id} name={dialog.name} />);
    let messagesElements = state.messagesData.map (  message => <Message message={message.message} key={message.id} />);
    let newMessageBody = state.newMessageBody;

    let onNewMessageChange = (event) => {
        let body = event.target.value;
        props.updateMessageBody(body);
    };

    let addNewMessage = (event) => {
        let body = event.target.value;
        props.updateMessageBody(body);
    };

    let onSendMessageClick = () => {
        props.sendMessage();
    };

    return (
        <div className="dialogs">
            <div className="dialogs__list">
                {dialogsElements}
            </div>
            <div className="messages">
                {messagesElements}
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    );
};

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field  component={"textarea"} name={"newMessageBody"} placeholder="Enter your message..." />
            <button>Send</button>
        </form>
    )
};

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"}) (AddMessageForm);

export default Dialogs;