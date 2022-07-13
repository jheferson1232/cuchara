import { jCl } from '@utils/jCl'
import { useState } from 'react'
import styles from './qaitem.module.scss'

const PlusSvg = (props) => (
  <svg
    width={25}
    height={25}
    stroke='currentColor'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M12.5 20.833V12.5m0 0V4.167m0 8.333h8.333m-8.333 0H4.167'
      strokeWidth={2.083}
      strokeLinecap='round'
    />
  </svg>
)

const MinusSvg = (props) => (
  <svg
    width={25}
    height={25}
    stroke='currentColor'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M20.833 12.5H4.167'
      strokeWidth={2.083}
      strokeLinecap='round'
    />
  </svg>
)

export const QaItem = ({ iOpened = false, q, a }) => {
  const [opened, setOpened] = useState(iOpened)

  const handleOpenClick = () => {
    setOpened(opened => !opened)
  }

  return (
    <div className={styles.container}>
      <div className={styles.top} onClick={handleOpenClick}>
        <h3 className='typo-h3'>{q}</h3>
        {opened ? <MinusSvg /> : <PlusSvg />}
      </div>
      <p
        className={jCl('typo-p', styles.body, opened && styles.bodyopened)}
      >
        {a}
      </p>
    </div>
  )
}
