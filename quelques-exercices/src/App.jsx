import './App.css';
import Form from 'components/Form';
import Meal from 'components/Meal';
import Hangman from 'components/Hangman';

function App() {
  return (
    <div className="App">
      <h1>Exo 1 : Formulaire</h1>
      <Form />
      <br/><hr/><br/>
      <h1>Exo 2 : Menu</h1>
      <Meal />
      <br/><hr/><br/>
      <h1>Exo 3 : jeu du pendu</h1>
      <Hangman />
    </div>
  );
}

export default App;
