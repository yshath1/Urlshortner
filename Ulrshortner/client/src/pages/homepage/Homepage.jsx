import { useLocation } from "react-router";
import Header from "../../components/header/Header";
import Urls from "../../components/urls/Urls";
import "./homepage.css";
import { useEffect, useState } from 'react';
import UserUrl from "../../components/userurl/UserUrl";
import axios from "axios"

export default function Homepage() {
  const location = useLocation();
  const path = location.search.split("?")[1]
  const [urls,setUrls]=useState([]);
  useEffect(()=>{
    const fetchUrls= async () =>{
      const res = await axios.get("/urls")
      setUrls(res.data);
    

    }
    fetchUrls()
  },[])
  

  useEffect(()=>{
    const chooseUrl=async () =>{
      const res =await axios.get("/urls/"+path)
      window.location.href = res.data.url
      console.log(res.data.url);
    }
    chooseUrl()
  },[path])

  
  return (
    <>
      <Header />
      <div className="home">
        <Urls urls={urls} />
        {urls.map((url)=>{
          return(
            <UserUrl url={url} />
          )
        })}
        <br/>
      </div>
    </>
  );
}
