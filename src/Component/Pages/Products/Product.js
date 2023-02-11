import React from 'react';
import { Link } from 'react-router-dom';

function Product({product}) {
  return (
    <>
        {/* PRODUCTS SECTION PAGE START */}
        <div className='col-md-4 p-sm-0 card-banner'>
            <div className='card-banner position-relative text-center'>
                <a href="/" className='card-thumb'>
                    <img src={product.images[0].url} alt="img" className='w-100' />
                </a>
                <div className='banner-info text-center'>
                    <h2>{product.name}</h2>
                    <p>{product.description.slice(0 , 78)}</p>
                    <div class="ratings mt-auto">
                        <div class="rating-outer">
                        <div class="rating-inner" style={{ width: `${(product.rating / 5) * 100}%` }}></div>
                        </div>
                        <span id="no_of_reviews">({product.numOfReviews} Reviews)</span>
                    </div><br />
                    <a href="/" type='button' className='main-btn'>SHOP NOW</a>
                    <Link to = {`/productdetail/${product._id}`} type='button' className='main-btn'>DETAILS...</Link>
                </div>
            </div><br /><br /><br />
        </div>
        {/* PRODUCTS SECTION PAGE END */}
    </>
  )
}

export default Product
