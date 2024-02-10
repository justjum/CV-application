import { useState } from 'react';


export default function General( {updateName, updatePhone, updateEmail, updateProfession}) {


   return   <>
                <div className='general-input'>
                    <h3>General Info:</h3>
                    <Input type='text' id='name' onChange={updateName}/>
                    <Input type='email' id='email' onChange={updateEmail} />
                    <Input type='number' id='number' onChange={updatePhone} />
                    <Input type='text' id='profession' onChange={updateProfession} />
                </div>

            </>

}

function Input( {type, onChange, id} ) {


    return  <div>
                <label htmlFor={id}>{id}: </label>
                <input 
                    type={type}
                    onChange={onChange} 
                    id={id}/>
            </div>
}

