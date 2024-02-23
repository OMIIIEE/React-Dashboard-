 import React from 'react';
import './EnrollNewForm.css'
import StaffDetailsForm from './forms/StaffDetailsForm';

 function  EnrollNewFrom(){
    return(
        <div className='enroll-form'>
            <div className='head'>
                <button>⬅ Back</button>
                <h3>Enroll New Staff</h3>
            </div>
            <div className='forms'>
                <h2>BRANCH : SHAHEEN JUNIOR COLLEGE</h2>
                <StaffDetailsForm/>
            </div>

        </div>
    );
 }

 export default EnrollNewFrom;