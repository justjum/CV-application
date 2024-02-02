import { useState } from "react";
import Icon from '@mdi/react'
import { mdiPlusThick } from '@mdi/js'

export default function Experience( { addExperience }) {

    const [workPop, setWorkPop] = useState(false);

    function workPopup() {
        setWorkPop((workPop => workPop = !workPop));

    }

    function saveWork(event) {
        event.preventDefault();
        const form = document.getElementById('experience-form');
        console.log(form.startDate.value)
        const newWork = {start: form.startDate.value, end: form.endDate.value, employer: form.employer.value, position: form.position.value}
        addExperience(newWork);
        workPopup();
    }   


    return <div className="work-experience">
                <button onClick={workPopup}><Icon path={mdiPlusThick} size={1} /></button>
                <div className="work-popup">
                    <form action="" style={{display: workPop ? 'inline' : 'none'}} id='experience-form'>
                        <label htmlFor="start-date">Start Date</label>
                        <input type="date" name='startDate' id='startDate' />
                        <label htmlFor="end-date">End Date</label>
                        <input type="date" name='endDate' id='endDate' />
                        <label htmlFor="employer">Employer</label>
                        <input type="text" name='employer' id='employer' />
                        <label htmlFor="position">Position</label>
                        <input type="text" name='position' id='position' />
                        <button onClick={saveWork}>Save</button>
                    </form>
                </div>
            </div>
}