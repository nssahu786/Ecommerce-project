import React, { useState } from 'react'

function Register() {

    const[name,setName] = useState('')
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const[confirmpassword,setConfirmpassword] = useState('')
    
    const[image,setImage] = useState()


    const submitHandler = (e) =>{
        e.preventDefault()
        console.log(name,email,password,confirmpassword)
        console.log(image)
    }

  return (
    <>
        {/* REGISTERATION BANNER START */}
        <section class="bg-dark">
        <br /><br /><br /><br />
            <div class="container h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-lg-12 col-xl-11 bg-dark">
                        <div class="card text-black bg-dark" >
                            <div class="card-body p-md-5">
                                <div class="row justify-content-center">
                                    <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                    <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">REGISTRATION</p>
                                    <form class="mx-1 mx-md-4" onSubmit={submitHandler}>
                                        <div class="d-flex flex-row align-items-center mb-4">
                                            <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                                            <div class="form-outline flex-fill mb-0">
                                                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} class="form-control" />
                                                <label class="form-label text-white">ENTER NAME</label>
                                            </div>
                                        </div>
                                        <div class="d-flex flex-row align-items-center mb-4">
                                            <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                            <div class="form-outline flex-fill mb-0">
                                                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} class="form-control" />
                                                <label class="form-label text-white">ENTER EMAIL</label>
                                            </div>
                                        </div>
                                        <div class="d-flex flex-row align-items-center mb-4">
                                            <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                                            <div class="form-outline flex-fill mb-0">
                                                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}  class="form-control" />
                                                <label class="form-label text-white">ENTER PASSWORD</label>
                                            </div>
                                        </div>
                                        <div class="d-flex flex-row align-items-center mb-4">
                                            <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                                            <div class="form-outline flex-fill mb-0">
                                                <input type="password" value={confirmpassword} onChange={(e)=>setConfirmpassword(e.target.value)} class="form-control" />
                                                <label class="form-label text-white">CONFIRM PASSWORD</label>
                                            </div>
                                        </div>
                                        <div class="d-flex flex-row align-items-center mb-4">
                                            <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                                            <div class="form-outline flex-fill mb-0">
                                                <input class=" form-control-lg" onChange={(e)=>setImage(e.target.files[0])} type="file" />
                                                <label class="form-label text-white">UPLOAD PROFILE PHOTO</label>
                                                <div class="small text-muted mt-2">UPLOAD YOUR PROFILE PHOTO. MAX FILE SIZE 2 M.B.</div>
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-center mx-4 mb-4 mb-lg-4">
                                            <button type="submit" class="main-btn btn btn-lg">REGISTER</button>
                                        </div>
                                    </form>
                    
                                    </div>
                                    <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    
                                    <img src='/img/banner-img/register-img.jpg'
                                        class="img-fluid" alt="Sample"/>
                    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* REGISTERATION BANNER END */}
    </>
  )
}

export default Register
