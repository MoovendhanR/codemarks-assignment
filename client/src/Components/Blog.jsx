import React, { useEffect, useState } from 'react';
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  HStack,
//   Tag,
 
//   SpaceProps,
  useColorModeValue,
  Container,
  FormControl,
  Flex,
  Stack,
  Input,
  Button,
  Grid,
  InputGroup,

  InputRightElement,

} from '@chakra-ui/react';
import { CheckIcon, Search2Icon} from '@chakra-ui/icons';
import BlogCard from './BlogCard';

import data1 from "../data.json"


// const BlogTags = (props) => {
//   return (
//     <HStack spacing={2} marginTop={props.marginTop}>
//       {props.tags.map((tag) => {
//         return (
//           <Tag size={'md'} variant="solid" colorScheme="orange" key={tag}>
//             {tag}
//           </Tag>
//         );
//       })}
//     </HStack>
//   );
// };


export const BlogAuthor = (props) => {

  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src="https://100k-faces.glitch.me/random-image"
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};

const Blog = () => {
  const [search, setSearch] = useState("");
//   const [results, setResults] = useState();
  const [data, setData] = useState(data1);

    const [email, setEmail] = useState('');
    const [state, setState] = useState(
      'initial'
    );
    const [error, setError] = useState(false);

    const handleChange = (e) => {
        e.preventDefault()
        setSearch(e.target.value);
        const searchResults = data1.filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        );
        setData(searchResults);
        
    };
      useEffect(()=>{
            setData(data);
      },[data])

    

  return (
    <>
    <Container maxW={'7xl'} p="12">
      <Box
        marginTop={{ base: '1', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between">
       
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: '3', sm: '0' }}>
                  <Heading as="h1">Blogs! that can make you financial independent </Heading>
          {/* <BlogTags tags={['Engineering', 'Product']} /> */}
          <Heading marginTop="1">
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
            </Link>
          </Heading>
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="lg">
           CrossVal provides you some great blogs that can make you financial independent. Apply these blogs into your daily life and see the changes.
          </Text>

      {/* start */}
      <Flex
      minH={'20vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Container
        maxW={'lg'}
        bg={useColorModeValue('white', 'whiteAlpha.100')}
        boxShadow={'xl'}
        rounded={'lg'}
        p={6}
        direction={'column'}>
       
        <Stack
          direction={{ base: 'column', md: 'row' }}
          as={'form'}
          spacing={'12px'}
          onSubmit={(e) => {
              e.preventDefault();
            setError(false);
            setState('submitting');

            // remove this code and implement your submit logic right here
            setTimeout(() => {
              if (email === 'fail@example.com') {
                  setError(true);
                  setState('initial');
                  return;
                }
                
                setState('success');
            }, 1000);
        }}>
          <FormControl>
            <Input
              variant={'solid'}
              borderWidth={1}
              color={'gray.800'}
              _placeholder={{
                  color: 'gray.400',
                }}
                borderColor={useColorModeValue('gray.300', 'gray.700')}
                id={'email'}
                type={'email'}
                required
                placeholder={'Enter Your Email'}
                aria-label={'Your Email'}
              value={email}
              disabled={state !== 'initial'}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />
          </FormControl>
          <FormControl w={{ base: '100%', md: '40%' }}>
            <Button
            //   colorScheme={state === 'success' ? 'green' : 'blue'}
           bg={"rgb(14,116,105)"}
           color={"white"}
           _hover={{
               bg: "rgb(31,195,158)"
            }}
              isLoading={state === 'submitting'}
              w="100%"
              type={state === 'success' ? 'button' : 'Subscribe Now'}>
              {state === 'success' ? <CheckIcon /> : 'Subscribe Now'}
            </Button>
          </FormControl>
        </Stack>
        <Text
          mt={2}
          textAlign={'center'}
          color={error ? 'red.500' : 'gray.500'}>
          {error
            ? 'Oh no an error occured! 😢 Please try again later.'
            : "You won't receive any spam! ✌️"}
        </Text>
      </Container>
    </Flex>




        </Box>


        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center">
          <Box
            width={{ base: '100%', sm: '85%' }}
            zIndex="2"
            marginLeft={{ base: '0', sm: '5%' }}
            marginTop="5%">
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
              <Image
                borderRadius="lg"
                src={
                    'https://img.freepik.com/free-vector/site-stats-concept-illustration_114360-1434.jpg?w=740&t=st=1681979902~exp=1681980502~hmac=4c835ef253d26eef85852cd4e10d274474e284674026f259bedf19006bf1b930'
                }
                alt="some good alt text"
                objectFit="contain"
                />
            </Link>
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient={useColorModeValue(
                  'radial(orange.600 1px, transparent 1px)',
                'radial(orange.300 1px, transparent 1px)'
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
      </Box>
      <br />
      <InputGroup>
              <Input type="text" placeholder='searching blog ...' value={search} onChange={handleChange}  />
              <InputRightElement h={'full'}>
              <Button
                    variant={'ghost'}
                  >
                    <Search2Icon/>
                  </Button>
                
              </InputRightElement>
              </InputGroup>
    </Container>
    <Grid templateColumns='repeat(3, 1fr)' gap={6}>
    {
        data.map((item,index)=>(  
            <BlogCard key={index} item={item}/>
        ))
    }
    </Grid>

</>
  );
};

export default Blog;