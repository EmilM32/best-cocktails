import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { SearchInput } from './SearchInput'

export const Topbar = () => {
  const { t } = useTranslation()
  return (
    <div className="bg-green-700 fixed w-screen z-10">
      <div className="flex justify-between mx-8 items-center flex-col sm:flex-row">
        <Link to="/">
          <span className="font-satisfy text-3xl text-white mt-2">
            {t('title')}
          </span>
        </Link>
        <div className="relative mr-6 my-2">
          <SearchInput />
        </div>
      </div>
    </div>
  )
}
