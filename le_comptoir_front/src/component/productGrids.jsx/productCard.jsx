import {
    AspectRatio,
    Box,
    Button,
    Image,
    Link,
    Skeleton,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react'
  import { PriceTag } from './pricetag'
  
  export const ProductCard = (props) => {
    const { product } = props
    const { name, imageUrl, price, type } = product
    return (
      <Stack
        type= {type}
      >
        <Box position="relative">
          <AspectRatio ratio={4 / 3}>
            <Image
              src={imageUrl}
              alt={name}
              draggable="false"
              fallback={<Skeleton />}
              borderRadius={{
                md: 'xl',
              }}
            />
          </AspectRatio>
        </Box>
        <Stack>
          <Stack spacing="1">
            <Text fontWeight="medium" color={useColorModeValue('gray.700', 'gray.400')}>
              {name}
            </Text>
            <PriceTag price={price} currency="USD" />
          </Stack>

        </Stack>
        <Stack align="center">
          <Button colorScheme="blue" width="full">
            Add to cart
          </Button>
          <Link
            textDecoration="underline"
            fontWeight="medium"
            color={useColorModeValue('gray.600', 'gray.400')}
          >
            Quick shop
          </Link>
        </Stack>
      </Stack>
    )
  }