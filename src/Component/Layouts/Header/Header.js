import React from 'react'
import '../../../App.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
        {/* NAV BAR SECTION START */}
            <header>
                <div className='top-header'>
                    <div className='container d-flex justify-content-between align-items-center py-3'>
                        <span>FREE SHIPING FOR ORDERS</span>
                        <span>CALL : 899-6688-999</span>
                    </div>
                </div>
                <nav className='navbar navbar-expand-lg navigation-wrap'>
                    <div className='container'>
                        <a href="/" className='navbar-brand'>
                            <img src="/img/logo.png" alt="img" />
                        </a>
                        <button className='navbar-toggler' type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <i className='fas fa-stream navbar-toggler-icon'></i>
                        </button>
                        <div className='collapse navbar-collapse' id='navbarNav'>
                            <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
                                <li className='nav-item'>
                                    <a href="#home" className='nav-link active' aria-current='page'>HOME</a>
                                </li>
                                <li className='nav-item'>
                                    <a href="#new-arrivals" className='nav-link'>NEW ARRIVALS</a>
                                </li>
                                <li className='nav-item'>
                                    <a href="#products" className='nav-link'>PRODUCTS</a>
                                </li>
                                <li className='nav-item'>
                                    <Link to='/login' className='nav-link'>LOGIN</Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        {/* NAV BAR SECTION START */}
    </>
  )
}

export default Header
