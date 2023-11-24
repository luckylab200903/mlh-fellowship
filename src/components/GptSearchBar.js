import React, { useRef } from 'react';
import { lang } from '../hooks/languageconstant';
import { useDispatch, useSelector } from 'react-redux';
import openai from "../utils/openai" // Import the OpenAI library here
import { API_OPTIONS } from '../constants/file';
import { addgptmoviesresult } from '../utils/gptslice';

const GptSearchBar = () => {
  const language = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch=useDispatch()
    const getmovDetails=async(movie)=>{
            const data=await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1", API_OPTIONS)
        const json=await data.json();
        
        return json.results;
    }




  const handleGptSearch = async () => {
    console.log(searchText.current.value);

      const gpt_query="Recommend a movie that will make me laugh and feel good, with a strong emphasis on"+searchText.current.value+"onle give me name of 10 movies,comma seprated lik e the example result given ahead.Example result:Don,Sholay,Pa,Baazigar,Gadar,Don 2,Sholay 2,Pa 2,Baazigar 2,Gadar 2"
      const results = await openai.chat.completions.create({
        messages: [{ role: 'user', content: gpt_query }],
        model: 'gpt-3.5-turbo',
      });
if(!results.choices) return (<h1>sorry no result from the apis</h1>)

      const gpt_movies=results?.choices[0]?.message?.content.split(",")

      const promise_result=gpt_movies.map((movie)=>getmovDetails(movie))
      const tmdb_result=await Promise.all(promise_result)
      console.log(tmdb_result);
      dispatch(addgptmoviesresult({movieNames:gpt_movies,movieResults:tmdb_result}))
  };

  return (
    <div className="pt-[30%] md:pt-[10%] flex justify-center ">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12 md:mt-32 mt-32 sm:mt-32"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          ref={searchText}
          className="p-4 m-4  col-span-9 text-black font-bold "
          placeholder={lang[language].getSearchtext}
        />
        <button
          className="col-span-3 m-4 px-4 bg-red-700 text white rounded-lg text-white font-bold"
          onClick={handleGptSearch}
        >
          {lang[language].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
