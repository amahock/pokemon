import React,{useContext,useEffect} from "react";
import {savedImageDetailsContext} from "../Context/PokemonGallaryContext";

const ImageComponent = ({pokemonUrl}) => {
    const [images, setImages] = React.useState([])
    const savedImages = useContext(savedImageDetailsContext);
  
    const handleSave = (img) =>{
        savedImages.push(img);
    }

    useEffect(() => {
      async function getImage (url) {
        let jsonRes;
        try {
            const res = await fetch(url);
            jsonRes = await res.json();
            let result = {
                "name" : jsonRes.species.name,
                "image" : jsonRes.sprites.front_default
            }
          return result;
        } catch (err) {
            console.log("error occured");
            console.log(err);
            return null
        }
        
      }
      async function getImages () {
        const imageArray = []
        for (const pokemon of pokemonUrl) {
          imageArray.push(await getImage(pokemon.url))
        }
        setImages(imageArray)
      }
  
      getImages()
    }, [pokemonUrl])
  
    return images.map((img, i) => {
      return (
        <div key={i}>
            <div>{img.name}</div>
            <img style={{width:"100px"}} src={img.image} alt={`pokemon-${i}`} key={i} />
            <button onClick={()=>handleSave(img)}>Save</button>
        </div>
      )
    })
  }

  export default ImageComponent;