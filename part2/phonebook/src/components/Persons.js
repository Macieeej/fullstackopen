import personsService from '../services/persons';

const Contact = (props) => {

  return (
    <li>
      {props.person.name} {props.person.number} <button onClick={() => {

      if (window.confirm(`Do you really want to delete ${props.person.name} user?`)) {
        personsService.deleteUser(props.person.id).then((response) => { console.log(response, `User ${props.person.name} deleted.`) })
        window.location.reload()
      }
      }}>delete</button>
    </li>
  )
}

const Persons = ({persons}) => {
  
  return (
    <ul>
        {persons.map(person => {
          return (
          <Contact key={person.name} person={person} />
          )
        })}
    </ul>      
  )
}

export default Persons