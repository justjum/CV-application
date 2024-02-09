import { useState } from "react";
import Icon from '@mdi/react'
import { mdiPlusThick, mdiPencil } from '@mdi/js'

export default function Education( { addEducation, education, editEducation, saveEducation, updateEducation } ) {

    const [newEd, setNewEd] = useState({inEdit: false});

    const [edPop, setEdPop] = useState(false);

    function saveEducation(e) {
        e.preventDefault(); 
        console.log(newEd)
        addEducation(newEd)
        educationPopup();
    }

    function educationPopup(e) {
        document.getElementById('end-year').value=""
        document.getElementById('school').value=""
        document.getElementById('course').value=""
        setNewEd((oldEducation) => ({...oldEducation, key: crypto.randomUUID(), endYear: "", school: "", course: ""}));
        setEdPop((edPop) => edPop = !edPop);
        console.log(newEd)
    }
    

    function updateCourse(e) {
        console.log(e)
        setNewEd((oldEducation) => ({...oldEducation, course: e.target.value}));
    } 

    function updateEndYear(e) {
        console.log(e);
        setNewEd((oldEducation) => ({...oldEducation, endYear: e.target.value}));
    } 

    function updateSchool(e) {
        setNewEd((oldEducation) => ({...oldEducation, school: e.target.value}))
    }

    return  <div id='education-component'>
                {education.map((course) => {
                    if (course.inEdit) {
                        return (
                            <ul>
                            <li id={course.key}>
                                {course.endYear} <em>{course.school}</em> {course.course}{" "}
                                <div className="education-edit" id='education-edit' >
                                    <form action="" id={course.key} name='education-form' onSubmit={updateEducation}>
                                        <Input type='number' id='end-year-edit' onChange={updateEndYear} defaultValue={course.endYear}/>
                                        <Input type='text' id='school-edit' name='school' onChange={updateSchool} defaultValue={course.school} />
                                        <Input type='text' id='course-edit' name='course' onChange={updateCourse} defaultValue={course.course} />
                                        <button type="submit" >Save</button>
                                    </form>
                    
                                </div>
                            </li>
                            </ul>
                        )
                    } else {
                        return (
                            <ul>
                                <li id={course.key} className="education-card" onClick={editEducation}>
                                    {course.endYear} <em>{course.school}</em> {course.course}{" "}
                                    <button>
                                        <Icon path={mdiPencil} size={0.75} />
                                    </button>{" "}
                                </li>
                            </ul>
                        )
                    }
                }
)}
                <button onClick={educationPopup} ><Icon path={mdiPlusThick} size={1} /></button>
                <div className="education-popup" id='education-popup' style={{display: edPop ? 'inline' : 'none'}}>
                    <form action="" id='education-form' name='education-form' onSubmit={saveEducation}>
                        <Input type='number' id='end-year' onChange={updateEndYear} />
                        <Input type='text' id='school' name='school' onChange={updateSchool}/>
                        <Input type='text' id='course' name='course' onChange={updateCourse} />
                        <button type="submit" >Save</button>
                    </form>
    
                </div>
            </div>
}


function Input( {id, type, onChange, defaultValue} ) {
    
    
    return  <>
                <label htmlFor={id}>{id}: </label>
                <input 
                    type={type}
                    onChange={onChange}
                    id={id} 
                    defaultValue={defaultValue}
                  />
                    
            </>
}
