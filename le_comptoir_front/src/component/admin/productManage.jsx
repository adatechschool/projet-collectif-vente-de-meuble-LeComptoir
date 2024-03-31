import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Box,
    Button,
    Image,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

import "../../App.css";

import { getData } from "../../utils/api";

function productManage() {
    const [data, setdata] = useState([]);

    useEffect(() => {
        getData().then(setdata);
    }, []);

    const handleDelete = async (id) => {
        try {
            const response = await fetch(
                `http://localhost:3000/deleteProd/${id}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ id }),
                }
            );

            if (response.ok) {
                // maj du produit dans l'interface utilisateur
                const updatedData = data.filter((product) => product.id !== id);
                setdata(updatedData);
            } else {
                console.error(
                    "Erreur lors du changement de statut du produit :",
                    response.statusText
                );
            }
        } catch (error) {
            console.error(
                "Erreur lors du changement de statut du produit :",
                error
            );
        }
    };

    const handleToggle = async (state, id) => {
        try {
            const response = await fetch(
                `http://localhost:3000/changeState/${id}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ state, id }),
                }
            );

            if (response.ok) {
                // maj du produit dans l'interface utilisateur
                const updatedData = data.map((product) => {
                    if (product.id === id) {
                        return {
                            ...product,
                            statut:
                                state === "Disponible"
                                    ? "Indisponible"
                                    : "Disponible",
                        };
                    }
                    return product;
                });
                setdata(updatedData);
                return updatedData;
            } else {
                console.error(
                    "Erreur lors du changement de statut du produit :",
                    response.statusText
                );
            }
        } catch (error) {
            console.error(
                "Erreur lors du changement de statut du produit :",
                error
            );
        }
    };

    return (
        <Box display={"flex"} alignItems={"center"}>
            <TableContainer>
                <Table variant="striped" colorScheme="whiteAlpha">
                    <Thead>
                        <Tr>
                            <Th>Nom</Th>
                            <Th>Photo</Th>
                            <Th isNumeric>Prix</Th>
                            <Th>Statut</Th>
                            <Th>Actions</Th>
                        </Tr>
                    </Thead>

                    <Tbody>
                        {data.map((product) => (
                            <Tr key={product.id}>
                                <Td>{product.nom}</Td>
                                <Td>
                                    <Image
                                        src={product.image}
                                        width={"6rem"}
                                    ></Image>
                                </Td>
                                <Td isNumeric>{product.prix}</Td>
                                <Td>{product.statut}</Td>
                                <Td
                                    display={"flex"}
                                    gap={"1rem"}
                                    marginTop={"2rem"}
                                >
                                    <Button
                                        className="adminBtn"
                                        onClick={() =>
                                            handleToggle(
                                                product.statut,
                                                product.id
                                            )
                                        }
                                    >
                                        Changer statut
                                    </Button>
                                    <Button
                                        className="adminBtn"
                                        onClick={() => handleDelete(product.id)}
                                    >
                                        Supprimer article
                                    </Button>
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </Box>
    );
}

export default productManage;
