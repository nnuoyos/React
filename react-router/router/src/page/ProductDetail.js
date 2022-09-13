import React from 'react'
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const {id} = useParams()
  return (
    <div>
        <h1>바지 상품 보여주는 뷰 {id}</h1>
    </div>
  )
}

export default ProductDetail;