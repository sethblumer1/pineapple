import React from 'react';

import {
  Flex,
  Heading,
  Avatar,
  AvatarGroup,
  Text,
  Icon,
  Link,
  Button,
  Image,
} from '@chakra-ui/react';

import { FiHome, FiEdit, FiCalendar, FiHelpCircle } from 'react-icons/fi';
import { SiGoogleclassroom } from 'react-icons/si';
import { RiHome2Line } from 'react-icons/ri';
import { BsCalendarCheck } from 'react-icons/bs';

const LeftCol = () => {
  return (
    <Flex
      w="15%"
      flexDir="column"
      alignItems="center"
      backgroundColor="#0248CD"
      color="#020202"
    >
      {/* Nav Wrapper */}
      <Flex flexDir="column" justifyContent="space-between" h="100vh">
        {/* NAV HEADER */}
        <Flex flexDir="column" as="nav">
          {/* <Heading
            mt={50}
            mb={100}
            fontSize="4xl"
            alignSelf="center"
            letterSpacing="tight"
          >
            LogicEd
          </Heading> */}
          <Image
            alt={'Login Image'}
            objectFit={'contain'}
            mt={25}
            mb={50}
            src={'/logic-ed-white-logo.png'}
            boxSize="150px"
          />
          {/* NAV ITEMS */}
          <Flex flexDir="column" align="flex-start" justifyContent="center">
            {/* HOME ICON */}
            <Flex className="sidebar-items">
              <Link>
                <Icon as={RiHome2Line} fontSize="2xl" className="active-icon" />
              </Link>
              <Link _hover={{ textDecor: 'none' }}>
                <Text className="active">Home</Text>
              </Link>
            </Flex>

            {/* GRADES ICON */}
            <Flex className="sidebar-items">
              <Link>
                <Icon as={SiGoogleclassroom} fontSize="2xl" />
              </Link>
              <Link _hover={{ textDecor: 'none' }}>
                <Text>Students</Text>
              </Link>
            </Flex>

            {/* SYLLABUS ICON */}
            <Flex className="sidebar-items">
              <Link>
                <Icon as={BsCalendarCheck} fontSize="2xl" />
              </Link>
              <Link _hover={{ textDecor: 'none' }}>
                <Text>Syllabus</Text>
              </Link>
            </Flex>

            {/* HELP ICON */}
            <Flex className="sidebar-items">
              <Link>
                <Icon as={FiHelpCircle} fontSize="2xl" />
              </Link>
              <Link _hover={{ textDecor: 'none' }}>
                <Text>Help</Text>
              </Link>
            </Flex>
          </Flex>
        </Flex>

        <Flex flexDir="column" alignItems="center" mb={10} mt={5}>
          <Button colorScheme="twitter">Log out</Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default LeftCol;
