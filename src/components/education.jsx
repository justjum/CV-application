import { useState } from "react";

export default function Education( { addEducation } ) {

    const [newEd, setNewEd] = useState({key: 0});

    const [popUp, setPopUp] = useState(false);

    function saveEducation(e) {
        e.preventDefault();
        updateData(); 
        educationPopup();
    }

    function educationPopup() {
        setPopUp((popUp) => popUp = !popUp);
    }
    

    function updateCourse(e) {
        setNewEd((oldEducation) => ({...oldEducation, course: e.target.value}));
    } 

    function updateEndYear(e) {
        setNewEd((oldEducation) => ({...oldEducation, endYear: e.target.value}));
    } 

    function updateSchool(e) {
        setNewEd((oldEducation) => ({...oldEducation, school: e.target.value}))
    }

    function updateData() {
        setNewEd((oldEducation) => ({...oldEducation, key: oldEducation.key+1}));
        addEducation(newEd)
    }


    return  <div id='education-component'>
                <h2>Education</h2>
                <button onClick={educationPopup} >Add Education</button>
                <div className="education-popup" id='education-popup' style={{display: popUp ? 'inline' : 'none'}}>
                    <form action="POST" id='education-form' name='education-form'>
                        <Input type='number' id='end-year' onChange={updateEndYear}/>
                        <Input type='text' id='school' name='school' onChange={updateSchool}/>
                        <Input type='text' id='course' name='course' onChange={updateCourse} />
                        <button type="submit" onClick={saveEducation}>Save</button>
                    </form>

                </div>
            </div>
}

function Input( {id, type, onChange} ) {


    return  <>
                <label htmlFor={id}>{id}: </label>
                <input 
                    type={type}
                    onChange={onChange} />
            </>
}

