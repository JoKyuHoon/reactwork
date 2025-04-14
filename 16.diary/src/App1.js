import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import New from './pages/New';
import Detail from './pages/Detail';
import Edit from './pages/Edit';
import { getEmotionImg } from './util/emotion-img'
import Button from './components/Button'

function App() {
  return (
    <div className="App">
      <div>
        <img src={getEmotionImg(1)} alt=""/>
        <img src={getEmotionImg(2)} alt=""/>
        <img src={getEmotionImg(3)} alt=""/>
        <img src={getEmotionImg(4)} alt=""/>
        <img src={getEmotionImg(5)} alt=""/>
        <img src={getEmotionImg(6)} alt=""/>
      </div>
      <Button 
        text={"일반버튼"}
        onClick={() => console.log("일반버튼 클릭")}
      />
      <Button 
        text={"분홍버튼"}
        type={"hotpink"}
        onClick={() => console.log("분홍버튼 클릭")}
      />
      <Button 
        text={"초록버튼"}
        type={"green"}
        onClick={() => console.log("초록버튼 클릭")}
      />
      
      
      <div>
        <Link to="/">Home</Link>
        <Link to="/new">New</Link>
        <Link to="/detail">Detail</Link>
        <Link to="/edit">Edit</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="*" element={<div>잘못된 페이지 입니다.</div>} />
      </Routes>
    </div>
  );
}

export default App;

