
import React, { useEffect, useState } from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy"; 

import { API } from '../services/Api'

const Cards = () => {

    const [recipes, setRecipes] = useState([])

    useEffect (() => {   
        API.recipes.getRecipes().then(data =>  setRecipes(data))
    }, [])

    const renderCards = () => {
        return recipes.map(recipe => {
            return (
                <div className="cards">
                    <div>
                        <Flippy
                            flipOnHover={true}
                            style={{ width: '280px', height: '280px'}}
                        >
                            <FrontSide style={{ 
                                backgroundImage: `url("${recipe.image}")`, 
                                backgroundRepeat: "no-repeat", 
                                backgroundSize: "cover" 
                            }}>
                            </FrontSide>
                            <BackSide className="backside">
                                <div className="ingredients">
                                    <h4>Ingredients:</h4>
                                    {recipe.ingredients}
                                </div>
                                <div className="directions">
                                    <h4>Directions: </h4>
                                    {recipe.directions}
                                </div>
                            </BackSide>
                        </Flippy>
                    </div>
                    <div className="recipe-name">
                        {recipe.name}
                    </div>
                    <div className="count-button">
                        <div className="like-button-div">
                            <button>Heart</button>
                        </div>
                        <div className="likes-count">
                            {recipe.likes}
                        </div>
                    </div>
                </div>
            )
        })
        
    }
    
    return (
        <div>
            {renderCards()}
        </div>
    )
}

export default Cards; 