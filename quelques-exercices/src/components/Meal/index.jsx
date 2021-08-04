import React from 'react';
import DisplayMeal from '../DisplayMeal';

const Meal = () => {
    const [meal, setMeal] = React.useState({})
    const proposeMeal = async () => {
        await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
            .then(res => res.json())
            .then(res => setMeal(res.meals[0]))
            .catch(err => console.error('err: ', err))
    }
    return (<>
        <button onClick={proposeMeal} type="button">Proposer une recette</button>
        <DisplayMeal meal={meal} />
    </>)
};

export default Meal;