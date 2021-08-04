import React from 'react';

const Input = (props) => {
    const word = props.word
    const [lives, setLives] = React.useState(props.lives)
    const [str, setStr] = React.useState('')
    const [count, setCount] = React.useState(0)

    const getLetter = (e) => {
        if (count >= 6) {
            return lives
        }
        const val = e.target.value
        setStr(val)
        if (val.substr(-1) !== word[count]) {
            setLives(lives - 1)
        }

        console.log(val.substr(-1), ' / ',word[count])
        setCount(count += 1)
        props.sendData(lives)
        return lives
    }

    return (<>
        <input type="text" onChange={getLetter} value={str} placeholder="" />
    </>)
}

export default Input;