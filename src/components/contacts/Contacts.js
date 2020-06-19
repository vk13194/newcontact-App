import React, {Fragment, useContext} from 'react'
import ContactContext from '../../context/contact/contactContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ContactItem from './ContactItem'
const Contacts = () => {
    const contactContext = useContext(ContactContext)
    const {contacts, filtered} = contactContext

    if(contacts.length === 0){
        return <h3>please enter some contact</h3>
    }
    return (
      /* <Fragment>
           {filtered !== null ? filtered.map(contact => 
           (<ContactItem key={contact.id} contact={contact}/>)):
           contacts.map(contact =>(
            <ContactItem key={contact.id} contact={contact}/>
        ))
           }
           
       </Fragment>*/
       <Fragment>
           <TransitionGroup>
          {filtered !== null
            ? filtered.map(contact => (
                <CSSTransition
                  key={contact._id}
                  timeout={500}
                  classNames='item'
                >
                  <ContactItem contact={contact} />
                </CSSTransition>
              ))
            : contacts.map(contact => (
                <CSSTransition
                  key={contact._id}
                  timeout={500}
                  classNames='item'
                >
                  <ContactItem contact={contact} />
                </CSSTransition>
              ))}
        </TransitionGroup>
       </Fragment>
    )
}

export default Contacts
