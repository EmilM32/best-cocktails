import { IconError } from '../icons/IconError'
import { useTranslation } from 'react-i18next'

export const CocktailCardError = () => {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col items-center text-2xl my-5">
      <IconError />
      <span>{t('error.cocktailFailed')}</span>
      <span>{t('error.tryAgain')}</span>
    </div>
  )
}
