import { ICocktailCard } from '../interfaces'
import { IconError } from './icons/IconError'
import { IconLoading } from './icons/IconLoading'

export const CocktailCard = ({
  data,
  loading,
  error,
}: ICocktailCard) => {
  return (
    <div>
      <div className="w-96 text-white flex justify-center bg-green-800 hover:bg-green-900 rounded-lg transition duration-500 ease-in-out font-quicksand">
        {loading && (
          <div className="my-5">
            <IconLoading />
          </div>
        )}
        {error && !loading && (
          <div className="flex flex-col items-center text-2xl my-5">
            <IconError />
            <span>Cocktail failed</span>
            <span>Try again later or drink water!</span>
          </div>
        )}
        {data && !loading && (
          <div className="flex p-2 flex-col">
            <span className="text-2xl text-center py-2">
              {data.strDrink}
            </span>
            <img
              src={data.strDrinkThumb}
              alt="drink"
              className="rounded-lg h-80"
            />
          </div>
        )}
      </div>
    </div>
  )
}
