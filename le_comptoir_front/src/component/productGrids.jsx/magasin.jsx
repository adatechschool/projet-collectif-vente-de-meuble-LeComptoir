import React from "react";
import { Box, Heading, Input } from "@chakra-ui/react";
import { ProductList } from "./return";

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
