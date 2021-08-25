import { EAvailableCategories, EAvailableGlass } from '../enums'
import { SingleCategoryCard } from './SingleCategoryCard'

interface IProps {
  title: string
  isMainCategory: boolean
}

export const CategorySection = ({
  title,
  isMainCategory,
}: IProps) => {
  const type = isMainCategory ? EAvailableCategories : EAvailableGlass

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
