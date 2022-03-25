import React,{useContext} from "react";
import {useNavigate} from "react-router-dom";
import {routes} from "../Routes/routes";
import {savedImageDetailsContext} from "../Context/PokemonGallaryContext";

const Gallary = () =>{

    const navigate = useNavigate();
    const savedImages = useContext(savedImageDetailsContext);

    const handleHomeClick = () =>{
        navigate(routes.home);
    }
    return (
        <div>
             <button onClick={()=>handleHomeClick()}>Home</button>
             <br/>
            Galary page !!!
            {savedImages.map((img,i)=>{
                return (
                    <div key={i}>
                        <div>{img.name}</div>
                        <img style={{width:"100px"}} src={img.image} alt={`pokemon-${i}`} key={i} />
                    </div>
                )
            })}
        </div>
    )
}

export default Gallary;