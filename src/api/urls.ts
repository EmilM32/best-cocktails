/**
 * List of available api endpoints
 */
export const urls: Record<string, string> = {
  RANDOM: '/random.php',
  CATEGORY_ALCOHOLIC: '/filter.php?a=Alcoholic',
  CATEGORY_NON_ALCOHOLIC: '/filter.php?a=Non_Alcoholic',
  CATEGORY_ORDINARY_DRINK: '/filter.php?c=Ordinary_Drink',
  CATEGORY_COCKTAIL: '/filter.php?c=Cocktail',
  CATEGORY_COCKTAIL_GLASS: '/filter.php?g=Cocktail_glass',
  CATEGORY_CHAMPAGNE_FLUTE: '/filter.php?g=Champagne_flute',
}
