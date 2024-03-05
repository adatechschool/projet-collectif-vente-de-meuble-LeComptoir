import React from "react";
import { Image, Text, Box, Heading, Input } from "@chakra-ui/react";

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
  const productlist = [
    {
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6gj90ZkO0UDuMXPdSHAE0HbYpPMKrHuBTfQ&usqp=CAU",
      productName: "Produit 1",
      description: "le premier produit (aussi premier prix).",
    },
    {
      imageUrl:
        "https://media.tenor.com/9ps0i3-ykcAAAAAM/shocked-shocked-guy.gif",
      productName: "Produit 2",
      description: "le produit 1 mais en mieux.",
    },
    {
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROjfDTghEmMns99jBtOkpQrfBN19Xfw4W2Kg&usqp=CAU",
      productName: "Produit 3",
      description: "il coute bien trop cher pour vous arretez de rever.",
    },
  ];

  return (
    <Box marginTop={"6rem"} display={"flex"}>
      <Box
        id="bar de recherche"
        paddingBottom={"2rem"}
        display={"flex"}
        paddingX={"4rem"}
        flexDirection={"column"}
      >
        <Heading paddingBottom={"2rem"}>Filtre</Heading>
        <Heading paddingBottom={"2rem"}>Filtre</Heading>
        <Heading paddingBottom={"2rem"}>Filtre</Heading>
        <Input placeholder="what do you want" />
      </Box>
      <Box id="productlist">
        {productlist.map((element, index) => (
          <ProductCard
            key={index}
            imageUrl={element.imageUrl}
            productName={element.productName}
            description={element.description}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Magasin;
