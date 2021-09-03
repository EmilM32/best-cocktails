import useAxios from 'axios-hooks'
import { useParams } from 'react-router-dom'
import { urls } from '../api/urls'
import { CocktailCardError } from '../components/CocktailCard/CocktailCardError'
import { CocktailCardLoading } from '../components/CocktailCard/CocktailCardLoading'
import { CocktailFull } from '../components/CocktailFull'
import { ISingleCocktail } from '../interfaces'

export const Cocktail = () => {
  const { id } = useParams<{ id: string }>()

  const [{ data, loading, error }] = useAxios<{
    drinks: ISingleCocktail[]
  }>(urls.GET_COCKTAIL_BY_ID(id))

  return (
    <div
      className="
      bg-green-800 hover:bg-green-900 rounded-lg
      w-auto h-auto mx-4 transition duration-500 ease-in-out
      font-quicksand text-white
    "
    >
      {loading && (
        <div className="flex justify-center h-auto">
          <CocktailCardLoading />
        </div>
      )}
      {error && !loading && (
        <div className="py-4">
          <CocktailCardError />
        </div>
      )}
      {data && !loading && <CocktailFull data={data.drinks[0]} />}
    </div>
  )
}
