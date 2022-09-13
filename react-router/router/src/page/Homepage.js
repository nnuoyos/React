import React from 'react'
import { Link, useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();
  const goProductPage = () => {
    navigate('/product?q=pants');
  }
  return (
    <div>
        <h1>홈페이지</h1>
        <Link to="/about">about page로 이동!</Link>
        <button onClick={goProductPage}>프로덕트로 이동하기!</button>
    </div>
  )
}

export default Homepage