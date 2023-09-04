//import { createReducer } from "@reduxjs/toolkit";
import { addContact,deleteContact } from "./actions";

const contactsInitialState = {
    contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: ""
  };



  export const contactsReducer = (state = contactsInitialState, action) => {
    switch (action.type) {
      case addContact.type:
        return [...state, action.payload];
  
      case deleteContact.type:
        return state.filter(contact => contact.id !== action.payload);

  
      default:
        return state;
    }
  };

