import {
  Card,
  Image,
  Text,
  CardBody,
  Stack,
  Heading,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
  Container,
} from "@chakra-ui/react";
import React from "react";
import { useLocation } from "react-router-dom";


function Product() {
  const location = useLocation();
  const product = location.state?.product; 
  console.log("Product, product:", product)

  if (!product) {
    return (
      <Container maxW="2xl" centerContent>
        <Text>Product not found</Text>
      </Container>
    );
  }

  return (
    <Container width={"100%"} centerContent>

    

      <Card maxW="40rem">
        <CardBody>
          <Image
            src={product.image} 
            alt={product.nom} 
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{product.nom}</Heading>
            <Text>{product.description}</Text>
            <Text color="#A67B5B" fontSize="2xl">
              {product.prix}€
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="teal">
              Buy now
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </Container>
  );
}

export default Product;
