import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
import {routes} from "../Routes/routes";
import ImageComponent from "./ImageComponent";

const Home = () =>{
    const navigate = useNavigate();
    const [pokemonUrlList,setPokemonUrlList] = useState([]);

    const handleGallaryClick = () =>{
        navigate(routes.gallary);
    }

    useEffect(()=>{
        const fetchData = async () =>{
           await fetch("https://pokeapi.co/api/v2/pokemon?limit=100")
            .then(response => response.json())
            .then((data) => {
                setPokemonUrlList(data.results);
            }) 
        }

      fetchData();
    },[]);

    return (
        <div>
            <button onClick={()=>handleGallaryClick()}>Gallary</button>
            <br/>
            Home page!!!
            <div>
                <ImageComponent pokemonUrl={pokemonUrlList}/>
            </div>
        </div>
    )
}

export default Home;