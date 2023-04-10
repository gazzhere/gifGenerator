
import axios from "axios";
import  { useEffect, useState } from "react";


const API_KEY = process.env.REACT_APP_API_KEY;
const Url = `https://api.giphy.com/v1/stickers/random?api_key=${API_KEY}`;
function UseGif(tag) {
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(false);
 
  async function fetchdata(tag) {
    setLoading(true);
    const { data } = await axios.get(tag ?  `${Url}&tag=${tag}` : Url);  
    const imgSource = data.data.images.downsized_large.url;
    setGif(imgSource);
    setLoading(false);
  }
  useEffect(() => {
    fetchdata('car');
  }, []);
  return {gif,loading,fetchdata};
}

export default UseGif;
