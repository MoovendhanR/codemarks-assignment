import { useState } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Text,
  Button,
  Heading,
  InputGroup,
  useColorModeValue,
  Container,
  InputRightElement,
} from '@chakra-ui/react';
import { Link as RouterLink, useNavigate} from "react-router-dom";
import { EmailIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import axios from "axios";
// import SetAuthToken from "./SetAuthToken";



 const Login=()=>{
  const [showPassword, setShowPassword] = useState(false);
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("");

  const navigate=useNavigate()

      const handleSubmit=()=>{
          const payload={
            email,
            password
          }
        //   console.log(payload)

          axios.post("http://localhost:5000/users/login",payload)
          // .then(res=>res.json())
          .then(res=>{
            let token=res.data.token;
            console.log(token);
            localStorage.setItem("token",res.data.token);
           
        })
        .then(()=>{
            navigate("/blog")
        })
          .catch(err=>console.log(err))

  
      }
    //   fetch("http://localhost:5000/users/")
    //   .then(res=>
    //    res.json())
    //  .then(res=>console.log(res))
    //  .catch(err=>console.log(err))
    
        return(
        <Container>
          <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}
         color={"rgb(14,116,105)"}
         _hover={{
            color: "rgb(31,195,158)"
           }}
           as='u'
          >
           Cross val.
          </Heading>
        </Stack>

           <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.700')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} as="u">Sign In</Heading>
          <Text fontSize='sm' as='u'>Enter your email & password to login</Text>

        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <InputGroup>
              <Input type="email"value={email} onChange={(e)=>setEmail(e.target.value)}/>
              <InputRightElement h={'full'}>
              <Button
                    variant={'ghost'}
                  >
                    <EmailIcon/>
                  </Button>
              </InputRightElement>
              </InputGroup>
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <InputGroup>
              <Input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
              <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'green.400'}>Forgot password?</Link>
              </Stack>
              <Button
              loadingText="Submitting"
              bg={"rgb(31,195,158)"}
              color={'white'}
              _hover={{
                 bg: 'green.500',
                }}
                onClick={handleSubmit}
                >
                Sign in
              </Button>
            </Stack>
            <Text textAlign="center" as='u'>or</Text>
             <Link as={RouterLink} to="/register">
               <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={"rgb(14,116,105)"}
                color={'white'}
                _hover={{
                   bg: 'green.500',
                  }}
                  >
                   Create Account
              </Button>
            </Stack>
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Flex>
        </Container>
    )
}



export default Login;