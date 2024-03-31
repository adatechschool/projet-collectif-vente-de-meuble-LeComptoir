import React from "react";
import { Box } from "@chakra-ui/react";

import ProductList from "./productsList"
import CustomDrawer from "./../drawer";

const Magasin = () => {
  return (
    <Box paddingTop={"6rem"} display={"flex"} backgroundColor={"#FFF6EB"} width={"100%"} height={"100%"}>
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
