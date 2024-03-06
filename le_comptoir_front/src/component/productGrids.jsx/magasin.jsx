import React from "react";
import { Image, Text, Box, Heading, Input } from "@chakra-ui/react";
import { ProductList } from "./return";
const ProductCard = ({ imageUrl, productName, description }) => {
  return (
    <Box display={"flex"}>
      <Box mr="1rem">
        <Image
          src={imageUrl}
          alt={productName}
          boxSize="100px"
          objectFit="cover"
        />
      </Box>
      <Box>
        <Text>{productName}</Text>
        <Text>{description}</Text>
      </Box>
    </Box>
  );
};

const Magasin = () => {
  
  return (
    <Box marginTop={"6rem"} display={"flex"}>
      <Box
        id="bar de recherche"
        paddingBottom={"2rem"}
        display={"flex"}
        paddingX={"4rem"}
        flexDirection={"column"}
      >
        <Input marginBottom={"2rem"} placeholder="what do you want" />
        <Heading paddingBottom={"2rem"}>Filtre</Heading>
        <Heading paddingBottom={"2rem"}>Filtre</Heading>
        <Heading paddingBottom={"2rem"}>Filtre</Heading>
      </Box>
      <ProductList />
    </Box>
  );
};

export default Magasin;
