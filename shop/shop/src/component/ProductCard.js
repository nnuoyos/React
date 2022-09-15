import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

const ProductCard = ({item}) => {
  return (
    <div className='card-container'>
        <img className='card-product-img' src={item?.img} alt={item?.img}/>
        <FontAwesomeIcon className='card-heart-icon' icon={faHeart} />
        <div className='card-text-box'>
            <div className='card-conscious-choice'>{item?.choice === true ? "Conscious choice" : <br></br>}</div>
            <div className='card-title'>{item?.title}</div>
            <div className='card-price'>₩{item?.price}</div>
            <div className='card-new-item'>{item?.new === true ? "신제품" : ""}</div>
        </div>
    </div>
  )
}

export default ProductCard