import React from 'react'
import { useSearchParams } from 'react-router-dom';

const Product = () => {
  let [query, setQuery] = useSearchParams();
  console.log("쿼리 확인!", query.get('q'));
  return (
    <div>
        <h1>모든 프로덕트 뷰</h1>
    </div>
  )
}

export default Product