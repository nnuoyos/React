import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';

const ProductDetail = () => {
  let {id} = useParams();
  const [product, setProduct] = useState(null);
  const getProductDetail = async() => {
    let url = (`http://localhost:5000/products/${id}`)
    let response = await fetch(url) //url을 fetch 해준다
    let data = await response.json()
    //console.log("데이터 잘 들어왔는지?" ,data);
    setProduct(data);
  }
  useEffect(()=>{
    getProductDetail()
  },[])
  return (
    <Container>
    <Row>
      <Col className='product-img'><img src={product?.img}></img></Col>
      <Col>
        <div>{product?.title}</div>
        <div>₩{product?.price}</div>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            size choice
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {product?.size.length > 0 && product.size.map((item)=>(<Dropdown.Item href="#/action-1">{item}</Dropdown.Item>))}
          </Dropdown.Menu>
        </Dropdown>
        <div className='card-conscious-choice'>{product?.choice == true ? "Conscious choice" : <br></br>}</div>
        <div className='card-new-item'>{product?.new === true ? "신제품" : <br></br>}</div>
      </Col>
    </Row>
  </Container>
  )
}

export default ProductDetail