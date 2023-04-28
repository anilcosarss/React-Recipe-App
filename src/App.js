import './App.css';
import Meal from './Components/Meal';
import { Route,Routes } from 'react-router-dom';
import RecipeInfo from './Components/RecipeInfo';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Meal/>} />
        <Route path='/:MealId' element={ <RecipeInfo/>} />
      </Routes>
    </div>
  );
}

export default App;
