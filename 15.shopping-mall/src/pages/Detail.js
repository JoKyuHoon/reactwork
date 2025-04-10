import { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

function Detail(props) {
    let {pindex} = useParams();

    let findId = props.clothes.find(function(v) {
      return v.id === pindex;
    })

    let[alert, setAlert] = useState(true);

    useEffect(() => {
      setTimeout(() => { setAlert(false) }, 3000)
    })
    console.log("findId:", findId);

    return(
        <>
        {
          alert ? <div>지금 구매시 30% 할인</div> : null
        }
          <Container>
            <Row >
                <Col sm={6}>
                  <img  src={`${process.env.PUBLIC_URL}/img/clothes${pindex}.jpg`} width="70%"/>
                </Col>
                <Col sm={6}>
                 <h4>{props.clothes[pindex-1].title}</h4>
                 <p>{props.clothes[pindex-1].content}</p>
                 <p>{props.clothes[pindex-1].price}원</p>
                    <Button variant="outline-success">주문하기</Button>
                </Col>
            </Row>
          </Container>
                </>
    )
    
}
export default Detail;