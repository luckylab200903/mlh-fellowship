import Header from "./Header";
import { useNowPlayingdata } from "../hooks/useNowPlayingdata"; // Import as a named export
import Maincontainer from "./Maincontainer";
import Secondarcontainer from "./Secondarcontainer";
import { usePopularMovies } from "../hooks/usePopularMovies";
import { useTopRated } from "../hooks/useTopRated";
import { useUpcoming } from "../hooks/useUpcoming";
import Gptsearch from "./Gptsearch";
import { useSelector } from "react-redux";



const Browse = () => {
    const showgptsearc=useSelector(store=>store.gpt.showGPTSearch)
    useNowPlayingdata();
    usePopularMovies();
    useTopRated();
    useUpcoming();

    return (
        <div>
            <Header />
            {showgptsearc?<Gptsearch/>:<><Maincontainer/>
            <Secondarcontainer/></>}
            
        </div>
        
    )
}

export default Browse;
