import { LGuantes } from '@data/landings/LGuantes'

export const Landing = ({ slug }) => {
  if (slug === 'guantes') {
    return <LGuantes />
  }

  return <>Nothing</>
}
