import React from 'react'
import { useNavigate } from 'react-router-dom'

const Aboutpage = () => {
    const navigate = useNavigate()
    const goToHomepage = () => {
        navigate('/') //가고 싶은 url 경로 입력
    }
    return (
        <div>
        <h2>About page</h2>
        <button onClick={goToHomepage}> Homepage 로 이동! </button>
        </div>
    )
}

export default Aboutpage;