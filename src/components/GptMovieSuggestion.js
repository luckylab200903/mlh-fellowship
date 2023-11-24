import React from 'react'
import { useSelector } from 'react-redux'
import Movielist from "./Movielist"
const GptMovieSuggestion = () => {
  const gpt=useSelector(store=>store.gpt)
  const {movieResults,movieNames}=gpt
  if(!movieNames) return (<h1 className="text-white p-4 m-4 bg-black">waiting for results</h1>)

  return (
    <div className='text-white p-4 m-4 bg-black bg-opacity-80'>
      {movieNames.map((movieName,index)=>(<Movielist key={movieName.title} title={movieName} movies={movieResults[index]}/>))}
    </div>
  )
}

export default GptMovieSuggestion
