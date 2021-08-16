import useAxios from 'axios-hooks'
import { CocktailCard } from './CocktailCard'
import { Topbar } from './Topbar'
import { urls } from '../api/urls'
import { ISingleCocktail } from '../interfaces'

const App = () => {
  const [{ data, loading, error }, refetch] = useAxios<{
    drinks: ISingleCocktail[]
  }>(urls.RANDOM)

  return (
    <div>
      <Topbar />
      <div className="pt-24 flex justify-center">
        <CocktailCard
          data={data?.drinks[0]}
          loading={loading}
          error={!!error?.message}
          refetch={refetch}
        />
      </div>
    </div>
  )
}

export default App
