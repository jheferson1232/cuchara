import { SStar } from './SStar'

export const SC5Stars = ({ variant = 'default', ...restProps }) => {
  const config = {
    resume: {
      gap: '5px',
      width: '130px',
      height: '22px',
      display: 'flex',
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    default: {
      gap: '2px',
      width: '85px',
      height: '16px',
      display: 'inline-flex'
    }
  }

  const styles = {
    color: '#ffd200',
    ...config[variant]
  }

  return (
    <div style={styles} {...restProps}>
      <SStar />
      <SStar />
      <SStar />
      <SStar />
      <SStar />
    </div>
  )
}
