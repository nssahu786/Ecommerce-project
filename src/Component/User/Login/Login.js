import React, { useEffect, useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { login,clearErrors } from '../../../Redux/Actions/UserActions';
import { useSelector,useDispatch } from 'react-redux';
import MetaData from '../../Layouts/Meta/MetaData';
import Loading from '../../Layouts/Loading/Loading';
import { useAlert } from 'react-alert';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Login() {

  const history = useNavigate()

  const dispatch = useDispatch()
  
  


  const[email,setEmail] = useState("")
  const[password,setPassword] = useState("")

  const alert = useAlert()


  const {isAuthenticated,error,Loading} = useSelector((state)=>state.auth)
  const a = useSelector((state)=>state.auth)
  console.log(a)


  useEffect(()=>{
    if(error){
      alert.error(error)
      dispatch(clearErrors())
    }
    if(isAuthenticated){
      history('/account')
    }

  },[dispatch,alert,error,isAuthenticated,history])

  const submitHandler =(e)=>{
    e.preventDefault();
    //console.log(email)
    dispatch(login(email,password))
  }

  const Notify = () => {
      toast("LOGIN SUCCESSFULLY!");
  }


  return (
    <>

    <MetaData title = 'User Login | Shop Online for Bracelets, Rings & Earings - Jwellery.in'  />
    
        {/* LOGIN BANNER START */}
        <section class=" bg-dark">
        <br /><br /><br /><br />
          <div class="container py-5 h-100">
            <div class="row d-flex align-items-center justify-content-center h-100">
              <div class="col-md-8 col-lg-7 col-xl-6">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" class="img-fluid" alt="Phoneimage"/>
              </div>
              <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                <form onSubmit={submitHandler}>
                  <div class="form-outline mb-4">
                    <input type="email" id="form1Example13" name='email' value={email} onChange={(e) =>setEmail(e.target.value)} class="form-control form-control-lg" />
                    <label class="form-label text-white">ENTER EMAIL</label>
                  </div>
      
                  <div class="form-outline mb-4">
                    <input type="password" id="form1Example23" name='password' value={password} onChange={(e) =>setPassword(e.target.value)} class="form-control form-control-lg" />
                    <label class="form-label text-white">ENTER PASSWORD</label>
                  </div>
        
                  <div class="d-flex justify-content-around align-items-center mb-4">
                    <a href="/" className='text-white'>FORGET PASSWORD</a>
                  </div>


                  <button type="submit" class="main-btn btn btn-lg btn-block">SIGN IN</button>
                  <Link to='/registeration' class="main-btn btn btn-lg btn-block">SIGN UP</Link>
        
                  <div class="divider d-flex align-items-center my-4">
                    <p class="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                  </div>
        
                  <a class="btn btn-primary btn-lg btn-block" style={{backgroundColor:'#3b5998'}} href="/"
                    role="button">
                    <i class="fab fa-facebook-f me-2"></i>CONTINUE WITH FACEBOOK
                  </a>
                  <a class="btn btn-primary btn-lg btn-block" style={{backgroundColor : '#55acee'}} href="/"
                    role="button">
                    <i class="fab fa-twitter me-2"></i>CONTINUE WITH TWITTER</a>
        
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* LOGIN BANNER END */}


        <ToastContainer />
    </>
  )
}

export default Login
