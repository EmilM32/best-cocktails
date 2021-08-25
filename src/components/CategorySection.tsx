import { useTranslation } from 'react-i18next'
import { EAvailableCategories, EAvailableGlass } from '../enums'
import { SingleCategoryCard } from './SingleCategoryCard'

interface IProps {
  isMainCategory: boolean
}

export const CategorySection = ({ isMainCategory }: IProps) => {
  const { t } = useTranslation()

  const type = isMainCategory ? EAvailableCategories : EAvailableGlass
  const title = isMainCategory
    ? t('categories.available')
    : t('categories.glass')

  return (
    <>
      <span className="text-white font-quicksand pt-6 text-3xl text-center">
        {title}
      </span>
      <div className="m-6 grid grid-cols-2 gap-4 justify-items-stretch">
        {Object.keys(type).map((el) => (
          <SingleCategoryCard
            name={type[el as keyof typeof type]}
            key={el}
          />
        ))}
      </div>
    </>
  )
}
