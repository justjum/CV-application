import { useState } from 'react';


export default function General( {updateName, updatePhone, updateEmail}) {


   return   <>
                <div className='general-input'>
                    <h1>General</h1>
                    <Input type='name' onChange={updateName}/>
                    <Input type='email' onChange={updateEmail} />
                    <Input type='phone' onChange={updatePhone} />
                </div>

            </>

}

function Input( {type, onChange} ) {


    return  <>
                <label htmlFor={type}>{type}: </label>
                <input 
                    type="text"
                    onChange={onChange} />
            </>
}

