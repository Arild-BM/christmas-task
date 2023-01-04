import React from "react"

// Lager HTML-kode for hver enkelt hilsen
export default function AllGreetings(props) {

    return props.greetings.map(element => {
        return (
            <div className="greeting-box">
                <h4>Hilsen fra: {element.username}</h4>
                <p>{element.greeting}</p>
                <small>{element.time}</small>
            </div>
        )
    })
}