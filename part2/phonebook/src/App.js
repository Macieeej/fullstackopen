import { useState } from 'react'

const Contact = ( props ) => {
  console.log("Numbers called:", props.person.name)
  return (
    <li>
      {props.person.name} {props.person.phone}
    </li>
  )
}


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-123456' },
    { name: 'Ada Lovelace', phone: '39-44-5323523'},
    { name: 'Dan Abramov', phone: '12-43-234345'},
    { name: 'Mary Poppendieck', phone: '39-23-6423122'}
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filtered, setFiltered] = useState([])

  const addPerson = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)

    let isDuplicate = false
    persons.forEach(person => {
      if (person.name === newName) isDuplicate = true;
    })
    
    if (isDuplicate) {
      alert(`${newName} is already added to phonebook`)
    } else {
      const personObject = {
        name: newName,
        phone: newNumber,
      }
      console.log(personObject)
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
  }



  const handleNameChange = (event) => {
    console.log("handleNameChange called")
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log("handleNumberChange called")
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilter = (event) => {
    console.log("handleFilter called")
    console.log(event.target.value)
    const personsToShow = persons.filter(person => person.name.toLowerCase().includes(event.target.value.toLowerCase())===true)
    console.log("person to show:", personsToShow)
    setFiltered(personsToShow)
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with: <input onChange={handleFilter}/>
      </div>
      <div>
        result:
      </div>
      <ul>
        {filtered.map(person => {
          console.log("Filtered called:", person)
          return <Contact key={person.name} person={person} />
        })}
      </ul>
      <h2>Add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange}/></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => {
          console.log("Map called:", person)
          return <Contact key={person.name} person={person} />
        })}
      </ul>       
    </div>
  )
}

export default App