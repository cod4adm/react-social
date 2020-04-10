import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _state : {
        profilePage: {
            postData : [
                {id: 1, message: 'Hi. How are you?', likesCount: 13},
                {id: 2, message: 'It\'s my first post', likesCount: 51}
            ],
            newPostText: 'hey hou'
        },
        dialogsPage: {
            dialogsData : [
                {id: 1, name: 'Дима'},
                {id: 2, name: 'Саша'},
                {id: 3, name: 'Андрей'},
                {id: 4, name: 'Коля'}
            ],
            messagesData : [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Hello'},
                {id: 4, message: 'Why!?'}
            ],
            newMessageBody: ''
        }
    },
    _rerenderEntireTree () {
        console.log('State changed');
    },

    getState () {
        return this._state;
    },
    subscribe (observer) {
        this._rerenderEntireTree = observer;
    },

    dispatch (action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._rerenderEntireTree(this._state);
    }
};

export default store;