import React from "react"
import {Card} from "../Card/card.component"
import "./card-list.component.css"


export const CardList = probs=>(

    <div className = "cardList">
        {probs.monsters.map(monster=>{return <Card key ={monster.id} monster={monster}/>})}
    </div>
    
)