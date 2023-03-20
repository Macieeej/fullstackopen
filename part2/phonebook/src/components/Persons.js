const Contact = (props) => {

  return (
    <li>
      {props.person.name} {props.person.number}
    </li>
  )
}

const Persons = ({persons}) => {
  
  return (
    <ul>
        {persons.map(person => {
          //console.log("Map called:", person)
          return <Contact key={person.name} person={person} />
        })}
    </ul>      
  )
}

export default Persons