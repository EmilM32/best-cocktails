import { EAvailableCategories } from '../enums'
import { useTranslation } from 'react-i18next'

interface IProps {
  name: EAvailableCategories
}

export const SingleCategoryCard = ({ name }: IProps) => {
  const { t } = useTranslation()

  return (
    <div
      className="
      bg-green-500 text-white shadow-xl transition duration-500 ease-in-out
        hover:shadow-2xl border-green-600 border w-48 h-20 flex justify-center items-center
        cursor-pointer text-xl rounded
      "
    >
      {t(`categories.${name}`)}
    </div>
  )
}
