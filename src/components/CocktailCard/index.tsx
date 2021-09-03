import { ICocktailCard } from '../../interfaces'
import { CocktailCardLoading } from './CocktailCardLoading'
import { CocktailCardError } from './CocktailCardError'
import { CocktailCardData } from './CocktailCardData'

export const CocktailCard = ({
  data,
  loading,
  error,
  refetch,
}: ICocktailCard) => {
  return (
    <div
      className={`
      ${
        refetch ? 'h-110' : 'h-100'
      } w-96 px-4 text-white flex items-center justify-center
      bg-green-800 hover:bg-green-900 rounded-lg transition
      duration-500 ease-in-out font-quicksand
    `}
    >
      {loading && <CocktailCardLoading />}
      {error && !loading && <CocktailCardError />}
      {data && !loading && (
        <CocktailCardData data={data} refetch={refetch} />
      )}
    </div>
  )
}
