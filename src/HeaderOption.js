import { Avatar} from '@material-ui/core'
import React from 'react'
import "./HeadeOttion.css"

function HeaderOption
({Avatar,Icon,title}) {
    return (
        <div className="headerOption">
           {Icon && <Icon className="headerOption__icon"/>} 
           {Avatar && <Avatar className="headerOption__icon" src={Avatar}/>
           }
           <h3 className="headerOption__title">{title} </h3>
        </div>
    )
}

export default HeaderOption

