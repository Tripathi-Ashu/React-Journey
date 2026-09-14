

import { useState } from 'react'

function StudentForm() {
     

    const [formData , setFormData] =useState({
        name:"",
        email:"",
        password:"",
        gender:"",
        city:"",
        skills:[],
        message:"",
        agree: false
    });


    // function handleChange(e) {

    //     const {name , value , type , checked } =e.target;

    //     if(type === 'checkbox' && name === 'skills') {

    //         setFormData((prev)=> ({
    //             ...prev, 
    //             skills: checked ? [...prev.skills ,value]: prev.skills.filter((skill) => skill !== value)
    //         }));
    //     } else if (type === 'checkbox') {

    //         setFormData ((prev)=> ({
    //             ...prev, [name]:checked
    //         })) ;
    //     } else {

    //         setFormData((prev)=> ({
    //             ...prev, 
    //             [name]: value
    //         }));
    //     }
    // }

    // function handleSubmit(e) {
    //     e.preventDefault();

    //     console.log('summitted Data:');
    //     console.log(formData);

    //     alert ('form submmited successfully!');
    // }

    return (
        <>
         <h1>HIi</h1>
        </>
    )
}


export default StudentForm;