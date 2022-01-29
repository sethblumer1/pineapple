import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "../firebase/clientApp";

import {
  Flex,
  Box,
  Container,
  SimpleGrid,
  StackDivider,
  Icon,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';

import {
  FcMultipleDevices,
  FcMoneyTransfer,
  FcSupport,
  FcWorkflow,
  FcAssistant,
} from 'react-icons/fc';
import { ReactElement } from 'react';
interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}


// Configure FirebaseUI.
const uiConfig = {
  signInFlow: "popup",
  // Redirect to / after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: "/",
  // We will display GitHub as auth providers.
  signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID, firebase.auth.GoogleAuthProvider.PROVIDER_ID]
};

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex
        w={8}
        h={8}
        align={'center'}
        justify={'center'}
        rounded={'full'}
        bg={iconBg}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

function SignInScreen() {
  return (
      <>
    {/* <div
      style={{
        maxWidth: "320px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Pineapple Login</h1>
      <p>Please sign-in:</p>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div> */}
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
      p={10}
      >
      {/* <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}> */}
 
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'sm'}
            p={8}
          
            minH={'50vh'}
            w={{base: '300px', md: '1100px'}}
            display={'flex'}
            flexDirection={{base: 'column', md: 'row'}}
            align={'flex-start'}
            justify={'center'}
            

          >
            <Stack display={'flex'} justifyContent={'center'} alignItems={'center'} bg={'#0248CD'} w={{base: '100%', md: '40%'}} h={{base:'300px', md: '500px'}}  borderRadius={'5px'}>
              <Image
                  alt={'Login Image'}
                  objectFit={'contain'}
                  // h={{base: '100px', md: '150px'}}
                  // w={{base: '100px', md: '400px'}}
                  src={
                    '/logic-ed-white-logo.png'
                  }
                />
             
              <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
            </Stack>
          



            {/* Informational section */}
            <Stack spacing={4}>
                <Container maxW={'5xl'} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Flex>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={
              '/education-icon.svg'
            }
            objectFit={'contain'}
          />
        </Flex>
        <Stack spacing={4}>
          <Text
            textTransform={'uppercase'}
            color={'blue.400'}
            fontWeight={600}
            fontSize={'sm'}
            bg={useColorModeValue('blue.50', 'blue.900')}
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}>
            Our Mission
          </Text>
          <Heading size='lg'>Improve education to facilitate job creation.</Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
            We seek to present teachers with a simple but effective tool to teach Career Technical Education (CTE) courses.
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.100', 'gray.700')}
              />
            }>
            <Feature
              icon={
                <Icon as={FcMoneyTransfer} color={'yellow.500'} w={5} h={5} />
              }
              iconBg={useColorModeValue('yellow.100', 'yellow.900')}
              text={'Cost Efficient'}
            />
            <Feature
              icon={<Icon as={FcAssistant} color={'green.500'} w={5} h={5} />}
              iconBg={useColorModeValue('green.100', 'green.900')}
              text={'Supported Integration'}
            />
            <Feature
              icon={
                <Icon as={FcWorkflow} color={'purple.500'} w={5} h={5} />
              }
              iconBg={useColorModeValue('purple.100', 'purple.900')}
              text={'User Friendly'}
            />
          </Stack>
        </Stack>
      
      </SimpleGrid>
    </Container>
            </Stack>

        
      
            {/* <Heading fontSize={'4xl'}>Course management, made easy.</Heading> */}
            {/* <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
            </Text> */}
           
        
            
          {/* <Stack spacing={4}> */}
            {/* <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl> */}
            {/* <Stack spacing={10}> */}
              {/* <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack> */}
                {/* <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} /> */}
              {/* <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign in
              </Button> */}
            {/* </Stack> */}
          {/* </Stack> */}
        </Box>
      {/* </Stack> */}
    </Flex>
    
    </>
  );
}

export default SignInScreen;