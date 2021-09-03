import { useParams } from 'react-router-dom'

export const Cocktail = () => {
  const { id } = useParams<{ id: string }>()
  return <div>{id}</div>
}
