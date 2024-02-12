import './App.css';
import Animal from './Components/Animal';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';

import Math from './Components/Math';
import Alphabet from './Components/Alphabet';
import AlphabetQuiz from './Components/AlphabetQuiz';
import AnimalsQuiz from './Components/AnimalsQuiz';
import MathsQuiz from './Components/MathsQuiz';



 import {Routes,Route} from "react-router-dom";
import Footer from './Components/Footer';



function App() {
  return (
    <>
    <Header/>

     
    
    
    <Routes>
    <Route path='/' element={<Animal/>}></Route>
   
    
    <Route path='/coolmath' element={<Math/>}></Route>
    <Route path='/alphabets'  element={<Alphabet/>}></Route>
   
   
    <Route path="/alphabetquiz" element={<AlphabetQuiz/>}></Route>
    <Route path="/animalquiz" element={<AnimalsQuiz />}></Route>
    <Route path="/mathsquiz" element={<MathsQuiz />}></Route>
   </Routes>

   <Footer/>
   </>
   
  );
}

export default App;
