import {
  AspectRatio,
  Box,
  Button,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const ProductCard = ({ product }) => {
  const { id, image, nom, prix, type, description } = product;

  return (
    <div className="product-card">
      <Link to="/product" state={{ product }}>
        <Stack id={id}>
          <Box position="relative">
            <AspectRatio height={"100%"} width={"100%"} ratio={4 / 4}>
              <Image
                src={image}
                alt={nom}
                draggable="false"
                borderRadius={{
                  md: "xl",
                }}
              />
            </AspectRatio>
          </Box>
          <Stack>
            <Stack spacing="1">
              <Text
                fontWeight="light"
                color={useColorModeValue("gray.700", "gray.400")}
                fontSize={35}
              >
                {nom}
              </Text>
              <Text fontSize={30} fontWeight="light">
                {" "}
                {prix}€{" "}
              </Text>
            </Stack>
          </Stack>
          <Stack align="center">
            <Button
              backgroundColor="#D8C0AA"
              width="full"
              color={"white"}
              fontSize={30}
              fontWeight="medium"
            >
              Acheter
            </Button>
          </Stack>
        </Stack>
      </Link>
    </div>
  );
};
