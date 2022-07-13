import { Icon } from '@iconify/react'

export const Iconify = ({ icon, width = 25, height = 25, ...props }) => {
  return <Icon icon={icon} width={width} height={height} {...props} />
}
