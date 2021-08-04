import React from 'react';

const Color = () => {
    const [color, setColor] = React.useState('red')
    const handleClick = (e) => {
        e.preventDefault();
        if (color === 'red') {
            setColor('blue')
        } else {
            setColor('red')
        }
    }
    return (<>
        <div className={`square ${color}`} onClick={e => handleClick(e)}>
            <span>The last color clicked is {color}</span>
        </div>
    </>)
}

export default Color