import React from 'react'
import MetaData from '../../Layouts/Meta/MetaData';
import './ProductDetail.css';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetail } from '../../../Redux/Actions/ProductActions';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import Loading from '../../Layouts/Loading/Loading';




function ProductDetail() {
  
    const { loading,ProductDetail } = useSelector(state => state.pdetail)
    const { id } = useParams();
    //console.log(id)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProductDetail(id));
    },[dispatch, id])

  
    //console.log(a)
    //console.log(Products);
  
  
  return (
    <>  
         

        <MetaData title = 'Online Shopping site in Mern Stack India: Details of products - Jwellery.in' />

        {
            loading ?
            <Loading/>
            :
            (
                <>

                    {/* PRODUCTS DETAILS SECTION PAGE START */}
                        <section class="detail-banner">
                        <br /><br />
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-6 mt-5">
                                        <Carousel>
                                        {ProductDetail.images && ProductDetail.images.map(image=>(
                                            <Carousel.Item key ={image.public_id}>
                                            <img className="d-block w-100" src={image.url} alt={ProductDetail.title}/>
                                            </Carousel.Item>
                                        ))}
                                        </Carousel>
                                    </div>
                                    <div class="col-md-6 mt-5">
                                        <p class="detail-title1">Home/ Details</p>
                                        <h2 class="detail-title2">{ProductDetail.name}</h2>
                                        <hr class="cross-line"/>
                                        <div class="ratings mt-auto">
                                            <div class="rating-outer">
                                            <div class="rating-inner" style={{ width: `${(ProductDetail.rating / 5) * 100}%` }}></div>
                                            </div>
                                            <span id="no_of_reviews">({ProductDetail.numOfReviews} Reviews)</span>
                                        </div>
                                        <hr class="cross-line"/>
                                        <h1 class="detail-price m-2">$ {ProductDetail.price}</h1>
                                        <nav aria-label="" class="mt-3">
                                            <ul class="pagination">
                                                <li class="page-item ">
                                                    <a class="page-link bg-danger text-light" tabindex="-1" aria-disabled="true" href='/'>-</a>
                                                </li>
                                                <li class="page-item text-light"><a class="page-link" href='/'>1</a></li>
                                                <li class="page-item">
                                                    <a class="page-link bg-info text-light" href='/'>+</a>
                                                </li>
                                            </ul>
                                        </nav>
                                        <a href="/" class="main-btn mt-2">ADD TO CART</a>
                                        <hr class="cross-line"/>
                                        <h4 class="detail-desc">Description</h4>
                                        <p class="detail-para text-justify">{ProductDetail.description}</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    {/* PRODUCTS DETAILS SECTION PAGE END */}

                    

                </>

            )
        }





        
    </>
  )
}

export default ProductDetail
