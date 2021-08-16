import { ICocktailCard } from '../interfaces'
import { IconError } from './icons/IconError'
import { IconLoading } from './icons/IconLoading'
import { IconReload } from './icons/IconReload'

export const CocktailCard = ({
  data,
  loading,
  error,
  refetch,
}: ICocktailCard) => {
  return (
    <div>
      <div className="px-4 text-white flex justify-center bg-green-800 hover:bg-green-900 rounded-lg transition duration-500 ease-in-out font-quicksand">
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
          <div className="flex p-2 flex-col text-center">
            <span className="text-2xl py-2">{data.strDrink}</span>
            <img
              src={data.strDrinkThumb}
              alt="drink"
              className="rounded-lg h-80"
            />
            <span className="py-2">{data.strAlcoholic}</span>
            {refetch && (
              <div className="flex justify-center pb-2">
                <button title="reload cocktail" onClick={refetch}>
                  <IconReload />
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
