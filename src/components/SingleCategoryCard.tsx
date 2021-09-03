import { EAvailableCategories, EAvailableGlass } from '../enums'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

interface IProps {
  name: EAvailableCategories | EAvailableGlass
}

export const SingleCategoryCard = ({ name }: IProps) => {
  const { t } = useTranslation()

  return (
    <Link
      to={`/category/${name}`}
      className="
      bg-green-500 text-white shadow-xl transition duration-500 ease-in-out
        hover:shadow-2xl border-green-600 border h-20 flex justify-center items-center
        cursor-pointer text-xl rounded
      "
    >
      {t(`categories.${name}`)}
    </Link>
  )
}
