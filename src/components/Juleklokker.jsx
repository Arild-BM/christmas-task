import React from "react";
import juleklokker from "../pictures/juleklokker.png";

export default function Juleklokker() {
    return (
        <div>
            <img className="juleklokker juleklokker1" src={juleklokker} alt="juleklokker" />
            <img className="juleklokker juleklokker2" src={juleklokker} alt="juleklokker" />
        </div>
    )
}