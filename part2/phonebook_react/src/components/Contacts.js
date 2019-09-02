import React from 'react'
import Contact from './Contact'
import contactService from '../services/contacts'

const Contacts = ({contacts, filter, setContacts, messages, setMessages}) => {

    const isEmpty = (str) => str.length === 0
  
    const contactsToShow = isEmpty(filter) ? contacts : contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
  
    const deleteContact = (contact_id) => {
      const contact = contacts.find(c => c.id === contact_id)
      if(window.confirm(`Delete ${contact.name} ?`)){
        contactService.remove(contact_id).then(returnedContact => {
          setContacts(contacts.filter(n => n.id !== contact_id))
          const newMessage = {
            error: '',
            success: `${contact.name} is deleted successfully`
          }
          setMessages(messages.concat(newMessage))
          setTimeout(() => {
            setMessages([])
          }, 3000);

        }).catch(errorr => {
          const newMessage = {
            error: `Information of ${contact.name} has already been removed from server`,
            success: ''
          }
          setMessages(messages.concat(newMessage))
          setTimeout(() => {
            setMessages([])
          }, 3000);
        })
      }
      
    }

    const toggleActive = (contact_id) => {
      const newContact = contacts.find(contact => contact.id === contact_id)
      const changedContact = {...newContact, active: !newContact.active}
      contactService.update(contact_id, changedContact).then(returnedContact => {
        setContacts(contacts.map(c => c.id !== contact_id ? c : returnedContact ))
        const newMessage = {
          error: '',
          success: `${returnedContact.name} is ${returnedContact.active ? 'activated' : 'deactivated'} successfully`
        }
        setMessages(messages.concat(newMessage))
        setTimeout(() => {
          setMessages([])
        }, 3000);
      }).catch(errorr => {
        const newMessage = {
          error: errorr.message,
          success: ''
        }
        setMessages(messages.concat(newMessage))
        setTimeout(() => {
          setMessages([])
        }, 3000);
      })
    }

    const contactList = () => contactsToShow.map(contact => { 
      return(<Contact toggleActive={toggleActive} handleDeleteClick={()=>deleteContact(contact.id)} key={contact.id} contact={contact} />)
    })
  
    return(
      <table className='phonetable'>
        <tbody>
          {contactList()}
        </tbody>
      </table>
    )
  }

  export default Contacts