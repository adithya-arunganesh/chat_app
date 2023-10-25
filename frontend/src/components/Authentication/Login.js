import React, {useState} from 'react';
import { VStack } from "@chakra-ui/layout";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement} from "@chakra-ui/input"
import { Button } from '@chakra-ui/react';


const Login= () => {
    const [email, setEmail] = useState(); 
    const [password, setPassword] = useState(); 
    const [show, setShow] = useState(false); 

    const handleClick = () => setShow(!show);

    const submitHandler = (pics) => {

    };
    
    return <VStack spacing='5px'>
        <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input placeholder="Enter Your Email" onChange={(e)=>setEmail(e.target.value)}/>
        </FormControl>
        <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
                <Input type={show ? "text" : "password"} placeholder="Enter Your Password" onChange={(e)=>setPassword(e.target.value)}/>
                <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleClick}>
                        {show ? "Hide" : "Show"}
                    </Button>
                </InputRightElement>
            </InputGroup>
        </FormControl>
        <Button colorScheme='green' width="100%" style={{ marginTop: 15 }} onClick={submitHandler}>Login</Button>
        <Button variant='solid' colorScheme='gray' width="100%" style={{ marginTop: 15 }} onClick={() => {
            setEmail("guest@exmaple.com");
            setPassword("123456");
        }}>
            Login as Guest
        </Button>
    </VStack>;
};

export default Login;