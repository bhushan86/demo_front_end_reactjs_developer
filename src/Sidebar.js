import React from 'react'
import'./Sidebar.css'
import{Avatar} from "@material-ui/core"

function Sidebar() {
    const recentItem=(topic)=>(
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>

        </div>
    )
    return (
        <div className="sidebar">
          <div className="sidebar__top">
               <img src="/images/card-bg .svg" alt=""/>
               <Avatar className="sidebar__avatar"/>
               <h2>Bhushan Patil</h2>
               <h4>bhushanvasantpatil@gmail.com</h4>
          </div>
            <div className="sidebar__stats">
                 <div className="sidebar__stat">
                     <p>Who viewed you</p>
                     <p className="sidebar__statNumber">2,543</p>
                 </div>
                 <div className="sidebar__stat">
                 <p>views on post</p>
                     <p className="sidebar__statNumber">2,442</p>
                 </div>
            </div>
            <div className="sidebar__bottoon">
              <p>Recent</p>
              {recentItem('recatjs')}
                 {recentItem('programing')}
                 {recentItem('softwareengineering')}
                 {recentItem('design')}
                 {recentItem('devloper')}
                 
                
        </div>
        </div>
    )
}

export default Sidebar
