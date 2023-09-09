import { useState } from "react"

export default function Team() {
    const [team,setTeam] = useState(11)
    const handlePlus = ()=>{
        const newAdd = team +1;
        setTeam(newAdd)
    }

    const handleMinus = () =>{
        const newMinus = team -1;
        setTeam(newMinus);
    }

    const handleReset = () =>{
        const newReset = 0;
        setTeam(newReset);
    }


    const teamStyle = {
        border: '2px solid blue',
        borderRadius:'15px',
        margin: '15px',
        padding:'15px'
    }
    return (
        <div style={teamStyle}>
            <h3>Player: {team}</h3>
            <button onClick={handlePlus}>Plus</button>
            <button onClick={handleMinus}>Minus</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}