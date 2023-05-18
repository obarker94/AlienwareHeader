import React from 'react'
import { FiAlertTriangle } from "react-icons/fi"
import { BiCaretDown, BiBell } from "react-icons/bi"
import { CgProfile, CgSearch } from "react-icons/cg"

export const Icons = {
  alert: FiAlertTriangle,
  caretDown: BiCaretDown,
  bell: BiBell,
  profile: CgProfile,
  search: CgSearch,
}

export type TIcons = keyof typeof Icons

export type TIconPickerProps = {
  icon: TIcons
  className?: string
}

export const IconPicker = ({ icon, className }: TIconPickerProps) => {
  const Icon = Icons[icon]

  if (!icon) return <Icons.alert className={className} />

  return <Icon className={className} />

}
