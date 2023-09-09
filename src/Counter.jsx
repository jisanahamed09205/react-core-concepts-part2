import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(0)
    const handleAdd =()=>{
        const newCount = count + 1;
        setCount(newCount)
    }
    const handleRemove =()=>{
        const newRemove = count - 1;
        setCount(newRemove)
    }
    return (
        <div style={{border:'2px solid yellowgreen',borderRadius:'10px'}}>
            <h3>Counter: {count}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}