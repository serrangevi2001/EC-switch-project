import {combineReducers} from 'redux'; 
import loginReducer from "./login.reducers";
import NotesReducer from '../../../../store/apps/notes/NotesSlice';
import CustomizerReducer from '../../../../store/customizer/CustomizerSlice';
import ChatsReducer from '../../../../store/apps/chat/ChatSlice';
import ContactsReducer from '../../../../store/apps/contacts/ContactSlice';
import EmailReducer from '../../../../store/apps/email/EmailSlice';
import TicketReducer from '../../../../store/apps/ticket/TicketSlice';

 // install it

const rootReducer =combineReducers({  // in this (combineReducers) it combine all other reducers files in main reducer
    loginReducer,
     customizer: CustomizerReducer,
    notesReducer: NotesReducer,
    chatReducer: ChatsReducer,
    contactsReducer: ContactsReducer,
    emailReducer: EmailReducer,
    ticketReducer: TicketReducer,
});
export default rootReducer;