import { useState } from "react"

export default function Counter() {
    // Henter inn dagens dato og 1.1.1970 i millisekunder og setter differansen som startintervall
    const [currentInterval, setCurrentInterval] = useState(Date.parse("2023-12-24") - Date.now() - 3600000)

    // Oppdaterer intervallet hvert sekund
    setInterval(() => setCurrentInterval(Date.parse("2023-12-24") - Date.now() - 3600000), 1000)

    // Beregner antall dager, timer, minutter og sekunder som gjenstår til jul
    let dager = Math.floor(currentInterval/1000/60/60/24)
    let timer = Math.floor(currentInterval/1000/60/60) - dager*24
    let minutter = Math.floor(currentInterval/1000/60) - dager*24*60 - timer*60
    let sekunder = Math.floor(currentInterval/1000)-dager*24*60*60-timer*60*60-minutter*60

    // Legger ut nedtellingen, legger inn <span> for å få rød tekst på alle tall.
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