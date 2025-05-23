import Button from "./Button";
/*1. 문자 혹은 변수로 값 받기
const Compo = (props) => {
    return (
        <>
            <h3>props 내용 출력</h3>
            <p>이름 : {props.user}</p>
            <p>주소 : {props.addr}</p>
        </>
    )
}
*/
/* 2. 객체로 받기
const Compo = (props) => {
    return (
        <>
            <h3>props 내용 출력</h3>
            <p>이름 : {props.user.name}</p>
            <p>주소 : {props.user.addr}</p>
            <p>좋아하는 것 : {props.user.likeList[0]}</p>
        </>
    )
}
// 3. 객체를 스프레드 연산자로 풀어서 넘겨준 값 받기
const Compo = ({name, addr, likeList}) => {
    return (
        <>
        <h3>props 내용 출력</h3>
        <p>이름 : {name}</p>
        <p>주소 : {addr}</p>
        <p>좋아하는 것 : {likeList[0]}</p>
        </>
    )
}
*/

const Compo = () => {
    const btnProps = {
        text : '1번버튼',
        color : 'darkgreen',
        a : 1,
        b : 2,
        c : 3
    }
    function btnClick(e) {
        alert("A")
        console.log(e);
        console.log(e.target.name);

    }
    return (
        <>
            <h3>버튼 만들기</h3>
            <button onClick={btnClick} name='A버튼'>A버튼 이벤트</button><br/><br/>
            <button onClick={() => {alert('B')}} name='B버튼'>B버튼 이벤트</button><br/><br/>
            {/* <Button/> 1.버튼*/}
            {/* <Button btnValue={btnProps}/> 2.버튼*/}
            <Button {...btnProps}/>
        </>
    )
}

export default Compo;