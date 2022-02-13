import React from 'react';

import {
  Flex,
  Heading,
  Avatar,
  AvatarGroup,
  Text,
  Icon,
  IconButton,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
  Image,
} from '@chakra-ui/react';

import { FiSearch, FiBell } from 'react-icons/fi';

const RightCol = () => {
  return (
    <Flex w="25%" p="3%" flexDir="column" overflow="auto" bgColor="#fafafa">
      <Flex alignContent="center">
        <InputGroup
          bgColor="#fdfdfd"
          mb={4}
          border=".5px solid silver"
          //   borderColor="#fdfdfd"
          borderRadius="10px"
          mr={2}
        >
          <InputLeftElement
            pointerEvents="none"
            children={<FiSearch color="gray" />}
          />
          <Input type="number" placeholder="Search" borderRadius="10px" />
        </InputGroup>
        <IconButton
          icon={<FiBell />}
          fontSize="sm"
          bgColor="#fff"
          borderRadius="50%"
          aria-label="Notifications"
          p="10px"
        />
        <Flex
          w={30}
          h={25}
          bgColor="red"
          borderRadius="50%"
          color="#fff"
          align="center"
          justify="center"
          ml="-3"
          mt="-2"
          zIndex="100"
          fontSize="xs"
        >
          2
        </Flex>
      </Flex>
      <Flex flexDir="column" justify="center" align="center">
        <Heading letterSpacing="tight" as="h2" size="lg" mt="7">
          Integrations
        </Heading>
        <Image
          alt={'Link to Blackboard'}
          objectFit={'contain'}
          mt={50}
          mb={25}
          src={'/blackboard-logo.png'}
          boxSize="50px"
        />
        <Image
          alt={'Link to Canva'}
          objectFit={'contain'}
          src={'/canva-logo-3.png'}
          boxSize="75px"
        />
        <Image
          alt={'Link to Skyward'}
          objectFit={'contain'}
          src={'/skyward-logo.png'}
          boxSize="100px"
        />
        <Image
          alt={'Link to Google Classroom'}
          objectFit={'contain'}
          src={'/google-classroom-logo.png'}
          boxSize="125px"
        />
      </Flex>
    </Flex>
  );
};

export default RightCol;
