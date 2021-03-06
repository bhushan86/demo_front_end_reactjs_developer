import React,{useState,useEffect} from 'react'
import './Feed.css'
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import InputOption from './InputOption';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post';
import{db} from "./firebase";

import firebase from 'firebase';


function Feed() {
    const[input,setInput]=useState("");
   const[posts,setPosts]= useState([]);
   useEffect (()=>{
          db.collection("posts")
          .orderBy("timestamp","desc")
          .onSnapshot((snapshot )=> 
              setPosts(
                  snapshot.docs.map((doc) =>({
                      id:doc.id,
                      data:doc.data(),
                  }))
                  )
          );
   },[]);
   const sendPost = (e)=> {
       e.preventDefault();
       db.collection("posts").add({
           name :'Bhushan Patil',
           description:'this is test',
           message: input,
           photoIUrl:" ",
           timestamp:firebase.firestore.FieldValue.serverTimestamp(),

       });
       setInput("");
   };
    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                  < CreateIcon />
               <form>
                  <input   value={input} onChange ={(e)=> setInput(e.target.value)}
                  type="text"/>
                  <button  onclick ={sendPost}type='submit'>Send</button>
              </form>
            </div>
            <div className="feed__inputOption">
                    <InputOption Icon={ImageIcon} title="photo" color="#70b5f9"/>
                    <InputOption Icon={ SubscriptionsIcon} title="Video" color="#E7A33E"/>
                    <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD"/>
                    <InputOption Icon={CalendarViewDayIcon } title="Write aeticla" color="#7FC15E"/>
            </div>
            </div>
           
                <Post
               name="Bhushan patil"
               description="this is a test"
               message="WOW this WORKED"
                />
            
      
        </div>
    )
}

export default Feed 
