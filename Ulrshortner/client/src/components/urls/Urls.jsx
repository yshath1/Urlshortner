import Url from "../url/Url";
import UserUrl from "../userurl/UserUrl";
import "./urls.css";

export default function Urls({urls}) {
  
  return (

    <div className="urls">
    
     <Url  />
     <h2 style={{marginTop:"20px",textAlign:"center"}}>Your Short Links</h2>
     <hr/>
    {urls?.map((u)=>{
      <UserUrl userurl={u}/>
    })}
     
     
    </div>
  );
}
