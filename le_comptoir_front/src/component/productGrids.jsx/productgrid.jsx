import { SimpleGrid, Image } from "@chakra-ui/react";
import { Children, isValidElement, useMemo } from "react";

export const ProductGrid = (props) => {
  const columns = useMemo(() => {
    const count = Children.toArray(props.children).filter(
      isValidElement
    ).length;
    return {
      base: Math.min(2, count),
      md: Math.min(3, count),
      lg: Math.min(4, count),
      xl: Math.min(5, count),
    };
  }, [props.children]);

  return (
    <SimpleGrid
      columns={5}
      columnGap="2.5rem"
      rowGap="1rem"
      {...props}
    />
  );
};
