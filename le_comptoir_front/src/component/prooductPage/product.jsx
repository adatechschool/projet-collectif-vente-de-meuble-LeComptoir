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
  ChakraBaseProvider,
} from "@chakra-ui/react";
import React from "react";
import Header from '../header'
import "./product.css";
import { useLocation } from "react-router-dom";

function Product() {
  const location = useLocation();
  const product = location.state?.product; 

  if (!product) {
    return (
      <>
      <Header />
      <Container maxW="2xl" centerContent>
        <Text>Product not found</Text>
      </Container>
      </>
    );
  }
  
  return (

<>
<Header />
<Card
  style = {{width: '100%'}}
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image
    src={product.image}
    alt={product.nom}
    borderRadius={{
      md: "xl",
    }}
    maxW="41.5vw"
    object-fit="cover"
    margin={"10px"}
    className="responsive-image" id="image"
  />

  <Stack>
    <CardBody>
      <Heading>{product.nom}</Heading>
      <Text py='5'>
        {product.description}
      </Text>
      <Text>{product.prix}€</Text>
    </CardBody>

    <CardFooter>
      <Button variant='solid' colorScheme='blue'>
        Acheter
      </Button>
    </CardFooter>
  </Stack>
</Card>
</>
  );
}

export default Product;