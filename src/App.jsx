import { useState } from 'react'
import Education from './components/education'
import General from './components/general-info'
import Experience from './components/experience'
import './App.css'

function App() {

  const [currentPerson, setPerson] = useState({name: '', email: '', phone: ''});

  function updateName(e) {
    setPerson((oldPerson) => ({...oldPerson, name: e.target.value}) )
}

function updateEmail(e) {
    setPerson((oldPerson) => ({...oldPerson, email: e.target.value}) )
}

function updatePhone(e) {
    setPerson((oldPerson) => ({...oldPerson, phone: e.target.value}) )
}

  const [education, setEducation] = useState([]);

  function addEducation(newEd) {
    setEducation([...education, newEd])
    console.log(education)
  }

  const [skills, setSkills] = useState([]);

  function addSkill(newSkill) {
    setSkills([...skills, newSkill]);
  }


  return (
    <>

      <General updateName={updateName} updatePhone={updatePhone} updateEmail={updateEmail}/>
      <Education education={education} addEducation={addEducation} />
      <Experience />
      <div className='output'>
                    <h3>Name: {currentPerson.name}</h3>
                    <h3>Email: {currentPerson.email}</h3>
                    <h3>Phone: {currentPerson.phone}</h3>
                    <div>
                      <h3>Education:</h3>
                      {education.map((course) => (
                        <ul >
                          <li key={course.key}>{course.endYear} <em>{course.school}</em> {course.course}</li>
                        </ul>
                      ))}
                    </div>
                    <div>
                    <h3>Skills:</h3>
                    {skills.map((skill) => (
                      <ul>
                        <li>{skill}</li>
                      </ul>
                      ))}
                    </div>

                    

      </div>
    </>
  )
}

export default App



