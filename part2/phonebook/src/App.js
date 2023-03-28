import { useState, useEffect } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import personsService from './services/persons'
import Notification from './components/Notification'
import Error from './components/Error'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filtered, setFiltered] = useState([])
  const [confMessage, setConfMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  const hook = () => {
    console.log('effect')
    personsService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons.data)
        console.log(initialPersons.data)
      })
  }
  console.log('render', persons.length, 'notes')
  useEffect(hook, [])

  const addPerson = (event) => {
    event.preventDefault()

    let isDuplicate = false
    let localId = 0
    persons.forEach(person => {
      if (person.name === newName) {
        isDuplicate = true;
        localId = person.id;
        console.log("ID:", localId)
      }
    })
    
    if (isDuplicate) {
      if (window.confirm(`${newName} is already addedt to phonebook, replace the old number with a new one?`)) {
        const personObject = {
          name: newName,
          number: newNumber,
        }

        personsService
          .update(localId, personObject)
          .then(() => {
            setConfMessage(`${personObject.name}'s number changed`)
            setNewName('')
            setNewNumber('')
            setTimeout(() => {
              setConfMessage(null)
              window.location.reload()
            }, 3000)
            })
            
      }
      
    } else {
      const personObject = {
        name: newName,
        number: newNumber,
      }

      personsService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
          setConfMessage(`Added ${personObject.name}`)
          setTimeout(() => {
            setConfMessage(null)
            window.location.reload()
          }, 3000)
         })
    }
  }


  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  

  const handleFilter = (event) => {
    const personsToShow = persons.filter(person => person.name.toLowerCase().includes(event.target.value.toLowerCase())===true)
    setFiltered(personsToShow)
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={confMessage} />
      <Error message={errorMessage}/>
      <Filter handleFilter={handleFilter} filtered={filtered} />

      <h2>Add a new</h2>
      <PersonForm addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />

      <h2>Numbers</h2>
      <Persons persons={persons}  setErrorMessage={setErrorMessage} setConfMessage={setConfMessage} />
    </div>
  )
}

export default App