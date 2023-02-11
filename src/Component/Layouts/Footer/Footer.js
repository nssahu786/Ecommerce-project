import React from 'react'
import { Button } from 'react-bootstrap';
import './Footer.css';

function Footer() {
  return (
    <>  
        <section className='footer-banner'>
          <footer class="text-center text-lg-start text-muted">
            <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
              <div class="me-5 d-none d-lg-block">
                <span>Get connected with us on social networks:</span>
              </div>
              <div>
                <a href="/" class="text-reset btn text-white btn-floating ma-1" role={Button}>
                  <i class="fab fa-facebook-f" style={{color : 'white'}}></i>
                </a>
                <a href="/" class="text-reset btn text-white btn-floating ma-2" role={Button}>
                  <i class="fab fa-twitter" style={{color : 'white'}}></i>
                </a>
                <a href="/" class="text-reset btn text-white btn-floating ma-3" role={Button}>
                  <i class="fab fa-google" style={{color : 'white'}}></i>
                </a>
                <a href="/" class="text-reset btn text-white btn-floating ma-4" role={Button}>
                  <i class="fab fa-instagram" style={{color : 'white'}}></i>
                </a>
                <a href="/" class="text-reset btn text-white btn-floating ma-5" role={Button}>
                  <i class="fab fa-linkedin" style={{color : 'white'}}></i>
                </a>
                <a href="/" class="text-reset btn text-white btn-floating ma-6" role={Button}>
                  <i class="fab fa-github" style={{color : 'white'}}></i>
                </a>
              </div>            
            </section>
            <section class="">
              <div class="container text-center text-md-start mt-5">
                <div class="row mt-3">
                  <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                    <h6 class="text-uppercase fw-bold mb-4">
                      <img src="/img/logo.png" alt="" />
                    </h6>
                    <p>Tanishq – Buy Gold & Diamond Jewellery online from 7000+ attractive jewel designs and latest collections at best price.</p>
                  </div>
                  <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                    <h6 class="text-uppercase fw-bold mb-4">Products</h6>
                    <p>
                      <a href="/" class="text-reset">BRACELETS</a>
                    </p>
                    <p>
                      <a href="/" class="text-reset">RINGS</a>
                    </p>
                    <p>
                      <a href="/" class="text-reset">EARINGS</a>
                    </p>
                    <p>
                      <a href="/" class="text-reset">NECKLACE</a>
                    </p>
                  </div>
                  <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                    <h6 class="text-uppercase fw-bold mb-4">
                      Useful links
                    </h6>
                    <p>
                      <a href="/" class="text-reset">Pricing</a>
                    </p>
                    <p>
                      <a href="/" class="text-reset">Settings</a>
                    </p>
                    <p>
                      <a href="/" class="text-reset">Orders</a>
                    </p>
                    <p>
                      <a href="/" class="text-reset">Help</a>
                    </p>
                  </div>
                  <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                    
                    <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                    <p><i class="fas fa-home me-3"></i> 123 Fifth Avenue, New Delhi</p>
                    <p>
                      <i class="fas fa-envelope me-3"></i>nishant360@gmail.com
                    </p>
                    <p><i class="fas fa-phone me-3"></i> + 91 7869391010</p>
                    <p><i class="fas fa-print me-3"></i> + 91 7869391010</p>
                  </div>
                
                </div>
                
              </div>
            </section>
          </footer>
        </section>


        <footer>
          <div className="container-fluid">
            <div className="row foot">
              <div className='col-md-12'>
                <p className="foo1">123 Fifth Avenue, NY 10160, New Delhi, India | Phone: 91+ 78693931095 | Email: contactnishant360@gmail.com</p>
                <p className="foo2">Copyright © 2022 Outdoor Adventure</p>
              </div>
            </div>
          </div>
        </footer>
    </>
  )
}

export default Footer
