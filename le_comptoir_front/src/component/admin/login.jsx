
import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Stack, Heading } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    async function handleLogin() {
        console.log("Email:", email);
        console.log("Mot de passe:", password);
        const response = await fetch("http://localhost:3000/signin", {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
        const data = await response.json()
        console.log("Data:", data)
        if (data.hasOwnProperty('users')) {
            navigate('/productManage')
        }
        else {
            throw console.error("Mauvais mail ou mdp");
        }
    };

    return (
        <Box maxW="md" mx="auto" mt={8} p={4}>
            
            <Box><Heading paddingBottom={"2rem"} as="h1" size="2xl">Le Comptoir</Heading>
            </Box>
            <FormControl>
                <FormLabel>Email</FormLabel>
                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
            <FormControl mt={4}>
                <FormLabel>Mot de passe</FormLabel>
                <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </FormControl>
            <Stack mt={4} direction="row" spacing={4}>
                <Button colorScheme="blue" onClick={handleLogin}>Se connecter</Button>
                <Button variant="outline">Mot de passe oublié</Button>
            </Stack>
        </Box>
    );
};

export default Login;