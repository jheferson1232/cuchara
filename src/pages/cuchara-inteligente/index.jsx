import { Layout } from '@layouts/index'
import { ProductProvider } from '@contexts/ProductContext'
/* Data */
import { data } from './data.js'

import styles from './page.module.scss'
import { PHeader } from '@components/PHeader/PHeader.jsx'
import { Iconify } from '@components/Iconify.jsx'
import { ITLanding } from '@components/ITLanding/ITLanding.jsx'

const Page = () => {
  return (
    <ProductProvider data={data}>
      <Component />
    </ProductProvider>
  )
}

const Component = () => {
  return (
    <Layout variant='product' title={data.productName}>
      <PHeader
        className={styles.pheader}
      >
        <p className='typo-p'>
          La herramienta ideal con un margen de error mínimo que hará que cocinar postres y elaboradas preparaciones sea pan comido
        </p>
        <div>
          <Iconify icon='eva:options-2-fill' />
          <span className='typo-p'>Elige entre 4 medidas internacionales según sea necesario: oz, ml, lb, g</span>
        </div>
        <div>
          <Iconify icon='ic:baseline-energy-savings-leaf' />
          <span className='typo-p'>Batería de larga duración que se apagarán automáticamente después de 5 minutos de inactividad</span>
        </div>
        <div>
          <Iconify icon='material-symbols:auto-awesome' />
          <span className='typo-p'>Pequeña y ligera, lo que hace que sea muy fácil llevarla a cualquier lado</span>
        </div>
      </PHeader>
      <div className={styles.itlanding}>
        <ITLanding
          imgSrc='/assets/cuchara/l1.png'
        >
          <h2>Elige entre 4 medidas internacionales</h2>
          <p>La Cuchara Medidora Inteligente tiene un rango de pesaje de <strong>0,5g a 500g</strong> con una legibilidad de 0,1 gramos, y sus unidades están diseñadas con <strong>oz, ml, lb, g</strong>, puede cambiar las unidades según sea necesario.</p>
        </ITLanding>
        <ITLanding
          imgSrc='/assets/cuchara/l2.png'
          rtl
        >
          <h2>5 minutos de apagado automático</h2>
          <p>Las pilas de la Cuchara Medidora Inteligente <strong>tienen una larga duración</strong> y se apagan automáticamente tras 5 minutos de inactividad, <strong>ahorrando energía y electricidad.</strong> Además, la batería es fácil de desmontar para su sustitución.</p>
        </ITLanding>
        <ITLanding
          imgSrc='/assets/cuchara/l3.png'
        >
          <h2>DIseño portatil para guardado fácil</h2>
          <p>Diseñado con un agujero para colgar es fácil de guardar ya que no ocupa espacio. Además es pequeña y ligera, por lo que es muy cómoda de llevar cuando sale de picnic o de acampada.</p>
        </ITLanding>
      </div>
    </Layout>
  )
}

export default Page
