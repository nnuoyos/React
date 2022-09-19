import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { useNavigate } from 'react-router-dom'


const ProductCard = ({item}) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${item.id}`)
  }
  return (
    <div className='card-container' onClick={showDetail}>
        <img className='card-product-img' src={item?.img} alt={item?.img}/>
        <FontAwesomeIcon className='card-heart-icon' icon={faHeart} />
        <div className='card-text-box'>
            <div className='card-conscious-choice'>{item?.choice === true ? "Conscious choice" : <br></br>}</div>
            <div className='card-title'>{item?.title}</div>
            <div className='card-price'>₩{item?.price}</div>
            <div className='card-new-item'>{item?.new === true ? "신제품" : <br></br>}</div>
        </div>
    </div>
  )
}

export default ProductCard