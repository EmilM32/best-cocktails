import useAxios from 'axios-hooks'
import { useParams } from 'react-router-dom'
import { CocktailsList } from '../components/CocktailsList'
import { EAvailableCategories, EAvailableGlass } from '../enums'
import { IShortCocktail } from '../interfaces'
import { getCategoryUrlByParam } from '../utils'

export const Category = () => {
  const { title } = useParams<{
    title: EAvailableCategories | EAvailableGlass
  }>()

  const url = getCategoryUrlByParam(title)

  const [{ data, loading, error }] = useAxios<{
    drinks: IShortCocktail[]
  }>(url)

  return <CocktailsList data={data} error={error} loading={loading} />
}
