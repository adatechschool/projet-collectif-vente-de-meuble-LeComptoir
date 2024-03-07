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

function product() {
    // const location = useLocation();
    // const { product } = location.state;
    // console.log(product);
  return (
    <Container maxW="2xl" centerContent>
      <Card maxW="40rem">
        <CardBody>
          <Image
            src="https://japandistore.com/cdn/shop/files/3SeaterJapandiSofa_3.png?v=1690730447&width=1000"
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">Living room Sofa</Heading>
            <Text>
              This sofa is perfect for modern spaces, japandi inspired spaces,
              earthy toned spaces and for people who love a chic design with a
              sprinkle of vintage design.
            </Text>
            <Text color="#A67B5B" fontSize="2xl">
              $450
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="teal">
              Buy now
            </Button>
            <Button variant="ghost" colorScheme="teal">
              Add to cart
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </Container>
  );
}

export default product;
