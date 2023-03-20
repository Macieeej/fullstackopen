import { useState, useEffect } from 'react'
import axios from 'axios'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import personsService from './services/persons'


const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filtered, setFiltered] = useState([])

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
    persons.forEach(person => {
      if (person.name === newName) isDuplicate = true;
    })
    
    if (isDuplicate) {
      alert(`${newName} is already added to phonebook`)
    } else {
      const personObject = {
        name: newName,
        number: newNumber,
      }
      //setPersons(persons.concat(personObject))
      //setNewName('')
      //setNewNumber('')

      personsService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
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
      <Filter handleFilter={handleFilter} filtered={filtered} />

      <h2>Add a new</h2>
      <PersonForm addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />

      <h2>Numbers</h2>
      <Persons persons={persons}/>
    </div>
  )
}

export default App