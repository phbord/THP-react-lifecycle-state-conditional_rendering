import React from 'react';

const DisplayMeal = ({meal}) => {
    if (!meal.strMeal) return null;
    return (<>
        <h2>{meal.strMeal}</h2>
        <img src={meal.strMealThumb} alt={meal.strMeal} />
        <div>
            <a href={meal.strSource}>aller vers la recette</a>
        </div>
    </>);
};

export default DisplayMeal;