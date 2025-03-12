
import { Routes,Route } from 'react-router-dom'
import './App.css'
import PokeDex from './components/PokeDex/PokeDex'
import PokemonDetails from './components/PokemonDetails/PokemonDetails'

function App() {
  
  return (
    <Routes>
      <Route path='/' element={<PokeDex/>}/>
      <Route path='/pokemon/:id' element={<PokemonDetails/>} />
      <Route path='*' element={<h1>You're on wrong url</h1>}/>
    </Routes>
  )
}

export default App
