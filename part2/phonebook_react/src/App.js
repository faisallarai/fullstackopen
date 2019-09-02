import React,{useState, useEffect} from 'react'
import Header from './components/Header'
import SearchForm from './components/SearchForm'
import ContactForm from './components/ContactForm'
import Contacts from './components/Contacts'
import contactService from './services/contacts'
import Notification from './components/Notification'


const App = () => {

  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [contacts, setContacts] = useState([])
  const [filter, setFilter] = useState('')
  const [messages, setMessages] = useState([])

  useEffect(() => {
    contactService.getAll().then(returnedContacts => {
      setContacts(returnedContacts)
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
  },[])

  const addNew = (event) => {
    event.preventDefault()
    const newContact = {
      name: name,
      number: number,
      active: true
    }

    if(isTextEmpty(name)){
      return alert('Name cannot be blank')
    }

    if(isTextEmpty(number)){
      return alert('Number cannot be blank')
    }

    if(isArrayEmpty(contacts)){
      return alert(`${name} already exist`)
    }
    contactService.create(newContact).then(returnedContact => {
      console.log(returnedContact)
      setContacts(contacts.concat(returnedContact))
      setName('')
      setNumber('')
      const newMessage = {
        error: '',
        success: `Added ${newContact.name}`
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

  const isArrayEmpty = (array) => {
    let bool = false
    if(array.filter(object => object.name === name ).length > 0){
      bool = true
    }
    return bool
  }

  const isTextEmpty = (text) => {
    let bool = false
    if(text === ""){
      bool = true
    }
    return bool
  }

  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  const handlePhoneNumberChange = (event) => {
    setNumber(event.target.value)
  }

  const handleFilterChange = (event) => setFilter(event.target.value)

  const contactFormProps = {
    addNew,
    handleNameChange,
    handlePhoneNumberChange,
    name,
    number
  }

  return(
    <div>
      <Header title={'Phonebook'} />
      <Notification messages={messages} />
      <SearchForm handleFilterChange={handleFilterChange} value={filter}  />
      <Contacts messages={messages} setMessages={setMessages} setContacts={setContacts} contacts={contacts} filter={filter} />
      <Header title={'add a new'} />
      <ContactForm {...contactFormProps}  />
    </div>
  )
}

export default App;
