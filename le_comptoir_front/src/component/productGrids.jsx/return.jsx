import { Box, Flex } from '@chakra-ui/react'
import { ProductCard } from './productCard'
import { products } from './data'

export const ProductList = () => (
  <Box
    maxW="100rem"
  >
    <Box display={"Flex"} gap={"4rem"} >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Box>
  </Box>
)