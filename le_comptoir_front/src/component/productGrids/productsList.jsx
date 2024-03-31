import { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";


import { ProductCard } from "./productCard";
import { getMeubles } from "../../utils/api";

import "../../App.css";


function ProductList() {
  const [meubles, setMeubles] = useState([]); // initalise data | setMeubles est une fonction qui permet de mettre à jour la valeur de data

  useEffect(() => {
    getMeubles().then(setMeubles);
  }, []);

  return (
    <Box maxW="100%">
      <Box display={"Flex"} width={"100%"} gap={"4rem"} flexWrap={"wrap"}>
        {meubles.map((meuble) => (
          <ProductCard key={meuble.id} product={meuble} />
        ))}
      </Box>
    </Box>
  );
}

export default ProductList;
