import React, { useEffect } from 'react';
import '../../App.css';
import { useSelector,useDispatch } from 'react-redux';
import { getProduct } from '../../Redux/Actions/ProductActions'
import Product from '../Pages/Products/Product';
import Loading from '../Layouts/Loading/Loading';
import MetaData from '../Layouts/Meta/MetaData';
import Pagination from "react-js-pagination";
import { useState } from 'react';



function Home() {

    const[currentPage, setcurrentPage] = useState(1)

    const { loading,Products,productCounts,resultPerPage } = useSelector(state => state.p)
    //console.log(resultPerPage,productCounts)
    // loading = LOADER IS USED WHEN REQUEST IS SEND AND REQUEST RECEIVE
    // console.log(Products)
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProduct(currentPage));
    },[dispatch,currentPage]);

    function setcurrentPageNo(e){
        setcurrentPage(e)
    }

  return (
    <>  


        <MetaData title = 'Online Shopping site in Mern Stack India: Shop Online for Bracelets, Rings & Earings - Jwellery.in'  />

        {/* LOADER BACKEND START */}

            {/* TERNRY OPEARTOR */}

            {
                loading ? 
                <Loading/>
                :
                (
                    <>
                        {/* CAROUSEL SECTION START */}
                            <section id='home'>
                                <div id='carouselExampleControls' className='carousel' data-bs-ride="carousel">
                                    <div className='carousel-inner'>
                                        <div className='carousel-item active'>
                                            <img src="/img/bg/bg-1.jpg" alt="img" className='d-block w-100'/>
                                            <div className='carousel-caption text-center'>
                                                <h1>up to 45% of</h1>
                                                <p>This unique jewelry is hancrafted on the beautiful island of Nntucket using fine silver and semi precious stones.</p>
                                                <a href="/" className='main-btn'>SHOP NOW</a>
                                            </div>
                                        </div>
                                        <div className='carousel-item'>
                                            <img src="/img/bg/bg-3.jpg" alt="img" className='d-block w-100'/>
                                            <div className='carousel-caption text-center'>
                                                <h1>up to 45% of</h1>
                                                <p>This unique jewelry is hancrafted on the beautiful island of Nntucket using fine silver and semi precious stones.</p>
                                                <a href="/" className='main-btn'>SHOP NOW</a>
                                            </div>
                                        </div>
                                        <div className='carousel-item'>
                                            <img src="/img/bg/bg-2.jpg" alt="img" className='d-block w-100'/>
                                            <div className='carousel-caption text-center'>
                                                <h1>up to 45% of</h1>
                                                <p>This unique jewelry is hancrafted on the beautiful island of Nntucket using fine silver and semi precious stones.</p>
                                                <a href="/" className='main-btn'>SHOP NOW</a>
                                            </div>
                                        </div>
                                        <button className='carousel-control-prev' type='button' data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                            <span className='carousel-control-next-icon' aria-hidden="true"></span>
                                            <span className='visually-hidden'>Previous</span>
                                        </button>
                                        <button className='carousel-control-next' type='button' data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                            <span className='carousel-control-next-icon' aria-hidden="true"></span>
                                            <span className='visually-hidden'>Next</span>
                                        </button>
                                    </div>  
                                </div>  
                            </section>
                        {/* CAROUSEL SECTION END */}
                        {/* NEW ARRIVALS SECTION START */}
                            <section id='new-arrivals'>
                                <div className='new-arrivals wrapper'>
                                    <div className='container-fluid'>
                                        <div className='row'>
                                            <div className='col-12 mb-2 text-content text-center'>
                                                <h2>NEW ARRIVALS</h2>
                                                <p>This unique jewelry is handicrafted on the beautiful island of Nantucket using fine silver and semi precious stones. View glass fashion collection 2018 by Fanbong.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='container'>
                                        <div className='row align-items-center'>
                                        {
                                            Products && Products.map((product) => (
                                            
                                                <Product product = {product}  />
                                            ))
                                        }
                                            
                                        {/*    <div className='col-md-4 col-12 p-sm-0 card-banner'>
                                                <div className='card-banner position-relative text-center'>
                                                    <a href="/" className='card-thumb'>
                                                        <img src="/img/card/img-2.jpg" alt="img" className='img-fluid' />
                                                    </a>
                                                    <div className='banner-info text-center'>
                                                        <h2>RINGS</h2>
                                                        <p>Shop from the latest collection of rings such as crystal, gold, pearl & many more.</p>
                                                        <a href="/" className='main-btn'>SHOP NOW</a>
                                                    </div>
                                                </div>
                                        </div> */}
                                        {/*     <div className='col-md-4 col-12 p-sm-0 card-banner'>
                                                <div className='card-banner position-relative text-center'>
                                                    <a href="/" className='card-thumb'>
                                                        <img src="/img/card/img-3.jpg" alt="img" className='img-fluid' />
                                                    </a>
                                                    <div className='banner-info text-center'>
                                                        <h2>EARINGS</h2>
                                                        <p>Huge collection of women's earrings at low offer price & discounts at COD.</p>
                                                        <a href="/" className='main-btn'>SHOP NOW</a>
                                                    </div>
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <div className="d-flex justify-content-center pagi">
                                <Pagination
                                activePage={currentPage}
                                itemsCountPerPage={resultPerPage}
                                totalItemsCount={productCounts}
                                onChange = {setcurrentPageNo}
                                nextPageText={'Next'}
                                prevPageText={'Prev'}
                                firstPageText={'First'}
                                lastPageText={'Last'}
                                itemClass="page-item"
                                linkClass="page-link"/>
                            </div>
                        {/* NEW ARRIVALS SECTION END */}
                        {/* PRODUCTS SECTION START */}
                            <section id='products' className='product'>
                                <div className='wrapper'>
                                    <div className='container'>
                                        <div className='row'>
                                            <div className='col-12 text-content text-center'>
                                                <h2>BEST SELLERS</h2>
                                                <p>At risus viverra adipiscing at. Iaculis urna id volutpat lacus laoreet non curabitur. Enim lobortis scelerisque women dui faucibus in. Nisl suscipit adipiscing</p>
                                            </div>
                                            <div className='col-12'>
                                                <ul className='nav nav-tabs mb-3' id='myTab' role='tablist'>
                                                    <li className='nav-item' role='presentation'>
                                                        <button className='nav-link active' id='jwellery-tab' data-bs-toggle="tab" data-bs-target="#jwellery" type="button" role="tab" aria-controls="jwellery" aria-selected="true">BRACELETS</button>
                                                    </li>
                                                    <li className='nav-item' role='presentation'>
                                                        <button className='nav-link' id='ring-tab' data-bs-toggle="tab" data-bs-target="#ring" type="button" role="tab" aria-controls="ring" aria-selected="false">RINGS</button>
                                                    </li>
                                                    <li className='nav-item' role='presentation'>
                                                        <button className='nav-link' id='earings-tab' data-bs-toggle="tab" data-bs-target="#earings" role="tab" aria-controls="earings" aria-selected="false">EARINGS</button>
                                                    </li>
                                                </ul>
                                                <div className='tab-content' id='myTabContent'>
                                                    <div className='tab-pane fade show active' id='jwellery' role="tabpanel" aria-labelledby="jwellery-tab">
                                                        <div className='row'> 
                                                            <div className='col-md-3 col-sm-6 mb-3'>
                                                                <div className='item-product'>
                                                                    <a href="/" className='product-thumb-link'>
                                                                        <img src="/img/product-img/b-1.jpg" alt="img" className='img-fluid' />
                                                                    </a>
                                                                </div>
                                                                <div className='product-info'>
                                                                    <div className='d-flex justify-content-between py-3'>
                                                                        <a href="/" className='cat-parent'>Women</a>
                                                                        <a href="/" className='wishlist'>
                                                                            <i class="fas fa-heart"></i>
                                                                        </a>
                                                                    </div>
                                                                    <h4 className='product-title'>
                                                                        <a href="/">Titanium ring in ged palladium finish metal</a>
                                                                    </h4>
                                                                    <div className='product-price'>
                                                                        <ins><span className='money text-white'>$300.00</span></ins>
                                                                    </div>
                                                                    <div className='d-flex align-items-center justify-content-between py-1'>
                                                                        <div className='rating'>
                                                                            <i class="far fa-star"></i>
                                                                            <i class="far fa-star"></i>
                                                                            <i class="far fa-star"></i>
                                                                            <i class="far fa-star"></i>
                                                                            <i class="far fa-star"></i>
                                                                        </div>
                                                                        <div className='basket'>
                                                                            <a href="/"><i class="fas fa-shopping-basket"></i></a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='col-md-3 col-sm-6 mb-3'>
                                                                <div className='item-product'>
                                                                    <a href="/" className='product-thumb-link'>
                                                                        <img src="/img/product-img/b-2.jpg" alt="img" className='img-fluid' />
                                                                    </a>
                                                                </div>
                                                                <div className='product-info'>
                                                                    <div className='d-flex justify-content-between py-3'>
                                                                        <a href="/" className='cat-parent'>Women</a>
                                                                        <a href="/" className='wishlist'>
                                                                            <i class="fas fa-heart"></i>
                                                                        </a>
                                                                    </div>
                                                                    <h4 className='product-title'>
                                                                        <a href="/">Titanium ring in ged palladium finish metal</a>
                                                                    </h4>
                                                                    <div className='product-price'>
                                                                        <ins><span className='money text-white'>$300.00</span></ins>
                                                                    </div>
                                                                    <div className='d-flex align-items-center justify-content-between py-1'>
                                                                        <div className='rating'>
                                                                            <i class="far fa-star"></i>
                                                                            <i class="far fa-star"></i>
                                                                            <i class="far fa-star"></i>
                                                                            <i class="far fa-star"></i>
                                                                            <i class="far fa-star"></i>
                                                                        </div>
                                                                        <div className='basket'>
                                                                            <a href="/"><i class="fas fa-shopping-basket"></i></a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='col-md-3 col-sm-6 mb-3'>
                                                                <div className='item-product'>
                                                                    <a href="/" className='product-thumb-link'>
                                                                        <img src="/img/product-img/b-3.jpg" alt="img" className='img-fluid' />
                                                                    </a>
                                                                </div>
                                                                <div className='product-info'>
                                                                    <div className='d-flex justify-content-between py-3'>
                                                                        <a href="/" className='cat-parent'>Women</a>
                                                                        <a href="/" className='wishlist'>
                                                                            <i class="fas fa-heart"></i>
                                                                        </a>
                                                                    </div>
                                                                    <h4 className='product-title'>
                                                                        <a href="/">Titanium ring in ged palladium finish metal</a>
                                                                    </h4>
                                                                    <div className='product-price'>
                                                                        <ins><span className='money text-white'>$300.00</span></ins>
                                                                    </div>
                                                                    <div className='d-flex align-items-center justify-content-between py-1'>
                                                                        <div className='rating'>
                                                                            <i class="far fa-star"></i>
                                                                            <i class="far fa-star"></i>
                                                                            <i class="far fa-star"></i>
                                                                            <i class="far fa-star"></i>
                                                                            <i class="far fa-star"></i>
                                                                        </div>
                                                                        <div className='basket'>
                                                                            <a href="/"><i class="fas fa-shopping-basket"></i></a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='col-md-3 col-sm-6 mb-3'>
                                                                <div className='item-product'>
                                                                    <a href="/" className='product-thumb-link'>
                                                                        <img src="/img/product-img/b-4.jpg" alt="img" className='img-fluid' />
                                                                    </a>
                                                                </div>
                                                                <div className='product-info'>
                                                                    <div className='d-flex justify-content-between py-3'>
                                                                        <a href="/" className='cat-parent'>Women</a>
                                                                        <a href="/" className='wishlist'>
                                                                            <i class="fas fa-heart"></i>
                                                                        </a>
                                                                    </div>
                                                                    <h4 className='product-title'>
                                                                        <a href="/">Titanium ring in ged palladium finish metal</a>
                                                                    </h4>
                                                                    <div className='product-price'>
                                                                        <ins><span className='money text-white'>$300.00</span></ins>
                                                                    </div>
                                                                    <div className='d-flex align-items-center justify-content-between py-1'>
                                                                        <div className='rating'>
                                                                            <i class="far fa-star"></i>
                                                                            <i class="far fa-star"></i>
                                                                            <i class="far fa-star"></i>
                                                                            <i class="far fa-star"></i>
                                                                            <i class="far fa-star"></i>
                                                                        </div>
                                                                        <div className='basket'>
                                                                            <a href="/"><i class="fas fa-shopping-basket"></i></a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='tab-pane fade show' id='ring' role='tabpanel' aria-labelledby="ring-tab">
                                                        <div className='row'> 
                                                            <div className='col-md-3 col-sm-6 mb-3'>
                                                                <div className='item-product'>
                                                                    <a href="/" className='product-thumb-link'>
                                                                        <img src="/img/product-img/r-1.jpg" alt="img" className='img-fluid' />
                                                                    </a>
                                                                </div>
                                                                <div className='product-info'>
                                                                    <div className='d-flex justify-content-between py-3'>
                                                                        <a href="/" className='cat-parent'>Women</a>
                                                                        <a href="/" className='wishlist'>
                                                                            <i class="fas fa-heart"></i>
                                                                        </a>
                                                                    </div>
                                                                    <h4 className='product-title'>
                                                                        <a href="/">Titanium ring in ged palladium finish metal</a>
                                                                    </h4>
                                                                    <div className='product-price'>
                                                                        <ins><span className='money text-white'>$300.00</span></ins>
                                                                    </div>
                                                                    <div className='d-flex align-items-center justify-content-between py-1'>
                                                                        <div className='rating'>
                                                                            <i class="far fa-star"></i>
                                                                            <i class="far fa-star"></i>
                                                                            <i class="far fa-star"></i>
                                                                            <i class="far fa-star"></i>
                                                                            <i class="far fa-star"></i>
                                                                        </div>
                                                                        <div className='basket'>
                                                                            <a href="/"><i class="fas fa-shopping-basket"></i></a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='col-md-3 col-sm-6 mb-3'>
                                                                <div className='item-product'>
                                                                    <a href="/" className='product-thumb-link'>
                                                                        <img src="/img/product-img/r-2.jpg" alt="img" className='img-fluid' />
                                                                    </a>
                                                                </div>
                                                                <div className='product-info'>
                                                                    <div className='d-flex justify-content-between py-3'>
                                                                        <a href="/" className='cat-parent'>Women</a>
                                                                        <a href="/" className='wishlist'>
                                                                            <i class="fas fa-heart"></i>
                                                                        </a>
                                                                    </div>
                                                                    <h4 className='product-title'>
                                                                        <a href="/">Titanium ring in ged palladium finish metal</a>
                                                                    </h4>
                                                                    <div className='product-price'>
                                                                        <ins><span className='money text-white'>$300.00</span></ins>
                                                                    </div>
                                                                    <div className='d-flex align-items-center justify-content-between py-1'>
                                                                        <div className='rating'>
                                                                            <i class="far fa-star"></i>
                                                                            <i class="far fa-star"></i>
                                                                            <i class="far fa-star"></i>
                                                                            <i class="far fa-star"></i>
                                                                            <i class="far fa-star"></i>
                                                                        </div>
                                                                        <div className='basket'>
                                                                            <a href="/"><i class="fas fa-shopping-basket"></i></a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='col-md-3 col-sm-6 mb-3'>
                                                                <div className='item-product'>
                                                                    <a href="/" className='product-thumb-link'>
                                                                        <img src="/img/product-img/r-3.jpg" alt="img" className='img-fluid' />
                                                                    </a>
                                                                </div>
                                                                <div className='product-info'>
                                                                    <div className='d-flex justify-content-between py-3'>
                                                                        <a href="/" className='cat-parent'>Women</a>
                                                                        <a href="/" className='wishlist'>
                                                                            <i class="fas fa-heart"></i>
                                                                        </a>
                                                                    </div>
                                                                    <h4 className='product-title'>
                                                                        <a href="/">Titanium ring in ged palladium finish metal</a>
                                                                    </h4>
                                                                    <div className='product-price'>
                                                                        <ins><span className='money text-white'>$300.00</span></ins>
                                                                    </div>
                                                                    <div className='d-flex align-items-center justify-content-between py-1'>
                                                                        <div className='rating'>
                                                                            <i class="far fa-star"></i>
                                                                            <i class="far fa-star"></i>
                                                                            <i class="far fa-star"></i>
                                                                            <i class="far fa-star"></i>
                                                                            <i class="far fa-star"></i>
                                                                        </div>
                                                                        <div className='basket'>
                                                                            <a href="/"><i class="fas fa-shopping-basket"></i></a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='col-md-3 col-sm-6 mb-3'>
                                                                <div className='item-product'>
                                                                    <a href="/" className='product-thumb-link'>
                                                                        <img src="/img/product-img/r-4.jpg" alt="img" className='img-fluid' />
                                                                    </a>
                                                                </div>
                                                                <div className='product-info'>
                                                                    <div className='d-flex justify-content-between py-3'>
                                                                        <a href="/" className='cat-parent'>Women</a>
                                                                        <a href="/" className='wishlist'>
                                                                            <i class="fas fa-heart"></i>
                                                                        </a>
                                                                    </div>
                                                                    <h4 className='product-title'>
                                                                        <a href="/">Titanium ring in ged palladium finish metal</a>
                                                                    </h4>
                                                                    <div className='product-price'>
                                                                        <ins><span className='money text-white'>$300.00</span></ins>
                                                                    </div>
                                                                    <div className='d-flex align-items-center justify-content-between py-1'>
                                                                        <div className='rating'>
                                                                            <i class="far fa-star"></i>
                                                                            <i class="far fa-star"></i>
                                                                            <i class="far fa-star"></i>
                                                                            <i class="far fa-star"></i>
                                                                            <i class="far fa-star"></i>
                                                                        </div>
                                                                        <div className='basket'>
                                                                            <a href="/"><i class="fas fa-shopping-basket"></i></a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='tab-pane fade show' id='earings' role='tabpanel' aria-labelledby="earings-tab">
                                                        <div className='row'> 
                                                            <div className='col-md-3 col-sm-6 mb-3'>
                                                                <div className='item-product'>
                                                                    <a href="/" className='product-thumb-link'>
                                                                        <img src="/img/product-img/e-1.jpg" alt="img" className='img-fluid' />
                                                                    </a>
                                                                </div>
                                                                <div className='product-info'>
                                                                    <div className='d-flex justify-content-between py-3'>
                                                                        <a href="/" className='cat-parent'>Women</a>
                                                                        <a href="/" className='wishlist'>
                                                                            <i class="fas fa-heart"></i>
                                                                        </a>
                                                                    </div>
                                                                    <h4 className='product-title'>
                                                                        <a href="/">Titanium ring in ged palladium finish metal</a>
                                                                    </h4>
                                                                    <div className='product-price'>
                                                                        <ins><span className='money text-white'>$300.00</span></ins>
                                                                    </div>
                                                                    <div className='d-flex align-items-center justify-content-between py-1'>
                                                                        <div className='rating'>
                                                                            <i class="far fa-star"></i>
                                                                            <i class="far fa-star"></i>
                                                                            <i class="far fa-star"></i>
                                                                            <i class="far fa-star"></i>
                                                                            <i class="far fa-star"></i>
                                                                        </div>
                                                                        <div className='basket'>
                                                                            <a href="/"><i class="fas fa-shopping-basket"></i></a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='col-md-3 col-sm-6 mb-3'>
                                                                <div className='item-product'>
                                                                    <a href="/" className='product-thumb-link'>
                                                                        <img src="/img/product-img/e-2.jpg" alt="img" className='img-fluid' />
                                                                    </a>
                                                                </div>
                                                                <div className='product-info'>
                                                                    <div className='d-flex justify-content-between py-3'>
                                                                        <a href="/" className='cat-parent'>Women</a>
                                                                        <a href="/" className='wishlist'>
                                                                            <i class="fas fa-heart"></i>
                                                                        </a>
                                                                    </div>
                                                                    <h4 className='product-title'>
                                                                        <a href="/">Titanium ring in ged palladium finish metal</a>
                                                                    </h4>
                                                                    <div className='product-price'>
                                                                        <ins><span className='money text-white'>$300.00</span></ins>
                                                                    </div>
                                                                    <div className='d-flex align-items-center justify-content-between py-1'>
                                                                        <div className='rating'>
                                                                            <i class="far fa-star"></i>
                                                                            <i class="far fa-star"></i>
                                                                            <i class="far fa-star"></i>
                                                                            <i class="far fa-star"></i>
                                                                            <i class="far fa-star"></i>
                                                                        </div>
                                                                        <div className='basket'>
                                                                            <a href="/"><i class="fas fa-shopping-basket"></i></a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='col-md-3 col-sm-6 mb-3'>
                                                                <div className='item-product'>
                                                                    <a href="/" className='product-thumb-link'>
                                                                        <img src="/img/product-img/e-3.jpg" alt="img" className='img-fluid' />
                                                                    </a>
                                                                </div>
                                                                <div className='product-info'>
                                                                    <div className='d-flex justify-content-between py-3'>
                                                                        <a href="/" className='cat-parent'>Women</a>
                                                                        <a href="/" className='wishlist'>
                                                                            <i class="fas fa-heart"></i>
                                                                        </a>
                                                                    </div>
                                                                    <h4 className='product-title'>
                                                                        <a href="/">Titanium ring in ged palladium finish metal</a>
                                                                    </h4>
                                                                    <div className='product-price'>
                                                                        <ins><span className='money text-white'>$300.00</span></ins>
                                                                    </div>
                                                                    <div className='d-flex align-items-center justify-content-between py-1'>
                                                                        <div className='rating'>
                                                                            <i class="far fa-star"></i>
                                                                            <i class="far fa-star"></i>
                                                                            <i class="far fa-star"></i>
                                                                            <i class="far fa-star"></i>
                                                                            <i class="far fa-star"></i>
                                                                        </div>
                                                                        <div className='basket'>
                                                                            <a href="/"><i class="fas fa-shopping-basket"></i></a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='col-md-3 col-sm-6 mb-3'>
                                                                <div className='item-product'>
                                                                    <a href="/" className='product-thumb-link'>
                                                                        <img src="/img/product-img/e-4.jpg" alt="img" className='img-fluid' />
                                                                    </a>
                                                                </div>
                                                                <div className='product-info'>
                                                                    <div className='d-flex justify-content-between py-3'>
                                                                        <a href="/" className='cat-parent'>Women</a>
                                                                        <a href="/" className='wishlist'>
                                                                            <i class="fas fa-heart"></i>
                                                                        </a>
                                                                    </div>
                                                                    <h4 className='product-title'>
                                                                        <a href="/">Titanium ring in ged palladium finish metal</a>
                                                                    </h4>
                                                                    <div className='product-price'>
                                                                        <ins><span className='money text-white'>$300.00</span></ins>
                                                                    </div>
                                                                    <div className='d-flex align-items-center justify-content-between py-1'>
                                                                        <div className='rating'>
                                                                            <i class="far fa-star"></i>
                                                                            <i class="far fa-star"></i>
                                                                            <i class="far fa-star"></i>
                                                                            <i class="far fa-star"></i>
                                                                            <i class="far fa-star"></i>
                                                                        </div>
                                                                        <div className='basket'>
                                                                            <a href="/"><i class="fas fa-shopping-basket"></i></a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        {/* PRODUCTS SECTION END */}
                        {/* DEALS OF THE DAY SECTION START */}
                            <section id='deal'>
                                <div className='wrapper'>
                                    <div className='container'>
                                        <div className='row'>
                                            <div className='col-12'>
                                                <div className='text-center border border-white deal-of-the-day py-5'>
                                                    <div className='"text-content py-5'>
                                                        <h2>DEALS OF THE DAY</h2>
                                                        <h4>UPTO 40% OFF</h4>
                                                        <p className='text-center'>At risus viverra adipiscing at. Iaculis urna id volutpat lacus laoreet non curabitur. Enim lobortis scelerisque women dui faucibus in. Nisl suscipit adipiscing.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        {/* DEALS OF THE DAY SECTION END */}
                        {/* BLOGS SECTION START */}
                            <section id='blog'>
                                <div className='blog-section wrapper'>
                                    <div className='container'>
                                        <div className='row'>
                                            <div className='col-12 mb-2 txt-content text-center'>
                                                <h2>LATEST NEWS FROM THE BLOG</h2>
                                                <p>This unique jewelry is hancrafted on the beautiful island of Nntucket using fine silver and semi precious stones.</p>
                                            </div>
                                        </div>
                                        <div className='row align-items-center'>
                                            <div className='col-md-4 mb-4 mb-lg-0'>
                                                <div>
                                                    <a href="/" className='card-thumb'>
                                                        <img src="/img/card/b-1.jpg" alt="img" className='carimg1'/>
                                                    </a>
                                                    <div className='text-center px-2 mt-2'>
                                                        <h2>GIRLS WEAR TOPS</h2>
                                                        <p>Our urban and streetwear fashion place is no old Navy, Banana Republic or a Walmart clothing store, God forbid. We 've quickly become.....</p>
                                                        <a href="/" className='main-btn'>Read More..</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-md-4 mb-4 mb-lg-0'>
                                                <div>
                                                    <a href="/" className='card-thumb'>
                                                        <img src="/img/card/b-2.jpg" alt="img" className='carimg1'/>
                                                    </a>
                                                    <div className='text-center px-2 mt-2'>
                                                        <h2>GIRLS NECKLACE</h2>
                                                        <p>Our urban and streetwear fashion place is no old Navy, Banana Republic or a Walmart clothing store, God forbid. We 've quickly become.....</p>
                                                        <a href="/" className='main-btn'>Read More..</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-md-4 mb-4 mb-lg-0'>
                                            <div>
                                                <a href="/" className='card-thumb'>
                                                    <img src="/img/card/b-3.jpg" alt="img" className='carimg1'/>
                                                </a>
                                                <div className='text-center px-2 mt-2'>
                                                    <h2>GIRLS WEAR RINGS</h2>
                                                    <p>Our urban and streetwear fashion place is no old Navy, Banana Republic or a Walmart clothing store, God forbid. We 've quickly become.....</p>
                                                    <a href="/" className='main-btn'>Read More..</a>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        {/* BLOGS SECTION END */}
                    </>
                )
            }

            {/* TERNRY OPEARTOR */}

        {/* LOADER BACKEND END */}
        {/* META DATA BACKEND START */}

        {/* META DATA BACKEND END */}
    </>
  )
}

export default Home
