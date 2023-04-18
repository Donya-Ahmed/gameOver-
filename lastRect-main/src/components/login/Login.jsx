import axios from 'axios';
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import  { useContext } from 'react'
import {LoginContext} from '../../context/Context.js'



export default function Login() {
  const navigate=useNavigate()
  let [err,setError]=useState("")
  let {decodeUser} =useContext(LoginContext)

 
function redirectToRegister(){
  navigate('/register')
}
async  function loginSubmit(values) {
    try{
     
      const {data}= await axios.post('https://route-ecommerce.onrender.com/api/v1/auth/signin',values)
      
      if(data.message=='success'){
        localStorage.setItem('token',data.token)
        decodeUser()
        setError('')
        navigate('/home')
        console.log('sucsee')
  
      }
      }
      catch(err){
        console.log(err)
        setError(err.response.data.message)
      }

  }
  const schema=Yup.object({
    email:Yup.string().required('Email is requird').email(),
    password:Yup.string().required('password is required').matches(/^[A-Z][a-z]{3,10}@[0-9]{2,5}$/,"pasword not valid"),
  })
  let formik =useFormik({
    initialValues:{
     
      email:'',
      password:''
     
    
    },
    validationSchema:schema,
    onSubmit:loginSubmit
  })
  return (
    <>
    <div className="container ">
      <div className="row  g-0 mt-3">
     
        <div className="col-md-6 ">
         <div className="bg-image "></div>
        </div>
        <div className="col-md-6 bg-form ">
         <div className="p-4">
         <h3 className="text-center   text-secondary mb-3">lOGON!</h3>
          <form className="row g-3 " onSubmit={formik.handleSubmit}>
        
            <div className="col-12">
             
              <input
                type="email"
                className="form-control bg-dark text-white"
                id="exampleFormControlInput1"
                placeholder="Email"
                name='email'
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
             {formik.errors.email?<p className="alert alert-danger">{formik.errors.email}</p>:''}

            </div>
            <div className="col-12">
             
              <input
                type="password"
                className="form-control bg-dark text-white"
                id="exampleFormControlInput3"
                placeholder="password"
                name='password'
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            {formik.errors.password?<p className="alert alert-danger">{formik.errors.password}</p>:''}

            </div>
     
            
            <div className="col-12">
             
              <button className="btn btn-dark w-100">Login</button>
            </div>
            {err?<p className='alert alert-danger text-center'>{err}</p>:''}

            <div><span className="text-secondary text-center">This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</span></div>
            <div className='text-white text-center'>
              <p>Create Account?  <a onClick={redirectToRegister}>Register</a></p>

            </div>
            
          </form>
         </div>
        </div>
      </div>
    </div>
  </>
  )
}
