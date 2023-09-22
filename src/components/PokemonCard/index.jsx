import { StarOutlined } from '@ant-design/icons'
import { Card } from 'antd'
import Meta from 'antd/es/card/Meta'

export const PokemonCard = () => {
  return (
    <Card
      title="Ditto"
      cover={<img src="" alt="Ditto" />}
      extra={<StarOutlined />}
    >
      <Meta description="normal, magic" />
    </Card>
  )
}
