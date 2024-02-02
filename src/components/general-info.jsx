import { useState } from 'react';


export default function General( {updateName, updatePhone, updateEmail}) {


   return   <>
                <div className='general-input'>
                    <h3>General Info</h3>
                    <Input type='name' id='name' onChange={updateName}/>
                    <Input type='email' id='email' onChange={updateEmail} />
                    <Input type='number' id='number' onChange={updatePhone} />
                </div>

            </>

}

function Input( {type, onChange, id} ) {


    return  <>
                <label htmlFor={type}>{type}: </label>
                <input 
                    type={type}
                    onChange={onChange} 
                    id={id}/>
            </>
}

