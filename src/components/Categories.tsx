import { CategorySection } from './CategorySection'

export const Categories = () => {
  return (
    <div
      className="
      bg-green-600 flex md:w-1/2 rounded-lg flex-col
        h-full min-w-96 mb-6 md:mb-0
      "
    >
      <CategorySection isMainCategory={true} />

      <hr className="mx-12 opacity-30" />

      <CategorySection isMainCategory={false} />
    </div>
  )
}
