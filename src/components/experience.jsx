import { useState } from "react";
import Icon from '@mdi/react'
import { mdiPlusThick, mdiPencil } from '@mdi/js'


export default function Experience( { addExperience, editExperience, updateExperience, experience }) {

    const [workPop, setWorkPop] = useState(false);

    function workPopup() {
        document.getElementById('startDate').value="";
        document.getElementById('endDate').value="";
        document.getElementById('employer').value="";
        document.getElementById('position').value="";
        setWorkPop((workPop => workPop = !workPop));

    }

    function saveWork(event) {
        event.preventDefault();
        const form = document.getElementById('experience-form');
        const newWork = {key: crypto.randomUUID(), inEdit: false, start: form.startDate.value, end: form.endDate.value, employer: form.employer.value, position: form.position.value}
        addExperience(newWork);
        workPopup();
    }   


    return <div className="work-experience">
                {experience.map((work) => {
                    if (work.inEdit) {
                        return <ul>
                                    <li id={work.key} >
                                        <form action="" id={work.key} onSubmit={updateExperience}>
                                            <label htmlFor="start-date">Start Date</label>
                                            <input type="date" name='startDate' id='startDate' defaultValue={work.start}/>
                                            <label htmlFor="end-date">End Date</label>
                                            <input type="date" name='endDate' id='endDate' defaultValue={work.end}/>
                                            <label htmlFor="employer">Employer</label>
                                            <input type="text" name='employer' id='employer' defaultValue={work.employer} />
                                            <label htmlFor="position">Position</label>
                                            <input type="text" name='position' id='position' defaultValue={work.position} />
                                            <button >Save</button>
                                        </form>
                                    </li>
                                </ul>

                        
                    } else
                    return (
                    <ul>
                        <li id={work.key} className="experience-card" onClick={editExperience}>
                            {'From '}<b>{work.start}</b>{' to'} <b>{work.end} {work.employer}</b> {'as'} <b>{work.position}</b> {" "}
                            <button>
                            <Icon path={mdiPencil} size={0.75} />
                            </button>{" "}
                        </li>
                    </ul>
                    )})}
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