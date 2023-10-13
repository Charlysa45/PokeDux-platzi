import { useEffect } from 'react'
import { Col, Spin } from 'antd'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { Searcher } from './components/Searcher'
import { PokemonList } from './components/PokemonList'
import { getPokemon } from './services/api'
import { getPokemonsWithDetails, setLoading } from './actions'
import logo from './assets/logo.svg'
import './App.css'
import { getIn } from 'immutable'

function App() {
  const pokemons = useSelector((state) => getIn(state, ['data', 'pokemons']), shallowEqual).toJS()
  // const loading = useSelector((state) => state.loading)
  const loading = useSelector((state) => getIn(state, ['data', 'loading']))
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchPokemons = async () => {
      dispatch(setLoading(true))
      const pokeList = await getPokemon()
      dispatch(getPokemonsWithDetails(pokeList))
      dispatch(setLoading(false))
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
      {loading ? (
        <Col offset={12}>
          <Spin spinning size="large" />
        </Col>
      ) : (
        <PokemonList pokemons={pokemons} />
      )}
    </div>
  )
}

export default App
