import { Col } from 'antd'
import { Searcher } from './components/Searcher'
import { PokemonList } from './components/PokemonList'
import { getPokemon, getPokemonDetails } from './services/api'
import { setPokemons } from './actions'
import { useEffect } from 'react'
import logo from './assets/logo.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'

function App() {
 
  const pokemons = useSelector((state) => state.pokemons)
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokeList = await getPokemon()
      const pokeDetails = await Promise.all(pokeList.map(pokemon => getPokemonDetails(pokemon)))
      console.log(pokeDetails)
      dispatch(setPokemons(pokeDetails))
    } 
    fetchPokemons()
  }, [])
  
  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="Pokedux" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList pokemons={pokemons}/>
    </div>
  )
}

export default App
