import React from 'react';

const Meal = () => {
    const [val, setVal] = React.useState('')
    const setToLowerCase = (e) => {
        setVal(e.target.value.toLowerCase())
    }
    return (<>
        <input type="text" value={val} onChange={setToLowerCase} placeholder="Saisir un texte..." />
    </>)
}

export default Meal