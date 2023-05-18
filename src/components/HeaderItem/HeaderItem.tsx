import React from 'react'
import { IconPicker, TIcons } from '../IconPicker/IconPicker'

export type THeaderProps = {
  icon: TIcons
  text: string
}

export const HeaderItem = ({ icon, text }: THeaderProps) => {
  return (
    <div className="flex gap-2 items-center">
      <div>{text}</div>
      <IconPicker icon={icon} />
    </div>
  )
}
