import { useState } from "react";
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Input,
    Heading,
    Box,
} from "@chakra-ui/react";

function CustomDrawer({ products, setFilteredProducts }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedTypes, setSelectedTypes] = useState([]);
    const [maxPrice, setMaxPrice] = useState("");

    const handleTypeChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            setSelectedTypes([...selectedTypes, value]);
        } else {
            setSelectedTypes(selectedTypes.filter((type) => type !== value));
        }
    };

    const handleMaxPriceChange = (event) => {
        setMaxPrice(event.target.value);
    };

    const handleSave = () => {
        const filteredProducts = products.filter((product) => {
            const matchesTypes =
                selectedTypes.length === 0 ||
                selectedTypes.includes(product.type);
            const meetsMaxPrice =
                maxPrice === "" ||
                parseFloat(product.price) <= parseFloat(maxPrice);
            return matchesTypes && meetsMaxPrice;
        });
        setFilteredProducts(filteredProducts);
        onClose();
    };

    return (
        <>
            <Button colorScheme="green" onClick={onOpen}>
                Filtrer
            </Button>
            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent style={{ background: "#fff6eb" }}>
                    <DrawerCloseButton />
                    <DrawerHeader>Filtrer les produits</DrawerHeader>
                    <DrawerBody style={{ color: "#d8c0aa" }}>
                        <Heading paddingTop={"2rem"} paddingBottom={"1rem"}>
                            Type
                        </Heading>
                        <Box
                            display={"flex"}
                            flexDirection={"column"}
                            gap={"1rem"}
                        >
                            <label htmlFor="table">
                                <input
                                    type="checkbox"
                                    id="table"
                                    name="table"
                                    value="table"
                                    onChange={handleTypeChange}
                                />
                                Table
                            </label>

                            <label htmlFor="chaise">
                                <input
                                    type="checkbox"
                                    id="chaise"
                                    name="chaise"
                                    value="chaise"
                                    onChange={handleTypeChange}
                                />
                                Chaise
                            </label>

                            <label htmlFor="canape">
                                <input
                                    type="checkbox"
                                    id="canape"
                                    name="canape"
                                    value="canape"
                                    onChange={handleTypeChange}
                                />
                                Canapé
                            </label>
                        </Box>

                        <Heading paddingTop={"2rem"} paddingBottom={"1rem"}>
                            Prix
                        </Heading>
                        <label htmlFor="maxPrice">Prix max.</label>
                        <Input
                            type="number"
                            id="maxPrice"
                            value={maxPrice}
                            onChange={handleMaxPriceChange}
                        />
                    </DrawerBody>
                    <DrawerFooter>
                        <Button
                            variant="outline"
                            mr={3}
                            onClick={onClose}
                            style={{ background: "#d8c0aa", color: "white" }}
                        >
                            Annuler
                        </Button>
                        <Button colorScheme="green" onClick={handleSave}>
                            Appliquer
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
}

export default CustomDrawer;
