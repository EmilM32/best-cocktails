import useAxios from 'axios-hooks'
import { useParams } from 'react-router-dom'
import { CocktailCard } from '../components/CocktailCard'
import { EAvailableCategories, EAvailableGlass } from '../enums'
import { ISingleCocktail } from '../interfaces'
import { getCategoryUrlByParam } from '../utils'

export const Category = () => {
  const { title } = useParams<{
    title: EAvailableCategories | EAvailableGlass
  }>()

  const [{ data, loading, error }, refetch] = useAxios<{
    drinks: ISingleCocktail[]
  }>(getCategoryUrlByParam(title))

  return (
    <div>
      <CocktailCard
        data={data?.drinks[0]}
        loading={loading}
        error={!!error?.message}
        refetch={refetch}
      />
    </div>
  )
}
