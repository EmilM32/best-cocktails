import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { KEY_DOWN_SEARCH } from '../constants'
import { IconSearch } from './icons/IconSearch'
import { useHistory } from 'react-router-dom'

export const SearchInput = () => {
  const { t } = useTranslation()
  const [search, setSearch] = useState('')
  const history = useHistory()

  const handleClick = (): void => {
    if (search.length) history.push(`/search-result/${search}`)
  }

  const handleKeyDown = (key: string): void => {
    if (key === KEY_DOWN_SEARCH) handleClick()
  }

  return (
    <div className="flex items-center gap-2">
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => handleKeyDown(e.key)}
        type="search"
        className="shadow rounded border-0 p-2 outline-none"
        placeholder={t('search')}
      />
      <div className="cursor-pointer" onClick={handleClick}>
        <IconSearch />
      </div>
    </div>
  )
}
