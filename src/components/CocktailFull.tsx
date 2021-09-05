import { FC } from 'react'
import { ISingleCocktail } from '../interfaces'
import { ChipLabel } from './ChipLabel'
import { useTranslation } from 'react-i18next'
import { INGREDIENTS_REGEX, MEASURE_REGEX } from '../constants'

interface IProps {
  data: ISingleCocktail
}

export const CocktailFull: FC<IProps> = ({ data }) => {
  const { t } = useTranslation()

  const cocktailInfo: Record<string, string> = {
    type: data.strAlcoholic,
    category: data.strCategory,
    glass: data.strGlass,
  }

  /**
   * Check if key exist (might be null) and satisfy regex expression
   */
  const keyExist = (key: string, regex: RegExp): boolean => {
    return !!(regex.test(key) && data[key as keyof ISingleCocktail])
  }

  const getCocktailMeasuresIngredients = (): Record<
    string,
    string
  > => {
    const ingredients: string[] = []
    const measures: string[] = []

    Object.keys(data).forEach((key) => {
      if (keyExist(key, INGREDIENTS_REGEX))
        ingredients.push(data[key as keyof ISingleCocktail] as string)

      if (keyExist(key, MEASURE_REGEX))
        measures.push(data[key as keyof ISingleCocktail] as string)
    })

    // we assume that both arrays length are equal
    // api should works this way
    // if for some reason that's not true, get lower length to avoid empty field
    const length = Math.min(ingredients.length, measures.length)

    const measuresAndIngredients: Record<string, string> = {}
    for (let i = 0; i < length; i++) {
      measuresAndIngredients[ingredients[i]] = measures[i]
    }

    return measuresAndIngredients
  }

  const cocktailMeasuresIngredients = getCocktailMeasuresIngredients()

  return (
    <div className="p-4">
      <span className="text-3xl flex justify-center py-4 text-center">
        {data.strDrink}
      </span>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center sm:place-items-start">
        <img
          src={data.strDrinkThumb}
          alt="drink"
          className="rounded-lg h-80"
        />
        <div>
          <span className="text-xl underline mb-2 flex">
            {t('cocktail.info')}
          </span>
          {Object.keys(cocktailInfo).map((item) => (
            <div className="flex gap-4 items-center my-1" key={item}>
              <ChipLabel label={t(`cocktail.${item}`)} />
              <span>{cocktailInfo[item]}</span>
            </div>
          ))}
          <span className="text-xl underline my-2 flex">
            {`${t('cocktail.measures')} & ${t(
              'cocktail.ingredients',
            )}`}
          </span>
          {Object.keys(cocktailMeasuresIngredients).map(
            (ingredient) => (
              <div
                className="flex gap-4 items-center my-1"
                key={ingredient}
              >
                <ChipLabel
                  label={cocktailMeasuresIngredients[ingredient]}
                />
                <span>{ingredient}</span>
              </div>
            ),
          )}
        </div>
        <div>
          <span className="text-xl underline mb-2 flex">
            {t('cocktail.instruction')}
          </span>
          <div className="lg:col-span-1 md:col-span-3 text-xl">
            {data.strInstructions}
          </div>
        </div>
      </div>
    </div>
  )
}
