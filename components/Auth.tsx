import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from '../firebase/clientApp';

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
  signInFlow: 'popup',
  // Redirect to / after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/',
  // We will display GitHub as auth providers.
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
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
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

function SignInScreen() {
  return (
    <>
      <Flex
        minH={'max-content'}
        align={'center'}
        justify={'center'}
        flexDirection={{ base: 'column', md: 'row' }}
        bg={useColorModeValue('gray.50', 'gray.800')}
        p={{ base: 10, md: 8 }}
        overflow={{ md: 'hidden' }}
      >
        {/* <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'sm'}
            p={8}
          
            minH={{base: '100%', md: '50vh'}}
            w={{base: '300px', md: '900px'}}
            display={'flex'}
            flexDirection={{base: 'column', md: 'row'}}
            align={'flex-start'}
            justify={'center'}
            

          > */}
        <Stack
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          bg={'#0248CD'}
          w={{ base: '100%', md: '40%' }}
          h={{ base: 'min-content', md: '500px' }}
          borderRadius={'5px'}
          marginTop={{ base: '100vh', md: '0px' }}
          padding={{ base: '20px', mNd: '0px' }}
        >
          <Image
            alt={'Login Image'}
            objectFit={'contain'}
            src={'/logic-ed-white-logo.png'}
          />

          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />
        </Stack>

        {/* Informational section */}
        <Stack spacing={4}>
          <Container maxW={'5xl'} py={6}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              <Flex>
                <Image
                  rounded={'md'}
                  alt={'feature image'}
                  src={'/education-icon.svg'}
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
                  rounded={'md'}
                >
                  Our Mission
                </Text>
                <Heading size="lg">
                  Improve education to facilitate job creation.
                </Heading>
                <Text color={'gray.500'} fontSize={'lg'}>
                  We seek to present teachers with a simple but effective tool
                  to teach Career Technical Education (CTE) courses.
                </Text>
                <Stack
                  spacing={4}
                  divider={
                    <StackDivider
                      borderColor={useColorModeValue('gray.100', 'gray.700')}
                    />
                  }
                >
                  <Feature
                    icon={
                      <Icon
                        as={FcMoneyTransfer}
                        color={'yellow.500'}
                        w={5}
                        h={5}
                      />
                    }
                    iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                    text={'Cost Efficient'}
                  />
                  <Feature
                    icon={
                      <Icon as={FcAssistant} color={'green.500'} w={5} h={5} />
                    }
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
        {/* </Box> */}
      </Flex>
    </>
  );
}

export default SignInScreen;
