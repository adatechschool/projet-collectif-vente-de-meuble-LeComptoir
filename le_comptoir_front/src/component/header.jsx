import { Box, Input, Button , Image} from "@chakra-ui/react"
import { Link } from "react-router-dom";

function header() {

    return (
        <Box display={"flex"} justifyContent={"space-around"} width={"100%"} flexDirection={"row"} backgroundColor={"#4F6B5F"} alignItems={"center"}>

            <Input maxW={"20rem"} height={"3rem"} placeholder="Search" />
                <Image src={"https://aeyokqlrkmsdphrayffh.supabase.co/storage/v1/object/public/pictures/Illustration_sans_titre%205.png"} 
                alt={"logo"} 
                boxSize="10rem"
                alignItems={"center"}
                />

            <Box display={"flex"} alignItems={"center"}>
                <Link to="/login" >Aller à la page de login</Link>
            </Box>

        </Box>
    )
}

export default header;