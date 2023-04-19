import { useState } from "react";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
//   HStack,
  Checkbox,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Container,
  Link
} from '@chakra-ui/react';
import { EmailIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Link as RouterLink, useNavigate } from "react-router-dom";




const Register=()=>{
   const [showPassword, setShowPassword] = useState(false);
   const [email,setEmail]=useState("")
   const [password,setPassword]=useState("")
   const [confirm,setConfirm]=useState("")
   const navigate=useNavigate()
      const handleSubmit=()=>{
          const payload={
            email,
            password,
            confirm
          }
          console.log(payload)

          fetch("http://localhost:5000/users/register",{
             method:"POST",
             body:JSON.stringify(payload),
             headers:{
                "Content-type": "application/json"
             }
          })
          .then(res=>res.json())
          .then(res=>console.log(res))
          .then(()=>navigate("/login"))
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
        
           {/* <h1>this is Register page</h1>
           <input type="text" placeholder="Enter name" value={name} onChange={(e)=>setName(e.target.value)}/>
           <input type="text" placeholder="Enter email"value={email}onChange={(e)=>setEmail(e.target.value)}/>
           <input type="password" placeholder="Enter password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
           <input type="text" placeholder="Enetr age" value={age} onChange={(e)=>setAge(e.target.value)}/>
           <button onClick={handleSubmit}>Submit</button> */}
            <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading as='u' fontSize={'4xl'} textAlign={'center'}>
           Create Account
          </Heading>
          <Text fontSize='sm' as='u'>Enter your email & password to Sign Up</Text>

        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
               
            {/* </HStack> */}
            <FormControl id="email" isRequired>
              <FormLabel>Email Address</FormLabel>
              <InputGroup>
              <Input type="email"value={email}onChange={(e)=>setEmail(e.target.value)}/>
              <InputRightElement h={'full'}>
              <Button
                    variant={'ghost'}
                  >
                    <EmailIcon/>
                  </Button>
              </InputRightElement>

              </InputGroup>
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} value={password} onChange={(e)=>setPassword(e.target.value)} />
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


            <FormControl id="password" isRequired>
              <FormLabel>Confirm Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} value={confirm} onChange={(e)=>setConfirm(e.target.value)} />
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
            <Checkbox>Remember me</Checkbox>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={"rgb(14,116,105)"}
                color={'white'}
                _hover={{
                   bg: 'green.500',
                  }}
                  onClick={handleSubmit}
                  >
                    Create Account
              </Button>
            </Stack>
               <Text textAlign="center" as='u'>or</Text>
               <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={"rgb(31,195,158)"}
                color={'white'}
                _hover={{
                   bg: 'green.500',
                  }}
                  >
                    <Link as={RouterLink} to="/login">
                   Sign In
                    </Link>
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
           
        </Container>
    )
}

export default Register;