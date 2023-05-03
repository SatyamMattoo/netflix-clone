import React, { useEffect, useState } from 'react'
import '../App.css'
import { BsPlayFill } from 'react-icons/bs'
import axios from 'axios';

const apiKey = "e5b46e493075bc4f99acd4070f843cc1";
const imgUrl = "https://image.tmdb.org/t/p/w500/"
const url = "https://api.themoviedb.org/3";

const Card =({img}) => {
    return(
            <img className='card' src={`${imgUrl}${img}`} alt="" />
       
    );
}


const Row =({title,arr = []}) => {
    return(
        <div className="row">
            <h1>{title}</h1>

            <div>
            {
            arr.map((item,index)=>
            (<Card key={index} img={item.poster_path
            }/>))
        }        

            </div>
        </div>
    );
}

const Home = () => {

    const [upcoming,setUpcoming] = useState([]);
    const [topRated,setTopRated] = useState([]);
    const [nowPlaying,setNowPlaying] = useState([]);
    const [popular,setPopular] = useState([]);
    const [banner,setBanner] = useState([]);
    const [bannerTitle,setTitle] = useState([]);
    const [bannerOverview,setOverview] = useState([]);



    useEffect(() => {
      const fetchUpcoming = async ()=>{ 
        const {data: {results},} =  await axios.get(`${url}/movie/upcoming?api_key=${apiKey}`);
        setUpcoming(results);
    }
       fetchUpcoming();

       const fetchTopRated = async ()=>{ 
         const {data: {results},} =  await axios.get(`${url}/movie/top_rated?api_key=${apiKey}`);
         setTopRated(results);
     }
        fetchTopRated();

       const fetchNowPlaying = async ()=>{ 
         const {data: {results},} =  await axios.get(`${url}/movie/now_playing?api_key=${apiKey}`);
         setNowPlaying(results);
     }
        fetchNowPlaying();

       const fetchPopular = async ()=>{ 
         const {data: {results},} =  await axios.get(`${url}/movie/popular?api_key=${apiKey}`);
         setPopular(results);
     }
        fetchPopular();
        
        const settingBanner = async () => {
            const {data: {results},} =  await axios.get(`${url}/movie/popular?api_key=${apiKey}`);
            setBanner(results[0].poster_path);
        }
        settingBanner();

        const settingTitle = async () => {
            const {data: {results},} =  await axios.get(`${url}/movie/popular?api_key=${apiKey}`);
            setTitle(results[0].original_title);
        }
        settingTitle();

        const settingOverview = async () => {
            const {data: {results},} =  await axios.get(`${url}/movie/popular?api_key=${apiKey}`);
            setOverview(results[0].overview);
        }
        settingOverview();
    }, [])
    
    return (
     <section >
        <div className="banner" style={{backgroundImage: `url(${imgUrl}${banner})`}} >
            <h1>{bannerTitle}</h1>
            <p>{bannerOverview}</p>
            
            <button className='play'>Play<BsPlayFill/></button>
            <button className='myList'> MyList +</button>

        </div>

        <Row title={"Upcoming"} arr={upcoming}/>
        <Row title={"Top Rated"} arr={topRated}/>
        <Row title={"Now Playing"} arr={nowPlaying}/>
        <Row title={"Popular"} arr={popular}/>
     </section>
  )
}

export default Home