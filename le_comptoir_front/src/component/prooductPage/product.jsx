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
  className="card"
  width={"100%"}

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

  <Stack className="stack">
    <CardBody className="card-body">
      <Heading size='md' className="card-name">{product.nom}</Heading>

      <Text py='2' >
        {product.description}
      </Text>
      <Text className="price">{product.prix}€</Text>
    </CardBody>

    <CardFooter className="btnBuy">
      <Button variant='solid' colorScheme='' color={"black"} border={"solid"}>
        Acheter
      </Button>
    </CardFooter>
  </Stack>
</Card>
</>
  );
}

export default Product;