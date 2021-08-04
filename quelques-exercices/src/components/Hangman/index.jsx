import React from 'react';
import Input from 'components/Input';

const Hangman = () => {
    const [msg, setMsg] = React.useState('')
    const [count, setCount] = React.useState(0)
    const [lives, setLives] = React.useState(6)
    const [word, setWord] = React.useState('')
    const [show, setShow] = React.useState(false)

    const chooseWord = () => {
        fetch('https://random-word-api.herokuapp.com/word?number=1')
            .then(res => res.json())
            .then(res => {
                setWord(res[0])
                setShow(true)
            })
            .catch(err => console.error('err: ', err))
    }

    const getData = () => {
        console.log('=====')
        if (lives === 0) {
            setCount(count + 1)
            setMsg('Game Over')
            return null
        }
        if (lives === 6 && count === 5) {
            setMsg('WON')
            return null
        }
        console.log(count, ' / PARENT lives: ',lives)
    }

    return (<>
        <p>{word}</p>
        <p>Remaining lives: {lives}</p>
        <button onClick={chooseWord}>Start game</button>
        <div className="hangman">
            {show && <Input word={word} lives={lives} sendData={setLives} />}
            {msg !== '' && <p>{msg}</p>}
        </div>
    </>)
};

export default Hangman;