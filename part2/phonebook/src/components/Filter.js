const Contact = (props) => {
  
  console.log("Numbers called:", props.person.name)
  return (
    <li>
      {props.person.name} {props.person.phone}
    </li>
  )
}

const Filter = ({handleFilter, filtered}) => {
  
  return (
    <>
      <div>
        filter shown with: <input onChange={handleFilter} />
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
    </>    
  )
}

export default Filter