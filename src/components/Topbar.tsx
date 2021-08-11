export const Topbar = () => {
  return (
    <div className="bg-green-700 h-16 fixed w-screen">
      <div className="flex justify-between mx-8 h-16 items-center">
        <span className="font-satisfy text-3xl text-white">
          Best Cocktails!
        </span>
        <div className="relative mr-6 my-2">
          <input
            type="search"
            className="bg-purple-white shadow rounded border-0 p-2 outline-none"
            placeholder="Search by name..."
          />
        </div>
      </div>
    </div>
  )
}
