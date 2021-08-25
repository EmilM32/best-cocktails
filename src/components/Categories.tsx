import { useTranslation } from 'react-i18next'
import { CategorySection } from './CategorySection'

export const Categories = () => {
  const { t } = useTranslation()

  return (
    <div className="bg-green-600 flex md:w-1/2 rounded-lg flex-col h-full min-w-96 mb-6 md:mb-0">
      <CategorySection
        title={t('categories.available')}
        isMainCategory={true}
      />

      <hr className="mx-12 opacity-30" />

      <CategorySection
        title={t('categories.glass')}
        isMainCategory={false}
      />
    </div>
  )
}
