import { Box, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function header() {
    return (
        <Box
            display={"flex"}
            justifyContent={"space-around"}
            width={"100%"}
            flexDirection={"row"}
            backgroundColor={"#4F6B5F"}
            alignItems={"center"}
        >
            <Image
                src={
                    "https://aeyokqlrkmsdphrayffh.supabase.co/storage/v1/object/public/pictures/Illustration_sans_titre%205.png"
                }
                alt={"logo"}
                boxSize="10rem"
                alignItems={"center"}
            />

            <Box display={"flex"} alignItems={"center"}>
                <Link to="/login">
                    <Image
                        src="https://aeyokqlrkmsdphrayffh.supabase.co/storage/v1/object/public/Les%20vraies%20images%20utilisables/Admin.png"
                        alt="Login Admin"
                        style={{ width: "3rem", height: "3rem" }}
                    />
                </Link>
            </Box>
        </Box>
    );
}

export default header;