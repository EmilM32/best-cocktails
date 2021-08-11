export const CocktailCard = ({
  data,
  loading,
  error,
}: {
  data: any
  loading: boolean
  error: boolean
}) => {
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>
  if (data)
    return (
      <div className="w-96 h-96 text-white bg-green-800 hover:bg-green-900 rounded-lg transition duration-500 ease-in-out font-quicksand">
        <div className="flex justify-center p-2">
          <span className="text-2xl">Cocktail title</span>
          <div>{data}</div>
        </div>
      </div>
    )
}
