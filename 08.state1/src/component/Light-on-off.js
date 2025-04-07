import {useState} from "react";
const LightOnOff = () => {
    // light = true, false
    const [light, setLight] = useState(false);
    const style = {
            width: "100px",
            height: "100px",
            margin: "50px auto",
            backgroundColor: light ? "yellow" : "black",
            borderRadius: "50%",
        };
   
    return(
        <>
            <div style={style}>
              
            </div>
            {light ? <h1 style={{color:"yellow"}}>전구ON</h1> : <h1>전구OFF</h1>} 
            <button onClick={() => {setLight(!light)}}>
                {light ? "끄기" : "켜기"}
            </button>
        </>
    )
}

export default LightOnOff;