import { urls } from '../api/urls'
import { EAvailableCategories, EAvailableGlass } from '../enums'

/**
 * @param title selected category title
 * @returns api url
 */
export const getCategoryUrlByParam = (title: string): string => {
  switch (title) {
    case EAvailableCategories.ALCOHOLIC:
      return urls.CATEGORY_ALCOHOLIC
    case EAvailableCategories.NON_ALCOHOLIC:
      return urls.CATEGORY_NON_ALCOHOLIC
    case EAvailableCategories.COCKTAIL:
      return urls.CATEGORY_COCKTAIL
    case EAvailableCategories.ORDINARY_DRINK:
      return urls.CATEGORY_ORDINARY_DRINK
    case EAvailableGlass.CHAMPAGNE:
      return urls.CATEGORY_CHAMPAGNE_FLUTE
    case EAvailableGlass.COCKTAIL:
      return urls.CATEGORY_COCKTAIL_GLASS
    default:
      throw new Error(`Unknown caterogy ${title}`)
  }
}
