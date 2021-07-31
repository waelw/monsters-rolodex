import React from "react"
import {Card} from "../Card/card.component"
import "./card-list.component.css"

function sorti (a,b)
{
    if(a.name.charCodeAt()-b.name.charCodeAt()==0)
    {
        return a.name.charCodeAt(1)-b.name.charCodeAt(1)
    }
    else
    return a.name.charCodeAt()-b.name.charCodeAt()
}

export const CardList = probs=>(

    <div className = "cardList">
        {
         probs.monsters.sort(sorti).map(monster=>{return <Card key ={monster.id} monster={monster}/>})} 



        
        
       
    </div>
    
)