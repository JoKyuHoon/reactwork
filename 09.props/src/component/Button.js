import './Button.css';
/* 1.
const Button = () => {
    return (
        <>
        <button style={{color:"hotpink"}} className="btn">버튼</button>
        </>
    )
}
*/
/* 2. 
const Button = (props) => {
    return (
        <>
        <p>{props.btnValue.text}입니다</p>
        <button style={{color : props.btnValue.color}} className="btn">버튼</button>
        </>
    )
}
*/
// 3.  2번도 받을 수 있음(객체분해할당)
const Button = ({text, color, c}) => {
    return (
        <>
        <p>{c}번버튼</p>
        <button style={{color : color}} className="btn">버튼</button>
        <p>{text}</p>
        </>
    )
}

export default Button;