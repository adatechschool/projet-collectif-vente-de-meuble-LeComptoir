import React from "react";
import { Box, Heading, Input } from "@chakra-ui/react";
import ProductList from "./return"
import CustomDrawer from "./../drawer";

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
        <CustomDrawer />
      </Box>
      <ProductList />
    </Box>
  );
};

export default Magasin;
