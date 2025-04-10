import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import pList from './data/ProductList';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import Detail from './pages/Detail';
import Cart from './pages/Cart';

/*
  * react-router-dom
    : 페이지를 교체시켜주는 api -> router-dom

  * 사용하려면
    1. 설치 : npm i react-router-dom
    2. index.js에 <BrowserRouter> 태그 넣어주기
*/
function App() {
  const [clothes, setClothes] = useState(pList);
  /*
    * useNavigate() : 페이지의 이동을 도와주는 함수
  */

  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Fashion Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={() => { navigate('/detail')}}>detail</Nav.Link>
            <Nav.Link onClick={() => { navigate('/cart')}}>Cart</Nav.Link>
            <Nav.Link onClick={() => { navigate('/about')}}>About</Nav.Link>

            {/*
            <Nav.Link onClick={() => { navigate(1)}}>Home</Nav.Link> 한페이지 앞으로
            <Nav.Link onClick={() => { navigate(-1}}>Home</Nav.Link> 한페이지 뒤로
            */}
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
          </>
        }/>
        <Route path='/detail/:pindex' element={<Detail clothes={clothes}/>} />
        {/*
        - member는 문자
        <Route path='/detail/member/:pid' element={<Detail clothes={clothes}/>} />

        - 데이터를 여러개 보낼 때 /detail/1/홍길동 
        <Route path='/detail/:pid/:name' element={<Detail clothes={clothes}/>} />
         */}

        <Route path='/cart' element={<Cart/>} />
        <Route path='/about' element={<div>about페이지</div>} />
        <Route path='*' element={<div>없는 페이지</div>} />
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