import React, {useState} from 'react';
import '../css/SearchBar.css'
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import {Link} from 'react-router-dom';

function SearchBar({placeholder, data}) { 

    const [filteredData, setFilteredData] = useState([]);
    const [WordEntered, setWordEntered] = useState("");

    const handleFilter = (event) => {
        const searchWord = event.target.value
        setWordEntered(searchWord);
        const newFilter = data.filter((value) => {
            if(value.Name.toLowerCase().includes(searchWord.toLowerCase())){
                return value.Name
            }
            if(value.Nationality.toLowerCase().includes(searchWord.toLowerCase())){
                return value.Name
            }
            if(value.Club.toLowerCase().includes(searchWord.toLowerCase())){
                return value.Name
            }
            
        });
        
        if(searchWord === ""){
            setFilteredData([]);
        }else{
            setFilteredData(newFilter);
        }
    }

    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
    }
    return(
        <div className="search">
            <div className="searchInputs">
                <input type="text" placeholder={placeholder} onChange={handleFilter} value={WordEntered}/>
                <div className="searchIcon">
                    {filteredData.length === 0 ? <SearchIcon /> : <CloseIcon id="clearBtn" onClick={clearInput}/>}
                </div>
            </div>


            {filteredData.length != 0 && (
                <div className="dataResult">
                    {filteredData.map((value, key) => {
                        return <Link to={`/profile/${value.id}`} className="dataItem" key={value.Id}>{value.Name}</Link>
                    })}
                </div>
            )}
        </div>
    );
}

export default SearchBar;
