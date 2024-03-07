import {
  AspectRatio,
  Box,
  Button,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { PriceTag } from "./pricetag";
import { Link } from "react-router-dom";

export const ProductCard = (props) => {
  const { product } = props;
  const { id ,name, imageUrl, price, type } = product;
  return (
    <Link to={{
      pathname: '/product',
      state: { product }
     }}>
      <Stack id={id}>
        <Box position="relative">
          <AspectRatio ratio={4 / 3}>
            <Image
              src={imageUrl}
              alt={name}
              draggable="false"
              borderRadius={{
                md: "xl",
              }}
            />
          </AspectRatio>
        </Box>
        <Stack>
          <Stack spacing="1">
            <Text
              fontWeight="medium"
              color={useColorModeValue("gray.700", "gray.400")}
            >
              {name}
            </Text>
            <PriceTag price={price} currency="USD" />
          </Stack>
        </Stack>
        <Stack align="center">
          <Button colorScheme="blue" width="full">
            Add to cart
          </Button>
          <Text
            textDecoration="underline"
            fontWeight="medium"
            color={useColorModeValue("gray.600", "gray.400")}
          >
            Quick shop
          </Text>
        </Stack>
      </Stack>
    </Link>
  );
};
