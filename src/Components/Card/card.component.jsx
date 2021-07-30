import React from "react"

import "./card.component.css"

export const Card = (probs)=>
(
    <div className="card-container">
    <img alt="monster" src ={`https://robohash.org/${probs.monster.id}?set=set2&size=180x180`}></img>
    <h2 key={probs.key}>{probs.monster.name}</h2>
    <p>{probs.monster.email}</p>

    </div>
)