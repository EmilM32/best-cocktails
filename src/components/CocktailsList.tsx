import { AxiosError } from 'axios'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router-dom'
import { IShortCocktail } from '../interfaces'
import { CocktailCard } from './CocktailCard'

interface IProps {
  data?: {
    drinks: IShortCocktail[]
  }
  loading: boolean
  error?: AxiosError
}

export const CocktailsList: FC<IProps> = ({
  data,
  loading,
  error,
}) => {
  const history = useHistory()
  const { t } = useTranslation()

  const handleClick = (id: string): void => {
    history.push(`/cocktail/${id}`)
  }

  return (
    <>
      {data?.drinks && (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 mx-4 justify-items-center">
          {data.drinks.map((item) => (
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
      )}
      {!data?.drinks && (
        <span className="text-3xl flex justify-center">
          {t('noResults')}
        </span>
      )}
    </>
  )
}
