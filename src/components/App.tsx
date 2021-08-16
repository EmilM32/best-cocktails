import useAxios from 'axios-hooks'
import { CocktailCard } from './CocktailCard'
import { Topbar } from './Topbar'
import { urls } from '../api/urls'

const App = () => {
  const [{ data, loading, error }, refetch] = useAxios(urls.RANDOM)

  return (
    <div>
      <Topbar />
      <div className="pt-24 flex justify-center">
        <CocktailCard
          data={data?.drinks[0]}
          loading={loading}
          error={!!error?.message}
        />
      </div>
    </div>
  )
}

export default App
