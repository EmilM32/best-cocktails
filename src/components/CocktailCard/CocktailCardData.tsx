import { IShortCocktail, ISingleCocktail } from '../../interfaces'
import { IconReload } from '../icons/IconReload'
import { useTranslation } from 'react-i18next'
import { AxiosPromise } from 'axios'
import { FC } from 'react'

interface IProps {
  data: ISingleCocktail | IShortCocktail
  refetch?: () => AxiosPromise<{
    drinks: ISingleCocktail[]
  }>
}

export const CocktailCardData: FC<IProps> = ({ data, refetch }) => {
  const { t } = useTranslation()

  return (
    <div className="flex p-2 flex-col text-center">
      <span className="text-2xl py-2">{data.strDrink}</span>
      <img
        src={data.strDrinkThumb}
        alt="drink"
        className="rounded-lg h-80"
      />
      {refetch && (
        <div className="flex justify-center py-4">
          <button title={t('reloadTooltip')} onClick={refetch}>
            <IconReload />
          </button>
        </div>
      )}
    </div>
  )
}
