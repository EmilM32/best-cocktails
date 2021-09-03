import { FC } from 'react'

interface IProps {
  label: string
}

export const ChipLabel: FC<IProps> = ({ label }) => {
  return (
    <div
      className="
      bg-green-600 rounded p-1 text-black uppercase font-semibold text-sm"
    >
      {label}
    </div>
  )
}
