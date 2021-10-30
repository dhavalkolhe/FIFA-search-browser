import SearchBar from './Components/SearchBar'
import './css/App.css'
import playerData from './data.json';

function Home() {
    return(
        <div className="App">
            <SearchBar placeholder="Search with Player Name, Nationality or Club name" data={playerData}/>
        </div>
    )
}

export default Home;