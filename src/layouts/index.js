// components
import { DocsLayout } from './docs/DocsLayout'
import { ProductLayout } from './product/ProductLayout'

export const Layout = ({ variant, children, title }) => {
  if (variant === 'product') {
    return (
      <ProductLayout title={title}>
        {children}
      </ProductLayout>
    )
  }

  return (
    <DocsLayout title={title}>
      {children}
    </DocsLayout>
  )
}
