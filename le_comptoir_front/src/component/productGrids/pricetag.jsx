import { HStack, Text, useColorModeValue as mode } from '@chakra-ui/react'


export function formatPrice(value, opts = {}) {
  const { locale = 'en-US', currency = 'USD' } = opts
  const formatter = new Intl.NumberFormat(locale, {
    currency,
    style: 'currency',
    maximumFractionDigits: 2,
  })
  return formatter.format(value)
}

export const PriceTag = ({ price, currency, salePrice, rootProps, priceProps }) => {
  return (
    <HStack spacing="1" {...rootProps}>
      <Price textProps={priceProps}>
        {formatPrice(price, {
          currency,
        })} 
      </Price>
      {salePrice}
    </HStack>
  )
}

const Price = ({ children, textProps }) => {
  const color = mode('gray.700', 'gray.400')
  return (
    <Text
      as="span"
      fontWeight="medium"
      color={color}
      {...textProps}
    >
      {children}
    </Text>
  )
}
