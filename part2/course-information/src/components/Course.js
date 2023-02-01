const Header = ({ course }) => <h1>{course}</h1>

const Content = ({ parts }) => 
  <>
     {parts.map(part => 
        <Part key={part.id} name={part.name} exercises={part.exercises}/>
      )}  
  </>

const Part = ( part ) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Sum = ( {parts} ) => {
  const total = parts.reduce((s, p) => s + p.exercises, 0)

  return (
    <b>
      total of {total} exercises
    </b>
  )
}

const Course = ({course}) => {

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Sum parts={course.parts}/>
    </div>
  )

}

export default Course