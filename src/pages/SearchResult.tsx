import useAxios from 'axios-hooks'
import { useParams } from 'react-router-dom'
import { urls } from '../api/urls'
import { CocktailsList } from '../components/CocktailsList'
import { IShortCocktail } from '../interfaces'

export const SearchResult = () => {
  const { search } = useParams<{ search: string }>()

  const [{ data, loading, error }] = useAxios<{
    drinks: IShortCocktail[]
  }>(urls.SEARCH_BY_NAME(search))

  return <CocktailsList data={data} error={error} loading={loading} />
}
