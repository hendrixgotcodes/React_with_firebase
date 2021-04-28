import React from 'react'
import fb from './services/Firebase'

class App extends React.Component{

  state = {
    student: [],
    input: ""
  }

  fetchData = ()=>{

    const students = []

    const stateCopy = this.state

    fb.db.collection('students')
          .get()
          .then(
              snapshot=>{
                
                snapshot.forEach(doc=> {
                  const data = doc.data()
                  students.push(data)
                  
                })

                stateCopy.student = students

                this.setState(stateCopy)

              }
          )
          .catch(err => console.log(err))

  }


  componentDidMount(){

    this.fetchData()

  }

  render(){

    const func = ()=>{

      fb.db.collection("students")
            .add({
              name: this.state.input,
              age: 22,
              graduated: true,
              points: 23394,
              joined_at: new Date()
            })
            .then(()=>{
                this.fetchData()
            })

    }

    return(
        <div className="App">
            <h1>Upperline Students</h1>

            <button onClick= {func}>Add New Student</button> 
            <input 
                  value={this.state.input} 
                  id="#input" 
                  type="text"
                  onInput = {(e)=>{

                      const stateCopy = this.state
                      stateCopy.input = e.target.value

                      this.setState(stateCopy)

                  }}
            />

            <ul>
              {
                this.state.student && (
                  this.state.student.map(stud =>(
                    <>
                      <li>
                        Name: {stud.name}
                        <br/>
                        Age: {stud.age}
                        <br/>
                        Graduated: {stud.graduated === true ? "Yes" : "No" }
                        <br/>
                        Points: {stud.points}
                        <br/>
                        Joined: {stud.joined_at.toDate().toString()}
                      </li>
                      <br/>
                    </>
                  ))
                )
              }
            </ul>
        </div>
    )

  }

}

export default App