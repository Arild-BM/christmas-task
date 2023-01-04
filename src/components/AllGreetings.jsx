import React from "react"

// Lager HTML-kode for hver enkelt hilsen
// Lagrer alle hilsner i local storage
export default function AllGreetings(props) {
    localStorage.setItem("christmasGreetings", JSON.stringify(props.greetings))
    return props.greetings.map(element => {
        return (
            <div key={element.time} className="greeting-box">
                <h4>Hilsen fra: {element.username}</h4>
                <p>{element.greeting}</p>
                <small>{element.time}</small>
            </div>
        )
    })
}