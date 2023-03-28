import personsService from '../services/persons';

const Contact = (props) => {

  return (
    <li>
      {props.person.name} {props.person.number} <button onClick={() => {
      let errVal = true;

      if (window.confirm(`Do you really want to delete ${props.person.name} user?`)) {
        personsService
          .deleteUser(props.person.id)
          .catch(error => {
            errVal = false;
            props.setErrorMessage(
              `Information of ${props.person.name} has already been removed from server`
            )
            setTimeout(() => {
              props.setErrorMessage(null)
              window.location.reload()
            }, 3000)
          })
          .then((response) => { 
            if(errVal) {
              props.setConfMessage(`Deleted ${props.person.name}`)
              setTimeout(() => {
                props.setConfMessage(null)
                window.location.reload()
              }, 3000) 
            }
           })
        //window.location.reload()
      }
      }}>delete</button>
    </li>
  )
}

const Persons = ({persons, setErrorMessage, setConfMessage}) => {
  
  return (
    <ul>
        {persons.map(person => {
          return (
          <Contact key={person.name} person={person} setErrorMessage={setErrorMessage} setConfMessage={setConfMessage}/>
          )
        })}
    </ul>      
  )
}

export default Persons