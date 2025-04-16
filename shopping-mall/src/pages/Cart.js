import { Table } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';

/*
    * Redux 변경하기
      1. store.js에서 변경해주는 함수 만들고
      2. export
      3. dispatch()로 감싸서 사용
*/
function Cart() {
    const [list, setList] = useState([]);

    useEffect(() => {
        axios.get('/react/getcart')
             .then(result => {
                setList(result.data);
             })
             .catch(() => {
                console.log("실패");
             })
    },[])

    return(
        <div>
            <h2>CART LIST</h2>
            {user.age}
            <Button variant="outline-info" onClick={() => {
                                    dispatch(ageUpdate(5))
                                }}>카운트</Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {/*                     
                    <tr>
                        <td>{cart[0].id}</td>
                        <td>{cart[0].name}</td>
                        <td>{cart[0].count}</td>
                        <td>변경</td>
                    </tr>
                    <tr>
                        <td>{cart[1].id}</td>
                        <td>{cart[1].name}</td>
                        <td>{cart[1].count}</td>
                        <td>변경</td>
                    </tr>
                     */}
                    {
                        list.map(v => 
                            <tr>
                                <td>{v.id}</td>
                                <td>{v.title}</td>
                                <td>{v.count}</td>                                
                            </tr>
                        ) 
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default Cart;