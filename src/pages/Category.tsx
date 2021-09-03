import useAxios from 'axios-hooks'
import { useParams, useHistory } from 'react-router-dom'
import { CocktailCard } from '../components/CocktailCard'
import { EAvailableCategories, EAvailableGlass } from '../enums'
import { IShortCocktail } from '../interfaces'
import { getCategoryUrlByParam } from '../utils'

export const Category = () => {
  const { title } = useParams<{
    title: EAvailableCategories | EAvailableGlass
  }>()

  const history = useHistory()

  const url = getCategoryUrlByParam(title)

  const [{ data, loading, error }] = useAxios<{
    drinks: IShortCocktail[]
  }>(url)

  const handleClick = (id: string): void => {
    history.push(`/cocktail/${id}`)
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 mx-4 justify-items-center">
      {data?.drinks.map((item) => (
        <div
          key={item.idDrink}
          className="cursor-pointer"
          onClick={() => handleClick(item.idDrink)}
        >
          <CocktailCard
            data={item}
            loading={loading}
            error={!!error?.message}
          />
        </div>
      ))}
    </div>
  )
}
