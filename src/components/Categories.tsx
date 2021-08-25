import { useTranslation } from 'react-i18next'
import { EAvailableCategories } from '../enums'
import { SingleCategoryCard } from './SingleCategoryCard'

export const Categories = () => {
  const { t } = useTranslation()

  return (
    <div className="bg-green-600 flex md:w-1/2 rounded-lg flex-col h-full min-w-96 mb-6 md:mb-0">
      <span className="text-white font-quicksand text-3xl pt-6 text-center">
        {t('categories.available')}
      </span>
      <div className="m-6 grid grid-cols-2 gap-4 justify-items-stretch">
        {Object.keys(EAvailableCategories).map((category) => (
          <SingleCategoryCard
            name={
              EAvailableCategories[
                category as keyof typeof EAvailableCategories
              ]
            }
            key={category}
          />
        ))}
      </div>
    </div>
  )
}
