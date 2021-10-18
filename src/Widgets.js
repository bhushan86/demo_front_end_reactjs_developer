import React from 'react'
import "./widgets.css";
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
function Widgets() {
    const newsArtical=(heading,subtitle)=>(
        <div className="widgets__article">
            <div className="widgets__articleLeft">
             <FiberManualRecordIcon/> 
            </div>  
            <div className="widgets__articleRight">
                   <h4>{heading}</h4>
                   <p>{subtitle}</p>
             </div>
            

        </div>
    );
    return (
        <div className="widgets ">
            <div className="widgets__header">
                <h2>Linkedin News</h2>
                <InfoIcon/>

            </div>
            {newsArtical("Kerala floods: At least 19 dead and dozens missing in India ")}
            {newsArtical("US eases Covid travel curbs from Nov 8; Here's what it means for fully vaccinated Indians ")}
            {newsArtical("Suresh Raina To Be Dropped By CSK For IPL 2022, Ambati Rayudu, Faf du Plessis, and Dwayne Bravo To Be Targetted In The Mega Auction- Reports ")}
            {newsArtical("Covid-19 vaccin for kids ")}
            {newsArtical(" Amozan copies items,rigs search1:Rpt ")}
            
        </div>
    )
}

export default Widgets
