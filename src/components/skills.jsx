import { useState } from "react";
import Icon from '@mdi/react'
import { mdiPlusThick } from '@mdi/js'

export default function Skills( { addSkill } ) {

    const [skillPop, setSkillPop] = useState(false);

    function skillsPopup() {
        setSkillPop((skillPop => skillPop = !skillPop)); 
    }

    function saveSkill(event) {
        event.preventDefault();
        const skill = event.target.skill.value;
        console.log(skill);
        addSkill(skill);
        skillsPopup();
    }

    return  <div id='skills-component'>
                <button onClick={skillsPopup}><Icon path={mdiPlusThick} size={1} /></button>
                <div className="skills-popup" style={{display: skillPop ? 'inline' : 'none'}}>
                    <form action="" onSubmit={saveSkill} id='skills-form'>
                        <label htmlFor="skill"></label>
                        <input type="text" name="skill" id='skill' autoComplete="false" />
                    </form>
                </div>
            </div>
}
