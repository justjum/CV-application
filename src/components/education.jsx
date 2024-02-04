import { useState } from "react";
import Icon from '@mdi/react'
import { mdiPlusThick } from '@mdi/js'

export default function Education( { addEducation } ) {

    const [newEd, setNewEd] = useState({key: crypto.randomUUID()});

    const [edPop, setEdPop] = useState(false);

    function saveEducation(e) {
        e.preventDefault();
        updateData(); 
        educationPopup();
    }

    function educationPopup() {
        setEdPop((edPop) => edPop = !edPop);
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
        setNewEd((oldEducation) => ({...oldEducation, key: crypto.randomUUID()}));
        addEducation(newEd)
    }


    return  <div id='education-component'>
                <button onClick={educationPopup} ><Icon path={mdiPlusThick} size={1} /></button>
                <div className="education-popup" id='education-popup' style={{display: edPop ? 'inline' : 'none'}}>
                    <form action="" id='education-form' name='education-form'>
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
                    onChange={onChange}
                    id={id} />
            </>
}

