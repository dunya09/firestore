
import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import { Route, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Contact from './Contact';

const validationSchema=Yup.object({
    name:Yup.string().min(2,'Name must be at least 2 charcters').required('Name is required'),
    email:Yup.string().email(2,'Invalid email address').required('Email is required'),
    password:Yup.string().min(8,'Password must be at least 8 charcters').required('Password is required'),
})

const Home = () => {
    const formik=useFormik({
        initialValues:{name:'',email:'',password:''},
        validationSchema,
        onSubmit:(values,{resetForm})=>{
            console.log('Form Data',values);
            resetForm();
            
        }
    })
    const route=useNavigate()

    const Yoxla=(e)=>{
        e.preventDefault()
        // console.log(formik.values);
        // 
        
            if (formik.values.name && formik.values.password && formik.values.email) {route('/contact')
                
            }
            else{
                console.log("no") 
            }
        }
  return (
   
      <div className="App">
<h2>Registration Form</h2>
<form onSubmit={formik.handlSubmit}>
  <div>
    <label htmlFor="name">Name</label>
    <input
      type="text"
      id="name"
      name="name"
      onChange={formik.handleChange}
      value={formik.values.name}
    />
    {formik.errors.name?<div className="error">{formik.errors.name}</div>:null}
  </div>

  <div>
    <label htmlFor="email">Email</label>
    <input
      type="email"
      id="email" name="email"
      onChange={formik.handleChange}
      value={formik.values.email}
    />
        {formik.errors.email?<div className="error">{formik.errors.email}</div>:null}
  </div>

  <div>
    <label htmlFor="password">Password</label>
    <input
      type="text"
      id="password"
      name="password"
      onChange={formik.handleChange}
      value={formik.values.password}
    />
        {formik.errors.password?<div className="error">{formik.errors.password}</div>:null}
  </div>
 
  <button type="submit" onClick={Yoxla}>
    Submit
  </button>
</form>
</div>
  
  )
}

export default Home
