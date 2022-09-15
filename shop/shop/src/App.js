import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import ProductDetail from './page/ProductDetail';
import Navbar from './component/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes> {/* Routes 안의 내용은 변하지만, navbar는 상단 고정을 위해 따로 빼놓는다 */}
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/product/:id" element={<ProductDetail/>} />
      </Routes>
    </div>
  );
}

export default App;

// 1. 전체 상품 페이지 , 로그인 페이지, 상품 상세 페이지 필요 -done-
// 1-1. 로고, 네비게이션 바, 로그인영역이 있다 (사라지지 않고 계속 유지 됨)
// 2. 전체 상품 페이지에서는 전체 상품을 볼 수 있다
// 3. 로그인 버튼을 누르면 로그인 페이지가 나타난다
// 4. 상품 디테일을 눌렀으나 로그인이 안되어 있을 경우 로그인 페이지가 먼저 나온다
// 5. 로그인이 되어 있을 경우에는 상품 디테일 페이지를 볼 수 있다
// 6. 로그아웃 버튼을 누르면 로그아웃이 된다
// 7. 로그아웃이 되면 상품 디테일 페이지를 볼 수 없다 다시 로그인 페이지가 보인다
// 8. 로그인을 하면 로그아웃 글자로 바뀌고 로그아웃을 하면 로그인 글자로 바뀐다 
// 9. 상품을 검색 할 수 있다!