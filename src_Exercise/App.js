import { useState } from "react";


function App() {

    const [state, setState] = useState({
        inputName:"",
        names:[],
        seq:1
    })


    return (
        <div>
            <input type="text" onChange={(e)=>{
                setState({
                    ...state,
                    inputName:e.target.value
                })
            }} placeholder="이름입력..."/>
            <button onClick={()=>{
                setState({
                    ...state,
                    names: [...state.names, {name:state.inputName, id:state.seq}],
                    seq: state.seq +1
                })
            }}>추가</button>
        </div>
    );
}

export default App;