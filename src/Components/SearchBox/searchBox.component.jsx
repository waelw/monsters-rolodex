import React from "react"
import "./searchBox.component.css"

export const SearchBox = (probs)=>(
    
    <input className = "searchBox" type="search" placeholder={probs.placeholder} onChange={probs.changeHandler}/>

)