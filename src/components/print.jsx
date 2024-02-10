import Icon from '@mdi/react';
import { mdiCardAccountMailOutline, mdiCardAccountPhoneOutline } from '@mdi/js';
import React, { useRef } from 'react';
//import format from 'date-fns/format'


export default function Print( { currentPerson, education, skills, experience } ) {
    const ref = useRef<HTMLDivElement>('print-layout')



    return <div className="print-layout">
                    <div className="general-left">
                        <h1>{currentPerson.name}</h1>
                        <h2>{currentPerson.profession}</h2>
                    </div>
                    <div className="general-right">
                        <h4><Icon path={mdiCardAccountMailOutline} size={1.25} /> {currentPerson.email}</h4>
                        <h4><Icon path={mdiCardAccountPhoneOutline} size={1.25} /> {currentPerson.phone}</h4>
                    </div>
                <div className="education-print">
                    <h2>Education</h2>
                    <ul className="ed-print">
                    {education.map((course)=> {

                        return  <>
                                    <li><Schooling course={course} /> </li>
                                </>
                                
                            
                        })
                    }
                    </ul>
                </div>
                <div className="experience-print">
                    <h2>Experience</h2>
                    <ul className='ex-print'>
                        {experience.map((position) => {
                            return <>
                                    <li><Experience position={position} /></li>
                                </>
                        })}
                    </ul>

                </div>
                <div className="skills-print">
                    <h2>Skills</h2>
                    <ul className='skills-print'>
                        {skills.map((skill) => {
                            return <>
                                <li><Skills skill={skill}/></li>
                            </>

                            
                        })}
                    </ul>
                </div>
                
                
            </div>
}

function Schooling( { course }) {
    return (
        <>
            <p>{course.endYear} ~ <em>{course.school}</em> <b>{course.course}</b></p>
        </>
    )
}

function Experience( { position } ) {
    return (
        <>
            <p>{position.start} - {position.end}</p>
            <p><b>{position.employer}</b> </p>
            <p>{position.position} </p>
        </>
    )
}

function Skills ( {skill} ) {
    return (
        <>
            <p><b>{skill.name}</b></p>
        </>
    )
}


//date-fns formatting
// <p>{format(position.start, 'dd/mm/yyyy')} - {format(position.end, 'dd/mm/yyyy')}</p>