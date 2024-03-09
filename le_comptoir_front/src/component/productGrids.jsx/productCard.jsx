import {
  AspectRatio,
  Box,
  Button,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const ProductCard = (props) => {
  const { product } = props;
  const { id, image , nom, prix, type, description } = product;
  
  console.log("ProductCard , product:", product)
  return (
    <Link
    to="/product"
      state={{ product }} 
    >
      <Stack id={id}>
        <Box position="relative">
          <AspectRatio ratio={4 / 3}>
            <Image
              src={image}
              alt={nom}
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
              {nom}
            </Text>
            <Text> {prix} </Text>
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
