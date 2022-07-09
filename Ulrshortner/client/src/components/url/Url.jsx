
import { useState,useContext } from "react";
import "./url.css";
import axios from 'axios'
import { Context } from '../context/Context';
import shortId from 'shortid'



export default function Url(e) {
  const [url,setUrl]=useState("");
  const {user} = useContext(Context)
  

  const handleSubmit= async(e)=>{
    e.preventDefault();
    const newUrl={
      username:user.username,
      shortId:shortId.generate(),
      url
    }
    try {
     await axios.post("/urls",newUrl)
     
     window.location.replace("/" );
     
    } catch (error) {
      console.log(error);
    }
    

    
  }
 
  return (
    <div className="url">
      <form className="urlForm"  onSubmit={handleSubmit}>
      <textarea className="urlInput" name="url" placeholder="write or past your url here " cols="40" rows="2"
      onChange={e=>setUrl(e.target.value)}></textarea>
      <button className="urlButton" type="submit" >Create short Url</button>
      </form>
    
    </div>
  );
}
