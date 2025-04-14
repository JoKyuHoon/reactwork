import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Row, Col, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import pList from './data/ProductList';
import { Route, Routes, useNavigate, Link } from 'react-router-dom';
import Cart from './pages/Cart';
import Detail from './pages/Detail';
import axios from 'axios';

/*  
  * SPA의 단점
    - 컴포넌트간의 STATE공유 어려움

  * 공유저장 공간 사용
    1. Context Api : 기본 탑재되어 있음
       잘 안쓰는 이유 : 성능 이슈(하나만 변해도 하위의 모든것들을 재랜더링)
                       재사용이 어렵다
    2. Redux : 외부 라이브러리
       주로 사용

       설치하기 : npm install @reduxjs/toolkit react-redux
*/

function App() {
  // JSON으로 모두 문자열로 변환하여 넣는다
  let obj = {addr : '강남구'}
  let addr = JSON.stringify(obj)
  localStorage.setItem('addr', addr);

  let user = {
    name: 'kim',
    age: 25,
    hobbies: ['programing', 'game']
  }
  localStorage.setItem('user', JSON.stringify(user))

  // 가져올 때 json의 형태로 들어옴
  let getUser = localStorage.getItem('user');
  console.log(getUser);
  console.log(getUser.name); // 사용불가

  // 가져올 때 json => object 형태로 변환
  let storageUser = localStorage.getItem('user');
  let u = JSON.parse(storageUser) // object로 변경
  console.log(u.name);

  // 최근에 본 상품 보여주기
  useEffect(() => {
    if(!localStorage.getItem('recentProduct')) {
      localStorage.setItem('recentProduct', JSON.stringify( [] ))
    } 
  },[])


  const [clothes, setClothes] = useState(pList);
  const [clickCount, setClickCount] = useState(2);

  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Fashion Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={() => { navigate('/cart')}}>Cart</Nav.Link>
            <Nav.Link onClick={() => { navigate('/about')}}>About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={
          <>
            <div className='main-bg'/>     
            <Container>
              <Row>
                {
                  clothes.map((v, i) => {
                      return (
                        <PListCol clothes={v} key={i}/>
                      )
                  })
                }
              </Row>
            </Container>

            <Button variant="outline-secondary size=sm" onClick={() => {
              axios.get(`https://raw.githubusercontent.com/professorjiwon/data/refs/heads/main/data${clickCount}.json`)
                   .then((result) => {
                      console.log(result);
                      console.log(result.data);
                      setClothes([...clothes, ...result.data])
                      setClickCount(clickCount+1);
                   })
                   .catch(() => {
                      console.log('데이터 가져오기 실패');
                      alert('더이상 상품이 없습니다');
                   })
            }}>더보기</Button>
          </>
        }/>
        <Route path='/detail/:pid' element={<Detail clothes={clothes}/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/about' element={<div>더조은 컴퓨터 아카데미</div>} />
        <Route path='*' element={<div>없는 페이지 입니다.</div>} />
      </Routes>
    </div>
  );
}
function PListCol(props) {
  
  const [liked, setLiked] = useState(false); // useState를 통한 하트 상태 바꾸기
  return (
    <>
    <Col>
        <div className="product-card">
          <div className="product-img-container">
            <Link to={`/detail/${props.clothes.id}`}>
              <img
                src={`${process.env.PUBLIC_URL}/img/clothes${props.clothes.id}.jpg`}
                alt={props.clothes.title}
                className="product-img"
              />
            </Link>
              {/* ♥ 하트 아이콘 토글 */}
              <div
              className="wishlist-icon"
              onClick={(e) => {
                e.preventDefault(); // 링크 클릭 막기
                setLiked(!liked);
              }}
            >
              {liked ? '🖤' : '🤍'}
            </div>
            <div className="price-tag">{props.clothes.price.toLocaleString()} 원</div>
          </div>
          <div className="product-info">
            <div style={{ fontWeight: 'bold' }}>{props.clothes.title}</div>
            <div style={{ color: 'gray' }}>Originals</div>
          </div>
        </div>
      </Col>
    </>
  )
}
export default App;