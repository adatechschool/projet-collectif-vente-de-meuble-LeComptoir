import { Box, Heading, Image, Text } from "@chakra-ui/react";
function CartPage() {
  return (
    <Box>
      <Box>
        <Heading borderBottom={"solid 3px"} marginBottom={"3rem"}>
          shopping cart (1 item)
        </Heading>
        <Box display={"Flex"} gap={"2rem"} alignItems={"center"}>
          <Image
            maxW={"200px"}
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
            objectFit="cover"
          />
          <Box>
            <Text>nom de l'article</Text>
            <Text>description</Text>
            <Text>carte cadeau ?</Text>
          </Box>
        </Box>
      </Box>
      <Box></Box>
    </Box>
  );
}

export default CartPage;
