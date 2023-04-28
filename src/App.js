import './App.css';
import Meal from './Components/Meal';
import { Route, Routes } from 'react-router-dom';
import RecipeInfo from './Components/RecipeInfo';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Meal />} />
        <Route exact path="/:MealId" element={<RecipeInfo />} />
      </Routes>
    </>
  );
}

export default App;
