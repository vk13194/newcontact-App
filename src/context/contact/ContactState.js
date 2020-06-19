import React, {useReducer} from 'react';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import { v1 as uuidv1 } from 'uuid';

import {
  GET_CONTACTS,
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_CONTACTS,
  CLEAR_FILTER,
  CONTACT_ERROR
} from '../types';

const ContactState = props => {
    const initialState = {
   contacts:[     {
            id:1,
            name:"vijay kumar",
            email:"vijay@gmail.com",
            phone:"111-111-1111",
            type:'personal'
        },
        {
            id:2,
            name:"sanjay kumar",
            email:"sanjay@gmail.com",
            phone:"111-111-2222",
            type:'professional' 
        }
    ],
    current:null,
    filtered:null
}
const [state, dispatch] = useReducer(contactReducer, initialState);
   const addContact =contact =>{
       contact.id=uuidv1()
       dispatch({type:ADD_CONTACT,payload:contact})
   }
  
   const deleteContact =(id) =>{
       dispatch({type: DELETE_CONTACT, payload: id})
   }
    // Set Current Contact
  const setCurrent = contact => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };

  // Clear Current Contact
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  const updateContact = (contact) => {
    dispatch({ type: UPDATE_CONTACT, payload:contact });
  };
  
  const filterContacts = (text) => {
    dispatch({ type: FILTER_CONTACTS, payload:text });
  };

  const clearFilter = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

   return(
       <ContactContext.Provider
       value={{
           contacts:state.contacts,
           current:state.current,
           filtered:state.filtered,
           addContact,
           deleteContact,
           setCurrent,
           clearCurrent,
           updateContact,
           filterContacts,
           clearFilter
       }}
       >
           {props.children}
       </ContactContext.Provider>
   )
    };

export default  ContactState;