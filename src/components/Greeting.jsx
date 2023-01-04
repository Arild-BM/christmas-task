import React, { useState } from 'react';
import AllGreetings from "./AllGreetings"

export default function Greeting() {
    
    // localStorage.clear("christmasGreetings")
    const [greetings, setGreetings] = useState(JSON.parse(localStorage.getItem("christmasGreetings")) || []);
    const [greeting, setGreeting] = useState({username: "", greeting: "", time: ""});
        
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setGreeting(values => ({...values, [name]: value, time: new Date().toString().slice(0, 24)}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (greeting.username && greeting.greeting) {
            setGreetings(prevGreetings => [greeting, ...prevGreetings])
            localStorage.setItem("christmasGreetings", JSON.stringify(greetings) );
            setGreeting({username: "", greeting: ""})
        }
      }

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
                    maxlength="30"
                />
                <br />
                <textarea
                    name="greeting"
                    placeholder="Your greeting"
                    value={greeting.greeting}
                    onChange={handleChange}
                    maxlength="200"
                />
                <br />
                <input type="submit" value="Send hilsen"/>
            </form>
            
            <AllGreetings greetings={greetings}/>
        </div>
    )
}