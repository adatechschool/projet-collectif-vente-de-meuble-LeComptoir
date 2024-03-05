import { Box, Heading, Input } from "@chakra-ui/react"
import { Link } from "react-router-dom";

function header() {
    return (
        <Box display={"flex"} justifyContent={"space-between"} width={"100%"} paddingX={"4rem"}>
            <Heading as="h1" size="2xl">logo</Heading>
            <Box>
            <Heading paddingBottom={"2rem"} as="h1" size="2xl">Le Comptoir</Heading>
            <Input maxW={"15rem"} placeholder="Search" />
            </Box>
            <Link to="/login">Aller à la page de login</Link>
        </Box>
    )
}

export default header