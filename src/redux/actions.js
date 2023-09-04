import { createAction, nanoid } from "@reduxjs/toolkit";


export const addContact = createAction("contacts/addContact", text => {
    return {
      payload: {
        text,
        id: nanoid(),
      },
    };
  });


  export const deleteContact = createAction("contacts/deleteContact");
export const setStatusFilter = createAction("filters/setStatusFilter");