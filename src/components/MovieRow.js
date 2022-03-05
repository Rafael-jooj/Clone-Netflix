import React, {useState} from "react";
import './MovieRow.css';

const MovieRow = ({title, items})=>{

    const[scrollX, setScrollX] = useState(0);

    const leftArrow= ()=>{
        let x = scrollX + Math.round(window.innerWidth / 2);
        if(x > 0){
            x = 0;
        }
        setScrollX(x);
    }

    const rigthArrow= ()=>{
        let x = scrollX - Math.round(window.innerWidth / 2);
        let largList = items.results.length * 150;
        let fim = (Math.round(window.innerWidth) -largList)
        if(x < fim){
            x = fim - 60
        }
        setScrollX(x);
    }

    return(
        <div className="movieRow">
            <h2>{title}</h2>

            <div className="movieRow-left" onClick={leftArrow}>
                <img src="./seta-esquerda.png" alt="seta esquerda"></img>
            </div>
            <div className="movieRow-rigth" onClick={rigthArrow}>
            <img src="./seta-direita.png" alt="seta direita"></img>
            </div>
            <div className="movieRow-listarea">
                <div className="movieRow-list" style={{
                    marginLeft: scrollX,
                    width: items.results.length * 150
                }}>
                    {items.results.length > 0 && items.results.map((item, key)=>(
                        <div key={key} className="movieRow-item">
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                        </div>
                    ))}
                </div>
            </div> 
        </div>
    )
} 

export default MovieRow;