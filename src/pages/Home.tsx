import { CocktailCard } from '../components/CocktailCard/index'
import { Categories } from '../components/Categories'
import useAxios from 'axios-hooks'
import { urls } from '../api/urls'
import { ISingleCocktail } from '../interfaces'

export const Home = () => {
  const [{ data, loading, error }, refetch] = useAxios<{
    drinks: ISingleCocktail[]
  }>(urls.RANDOM)

  return (
    <div className="flex md:justify-around flex-col md:flex-row items-center">
      <Categories />
      <CocktailCard
        data={data?.drinks[0]}
        loading={loading}
        error={!!error?.message}
        refetch={refetch}
      />
    </div>
  )
}
