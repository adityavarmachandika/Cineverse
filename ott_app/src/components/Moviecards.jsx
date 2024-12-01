  import React, { useEffect, useState } from 'react'
  import Moviecard from './Moviecard'
  import Spinner from './Spinner'
import { NavLink } from 'react-router-dom'

  const moviecards = ({dynamiccss1,dynamiccss2}) => {
    const [movie,setmovie]=useState([])
    const [loading,setloading]=useState(true)
    const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }
    useEffect(
      ()=>{
        const fetchmovie = async()=>{
          try{
            // const res=await fetch('/api/movies?_limit=20')
            const res=await fetch('/api/movies ')
            const data= await res.json();
            const shuffledMovies = shuffleArray(data); 
            setmovie(shuffledMovies)
          }
          catch(err){
            console.log(err)
          }
          finally{
            setloading(false)
          }
        }
        fetchmovie()
      },[])
      return (

        // <div className='  overflow-x-hidden '>
        //   <div className=' flex  overflow-scroll gap-6 ' id="scroll">            
          <div className={`${dynamiccss1}`} >
        <div className={`${dynamiccss2}` }id="scroll">  
          {loading ?<Spinner/>: 

          movie.map((movie) => (

            <Moviecard key={movie.imdbID} id={movie.id} movie={movie.Poster} name={movie.Title} />
          
          ))

          } 
        
          
        </div>
      </div>
    )
  }

  export default moviecards