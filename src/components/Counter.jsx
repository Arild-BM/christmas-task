import { useEffect, useState } from "react"

export default function Counter() {
    const currentTimeInMs = Date.now()
    const mSecChristmas = Date.parse("2023-12-24")
    const interval = mSecChristmas - currentTimeInMs

    const [currentInterval, setCurrentInterval] = useState(interval)

    let dager = Math.floor(currentInterval/1000/60/60/24)
    let timer = Math.floor(currentInterval/1000/60/60) - dager*24
    let minutter = Math.floor(currentInterval/1000/60) - dager*24*60 - timer*60
    let sekunder = Math.floor(currentInterval/1000)-dager*24*60*60-timer*60*60-minutter*60

    useEffect(() => {
        setTimeout(() => {
            setCurrentInterval(prevTime => prevTime - 1000)
        }, 1000)
    },[])

    return (
        <div>
            <h1>Nedtellingen har begynt!<br />
            Det er kun <br />
            <span className = "red--text" >{dager}</span> dager, <br />
            <span className = "red--text" >{timer}</span> timer, <br />
            <span className = "red--text" >{minutter}</span> minutter og <br />
            <span className = "red--text" >{sekunder}</span> sekunder igjen til jul!</h1>
            
        </div>
    )
}