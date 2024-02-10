import { useState } from "react";
import Education from "./components/education";
import General from "./components/general-info";
import Experience from "./components/experience";
import Skills from "./components/skills";
import Print from "./components/print";
import "./App.css";

function App() {
  function handlePrint() {
    window.print();
  }
  const [currentPerson, setPerson] = useState({
    name: "Jum",
    email: "jum@thisone.com",
    phone: "0400-000-000",
    profession: "Software Developer",
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

  function updateProfession(e) {
    setPerson((oldPerson) => ({ ...oldPerson, profession: e.target.value }));
  }

  const [education, setEducation] = useState([
    {
      key: crypto.randomUUID(),
      inEdit: false,
      school: "Monash University",
      endYear: 2022,
      course: "Computer Science",
    },
  ]);

  function addEducation(newEd) {
    setEducation([...education, newEd]);
    console.log(education);
  }

  function editEducation(event) {
    event.preventDefault();
    console.log(event);
    education.map((education) => {
      if (education.key === event.target.id) {
        education.inEdit = !education.inEdit;
      }
    });
    setEducation([...education]);
    console.log(education);
  }

  function updateEducation(e) {
    e.preventDefault();
    console.log(e);
    education.map((education) => {
      if (education.key === e.target.id) {
        education.endYear = e.target[0].value;
        education.school = e.target[1].value;
        education.course = e.target[2].value;
        education.inEdit = !education.inEdit;
      }
    });
    setEducation([...education]);
  }

  const [experience, setExperience] = useState([
    {
      key: crypto.randomUUID(),
      inEdit: false,
      start: "2022-12-04",
      end: "2023-12-17",
      employer: "Google",
      position: "Coffee Kid",
    },
  ]);

  function addExperience(newExp) {
    setExperience([...experience, newExp]);
    console.log(experience);
  }

  function editExperience(e) {
    e.preventDefault();
    experience.map((work) => {
      if (work.key === e.target.id) {
        work.inEdit = !work.inEdit;
      }
    });
    setExperience([...experience]);
    console.log(experience);
  }

  function updateExperience(e) {
    e.preventDefault();
    experience.map((work) => {
      if (work.key === e.target.id) {
        console.log(e.target.startDate.value);
        work.start = e.target.startDate.value;
        work.end = e.target.endDate.value;
        work.employer = e.target.employer.value;
        work.position = e.target.position.value;
        work.inEdit = !work.inEdit;
      }
    });
    setExperience([...experience]);
    console.log(experience);
  }

  const [skills, setSkills] = useState([
    { key: crypto.randomUUID(), name: "Javascript", inEdit: false },
    { key: crypto.randomUUID(), name: "React", inEdit: false },
    { key: crypto.randomUUID(), name: "HTML", inEdit: false },
  ]);

  function addSkill(newSkill) {
    setSkills([...skills, newSkill]);
  }

  function editSkill(event) {
    event.preventDefault();
    skills.map((skill) => {
      if (skill.key === event.target.id) {
        skill.inEdit = !skill.inEdit;
      }
    });
    setSkills([...skills]);
  }

  function saveSkill(event) {
    event.preventDefault();
    skills.map((skill) => {
      if (skill.key === event.target.id) {
        skill.name = event.target[0].value;
        skill.inEdit = !skill.inEdit;
      }
    });
    setSkills([...skills]);
  }

  return (
    <>
      <div className="container">
        <h1 className="title">Resume Builder</h1>
        <button className="print-button" onClick={handlePrint}>
          Print Me!
        </button>
        <General
          updateName={updateName}
          updatePhone={updatePhone}
          updateEmail={updateEmail}
          updateProfession={updateProfession}
        />
        <div className="output">
          <div>
            <h3>Education:</h3>
            <Education
              education={education}
              addEducation={addEducation}
              editEducation={editEducation}
              updateEducation={updateEducation}
            />
          </div>
          <div>
            <h3>Experience</h3>
            <Experience
              experience={experience}
              addExperience={addExperience}
              editExperience={editExperience}
              updateExperience={updateExperience}
            />
          </div>
          <div>
            <Skills
              skills={skills}
              addSkill={addSkill}
              editSkill={editSkill}
              saveSkill={saveSkill}
            />
          </div>
        </div>
      </div>
      <Print
        currentPerson={currentPerson}
        skills={skills}
        experience={experience}
        education={education}
      />
    </>
  );
}

export default App;
