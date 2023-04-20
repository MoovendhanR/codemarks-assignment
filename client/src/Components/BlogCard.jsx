import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  Image,
  useColorModeValue,
  Flex,
  useDisclosure,
  RadioGroup,
  Button,
} from '@chakra-ui/react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
   
    ModalCloseButton,
  } from '@chakra-ui/react'
import { useRef, useState } from 'react';
import DetailedCard from './Detailedcard';
import { TriangleDownIcon } from '@chakra-ui/icons';

export default function BlogCard({item}) {
  return (
    <Center py={6}>
      <Box
        maxW={'445px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
       >
        <Flex>
        <Stack  direction={'row'} spacing={4} align={'center'}>
        <Avatar src="https://i.pravatar.cc/300"/>
        </Stack>
          <Stack direction={'column'} ml={"10px"} spacing={0} fontSize={'sm'}>
            <Text fontWeight={600}>{item.name}</Text>
            <Text color={'gray.500'}>Feb 08, 2021 · 6min read</Text>
          </Stack>
        </Flex>
        <Box
          h={'210px'}
          bg={'gray.100'}
          mt={6}
          mx={-6}
          mb={6}
          pos={'relative'}>
          <Image
              borderRadius={"10px"}
            src={
              item.image
            }
            layout={'fill'}
          />
        </Box>
        <Stack>
          
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            mx={6}
            mt="16"
            fontFamily={'body'}>
         {item.question}     
 </Heading>
          <Text color={'gray.500'}>
            {item.blog}
          </Text>
        </Stack>
       <ScrollingExample item={item}/>
      </Box>
    </Center>
  );
}



function ScrollingExample({item}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [scrollBehavior, setScrollBehavior] = useState('inside')
  
    const btnRef = useRef(null)
    return (
      <>
        <RadioGroup value={scrollBehavior} onChange={setScrollBehavior}>
        
        </RadioGroup>
  
        <Button mt={3} ref={btnRef} onClick={onOpen}>
         Read More <TriangleDownIcon/>
        </Button>
  
        <Modal
          onClose={onClose}
          finalFocusRef={btnRef}
          isOpen={isOpen}
          scrollBehavior={scrollBehavior}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                 <DetailedCard item={item}/>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }