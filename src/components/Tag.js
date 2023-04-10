import axios from "axios";
import React, { useEffect, useState } from "react";
import UseGif from "../hooks/UseGif";
import Spinner from "./Spinner";
const API_KEY = process.env.REACT_APP_API_KEY;
function Tag() {
  const [tag,settag]=useState('car')
  // const [gif, setGif] = useState("");
  // const[loading ,setLoading]=useState(false)

  // async function fetchdata() {
  //   setLoading(true);
  //   const url =`https://api.giphy.com/v1/stickers/random?api_key=${API_KEY}&tag=${tag}`;
  //   const{data}= await axios.get(url);
  //   const imgSource=data.data.images.downsized_large.url;
  //   setGif(imgSource);
  //   setLoading(false);
    
  // }
  // useEffect(() => {
  //   fetchdata(); 
  // }, []);
  // function clickhandler() {
  //   fetchdata()
  // }
  const{gif,loading,fetchdata}=UseGif(tag);

  return (
    <div className="w-1/2  bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className=" mt-[15px] text-3xl underline font-bold   ">Random {tag} Gif</h1>
      {
        loading ? (<Spinner/>):(<img src={gif} width="450" /> )
      }
      <input className="w-10/12  text-lg py-2 rounded-lg mb-[3px]"
        onChange={(event)=>settag(event.target.value)}
        value={tag}
      />
      <button
        onClick={()=>fetchdata(tag)} 
        className="bg-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[15px]"
      >
        generate
      </button>
    </div>
  );
}

export default Tag;