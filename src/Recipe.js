import React from 'react';
import style from './recipe.module.css'


const Recipe = ({title, calories, image, directions, ingredients}) => {
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <p>Calories: {calories}</p>
            <img className={style.image} src={image} alt={title}/>
            <br/>
            <h3>Ingredients:</h3>
            <ul>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ul>
            <a href={directions}>Directions</a>
            <br/>
        </div>
    );
}

export default Recipe;