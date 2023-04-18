import axios from 'axios';
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';



export default function Register() {
  const navigate=useNavigate()
  let [err,setError]=useState("")
function redirectToLogin(){
  navigate('/login')
}
async  function registerSubmit(values) {
    try{
      const {data}= await axios.post('https://route-ecommerce.onrender.com/api/v1/auth/signup',values)
      if(data.message=='success'){
        navigate('/login')
        setError('')
        console.log('sucsee')
  
      }
      }
      catch(err){
        console.log(err)
        setError(err.response.data.errors.msg)
      }

  }
  const schema=Yup.object({
    name:Yup.string().required('Name is requird').min(3,'min length is 3 character').max(15,'max length is 15'),
    email:Yup.string().required('Email is requird').email(),
    password:Yup.string().required('password is required').matches(/^[A-Z][a-z]{3,10}@[0-9]{2,5}$/,"pasword not valid"),
    rePassword:Yup.string().required('password is required').oneOf([Yup.ref('password')],'password is not matching'),
    phone:Yup.string().required('phone is requird')
  })
  let formik =useFormik({
    initialValues:{
      name:'',
      email:'',
      password:'',
      rePassword:'',
      phone:''
    
    },
    validationSchema:schema,
    onSubmit:registerSubmit
  })
  return (
    <>
    <div className="container">
      <div className="row  g-0 mt-3">
     
        <div className="col-md-6 ">
         <div className="bg-image "></div>
        </div>
        <div className="col-md-6 bg-form ">
         <div className="p-4">
         <h3 className="text-center   text-secondary mb-3">Create My Account!</h3>
          <form className="row g-3 " onSubmit={formik.handleSubmit}>
          <div className="col-12">
             
              <input
                type="text"
                className="form-control bg-dark text-white"
                id="exampleFormControlInput2"
                placeholder="Name"
                name='name'
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.name?<p className="alert alert-danger">{formik.errors.name}</p>:''}
            </div>
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
             
              <input
                type="password"
                className="form-control bg-dark text-white"
                id="exampleFormControlInput4"
                placeholder="Repassword"
                name='rePassword'
                value={formik.values.rePassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
             {formik.errors.rePassword?<p className="alert alert-danger">{formik.errors.rePassword}</p>:''}

            </div>
            <div className="col-12">
             
              <input
                type="text"
                className="form-control bg-dark text-white"
                id="exampleFormControlInput5"
                placeholder="phone"
                name='phone'
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            {formik.errors.phone?<p className="alert alert-danger">{formik.errors.phone}</p>:''}

            </div>
            <div className="col-12">
             
              <button className="btn btn-dark w-100">Create Account</button>
            </div>
            {err?<p className='alert alert-danger text-center'>{err}</p>:''}

            <div><span className="text-secondary text-center">This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</span></div>
            <div className='text-white text-center'>
              <p>Already a member?  <a onClick={redirectToLogin}>Login</a></p>

            </div>
            
          </form>
         </div>
        </div>
      </div>
    </div>
  </>
  )
}
