import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import {faSearch} from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
/* 코드의 재생산, 유지보수를 위해 메뉴의 배열을 만들어준다 */
const menuList = ['여성','Divided','남성','신생아/유아','아동','H&M HOME','Sale','지속가능성']    
  return (
    <div>
        <div className='login-button'>
            <div className='login-inner'>
                <FontAwesomeIcon icon={faUser} />
                <div className='login-text'>로그인</div>
            </div>
        </div>
        <div className='nav-section'>
            <img src='https://logos-world.net/wp-content/uploads/2020/04/HM-Logo.png'></img>
        </div>
        <div className='menu-area'>
            <ul className='menu-list'>
                {menuList.map((menu)=>(<li>{menu}</li>))}
            </ul>
            <div className='nav-search'>
                <FontAwesomeIcon icon={faSearch} />
                <input placeholder='제품검색'></input>
            </div>
        </div>
    </div>
  )
}

export default Navbar