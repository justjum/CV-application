import { useState } from "react";
import Icon from '@mdi/react'
import { mdiPlusThick, mdiPencil, mdiContentSave } from '@mdi/js'

export default function Skills( { addSkill, skills, editSkill, saveSkill } ) {

    const [skillPop, setSkillPop] = useState(false);

    function handleSkillsView() {
        document.getElementById('skill').value='';
        setSkillPop((skillPop => skillPop = !skillPop)); 
    }

    function handleNewSkill(event) {
        event.preventDefault();
        handleSaveSkill(event.target.skill.value, false)
    }

    function handleSaveSkill(name, inEdit) {
        const skill = {name: name, inEdit: inEdit}
        console.log(skill);
        addSkill(skill);
        handleSkillsView();
    }


    return  <div id='skills-component'>
            <h3>Skills:</h3>
                {console.log(skills)}   
                {skills.map((skill) => (
                    <Skill skill={skill} handNewSkill={handleNewSkill} handleEditSkill={editSkill} handleSaveSkill={saveSkill} key={skill.key} save={true}/>

                ))}
                <button onClick={handleSkillsView}><Icon path={mdiPlusThick} size={1} /></button>
                <div className="skills-popup" style={{display: skillPop ? 'inline' : 'none'}}>
                    <form action="" onSubmit={handleNewSkill} id='skills-form'>
                        <label htmlFor="skill"></label>
                        <input type="text" name="skill" id='skill' autoComplete="false" />
                    </form>
                </div>
            </div>
}

function Skill( { skill, handleSaveSkill, handleEditSkill, save }) {
    if (skill.inEdit) {
        return  <div className="skill-item"  >
                    <form onSubmit={handleSaveSkill} id={skill.key} action="">
                        <label htmlFor="skill"></label>
                        <input className="edit-input" type="text" name='skill' id='skill' autoComplete="false" defaultValue={skill.name} ></input> 
                        <button type="submit"><Icon path={mdiContentSave} size={0.75} /></button>
                    </form>   
                    
                </div>

    } else {
        return <div className="skill-item edit-button" onClick={handleEditSkill} id={skill.key} save='false' >
                    <p >{skill.name}</p> 
                    <button ><Icon path={mdiPencil} size={0.75} /></button> 
                </div>
    }


}