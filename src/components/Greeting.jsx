import React, { useState } from 'react';
import AllGreetings from "./AllGreetings"

export default function Greeting() {
    
    // Kan brukes for å nullstille local storage
    // localStorage.clear("christmasGreetings")
    
    // Henter hilsener fra local storage, evt setter inn et tomt array hvis det ikke ligger noe i local storage
    const [greetings, setGreetings] = useState(JSON.parse(localStorage.getItem("christmasGreetings")) || []);
    
    // Lager et objet som mellomlager for nye hilsener
    const [greeting, setGreeting] = useState({username: "", greeting: "", time: ""});
        
    // Oppdaterer ny hilsen for hver bokstav som skrives inn
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setGreeting(values => ({...values, [name]: value, time: new Date().toString().slice(0, 24)}))
    }

    // Sjekker om det ligger navn og hilsen ved submit og lagrer ny hilsen først i array
    const handleSubmit = (event) => {
        event.preventDefault();
        if (greeting.username && greeting.greeting) {
            setGreetings(prevGreetings => [greeting, ...prevGreetings])
            setGreeting({username: "", greeting: ""})
        }
      }

    // Legger ut tekstbokser og input boks
    return (
        <div>
            <h1>Her kan du legge inn en julehilsen!</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    name="username"
                    value={greeting.username}
                    onChange={handleChange}
                    placeholder="Your name"
                    maxLength="30"
                />
                <br />
                <textarea
                    name="greeting"
                    placeholder="Your greeting"
                    value={greeting.greeting}
                    onChange={handleChange}
                    maxLength="200"
                />
                <br />
                <input type="submit" value="Send hilsen"/>
            </form>
            
            {/* Legger ut alle hilsener i array */}
            <AllGreetings greetings={greetings}/>
        </div>
    )
}