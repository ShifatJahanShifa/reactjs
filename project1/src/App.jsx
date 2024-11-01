import './App.css'

function App() {
  const title="welcome to the new blog"
  const likes=50
  const person={
    name: 'shifa',
    age: 22
  }
  const array=['mango', 'banana', 'apple', 'lichies']
  const people=[]
  people.push(person)
  people.push({name: 'shoaib', age: '3'})
  people.push({name: 'Rifa', age: 24})
  // const filteredPerson = (key, value) => 
  //   {
  //     if(typeof (value) === 'string') return value 
  //     return "noop"
  //   }
  // console.log(filteredPerson)
  const filteredPerson=['name']
  return (
    <>
      <h1>{title}</h1>
      <p>liked by {likes} person</p>
      <p>name: {person.name} and age: {person.age}</p>

      <div>
        <ul>
          {array.map((value,key) => (
            <li key={key}>{value}</li>
          ))}
        </ul>
      </div>
      
      <div style={{display: 'flex', flexDirection: 'column'}}>   
      {
        people.map((person, key)=>(
          <div key={key} style={{backgroundColor: 'skyblue', padding: '2px', marginBottom: '30px'}} className='w-24'>
            <p style={{textAlign: 'left'}}>{person.name}</p>
            <p style={{textAlign: 'left'}}>{person.age}</p>
          </div>
        ))
      }
      </div> 
     
      <div>
        <pre>{JSON.stringify(person,filteredPerson,'\t')}</pre>
      </div>
    </>
  )
}

export default App
