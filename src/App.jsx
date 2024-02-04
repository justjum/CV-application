import { useState } from "react";
import Education from "./components/education";
import General from "./components/general-info";
import Experience from "./components/experience";
import Skills from "./components/skills";
import Icon from "@mdi/react";
import { mdiPencil, mdiTrashCan } from "@mdi/js";
import "./App.css";

function App() {
  const [currentPerson, setPerson] = useState({
    name: "",
    email: "",
    phone: "",
  });

  function updateName(e) {
    setPerson((oldPerson) => ({ ...oldPerson, name: e.target.value }));
  }

  function updateEmail(e) {
    setPerson((oldPerson) => ({ ...oldPerson, email: e.target.value }));
  }

  function updatePhone(e) {
    setPerson((oldPerson) => ({ ...oldPerson, phone: e.target.value }));
  }

  const [education, setEducation] = useState([]);

  function addEducation(newEd) {
    setEducation([...education, newEd]);
    console.log(education);
  }

  const [experience, setExperience] = useState([]);

  function addExperience(newExp) {
    setExperience([...experience, newExp]);
    console.log(experience);
  }

  const [skills, setSkills] = useState([{key: crypto.randomUUID(), name: 'Javascript', inEdit: false},{key:crypto.randomUUID(), name: 'React', inEdit:false}, {key:crypto.randomUUID(), name: 'HTML', inEdit: false}]);

  function addSkill(newSkill) {
    setSkills([...skills, newSkill]);
  }

  function editSkill(event) {
    event.preventDefault();
    skills.map((skill) => {
      if (skill.key===event.target.id) {
        skill.inEdit=!skill.inEdit;
      }
    }
    );
    setSkills([...skills])
    console.log(skills);
  };

  function saveSkill(event) {
    event.preventDefault();
    console.log(event);
    skills.map((skill) => {
      if(skill.key===event.target.id) {
        skill.name=event.target[0].value;
        skill.inEdit=!skill.inEdit;
      }
    });
    setSkills([...skills])
    console.log(skills);
  }



  return (
    <>
      <h1>Resume Builder</h1>
      <General
        updateName={updateName}
        updatePhone={updatePhone}
        updateEmail={updateEmail}
      />
      <div className="output">
        <h4>Name: {currentPerson.name}</h4>
        <h4>Email: {currentPerson.email}</h4>
        <h4>Phone: {currentPerson.phone}</h4>
        <div>
          <h3>Education:</h3>
          <Education education={education} addEducation={addEducation} />
          {education.map((course) => (
            <ul>
              <li key={course.key}>
                {course.endYear} <em>{course.school}</em> {course.course}{" "}
                <button>
                  <Icon path={mdiPencil} size={0.75} />
                </button>{" "}
              </li>
            </ul>
          ))}
        </div>
        <div>
          <h3>Experience</h3>
          <Experience experience={experience} addExperience={addExperience} />
          {experience.map((work) => (
            <ul>
              <li key={work.key}>
                {work.start} {work.end} {work.employer} {work.position}{" "}
                <button>
                  <Icon path={mdiPencil} size={0.75} />
                </button>{" "}
              </li>
            </ul>
          ))}
        </div>
        <div>

          <Skills skills={skills} addSkill={addSkill} editSkill={editSkill} saveSkill={saveSkill}/>
        </div>
      </div>
    </>
  );
}

export default App;
