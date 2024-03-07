import { Box } from '@chakra-ui/react'
import { ProductCard } from './productCard'
import { products } from './data'
import { ProductGrid } from './productgrid'

export const ProductList = () => (
  <Box
    maxW="100rem"
  >
    <ProductGrid>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ProductGrid>
  </Box>
)