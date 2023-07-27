import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import { useState } from 'react';
import axios from 'axios'
import {Route, Routes} from 'react-router-dom';
import About from './components/About';
import Detail from './components/Detail';

function App() {
   const [characters, setCharacters] = useState([])

   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((characters) => [...characters, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }
   const onCLose = (id) => {
      setCharacters(
         characters.filter((character) => character.id !== Number(id))
      )
   }

   return (
      <div className='App'>
         <Nav onSearch={onSearch} />
         <Routes>
            <Route path='/home' element= {<Cards characters={characters} onClose={onCLose} />} > </Route>
            <Route path='/about' element={<About/>} ></Route>
            <Route path='/detail/:id' element= {<Detail characters={characters}/>}></Route>
         </Routes>
         
      </div>
   );
}

export default App;
