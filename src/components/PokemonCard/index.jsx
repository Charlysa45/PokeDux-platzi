import { Card } from 'antd'
import Meta from 'antd/es/card/Meta'
import { StarButton } from '../StarButton'
import { useDispatch } from 'react-redux'
import { setFavorite } from '../../slices/dataSlice'

export const PokemonCard = ({ name, image, types, id, favorite }) => {
  const dispatch = useDispatch()
  const typeString = types.map(item => item.type.name).join(', ')
  const handleOnFavorite = () => {
    dispatch(setFavorite({ pokemonId: id }))
  }
  return (
    <Card
      title={name}
      cover={<img src={image} alt={name} />}
      extra={<StarButton isFavorite={favorite} onClick={handleOnFavorite}/>}
    >
      <Meta description={typeString} />
    </Card>
  )
}