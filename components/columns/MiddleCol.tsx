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
} from '@chakra-ui/react';

import { FiEdit, FiTrash, FiDollarSign } from 'react-icons/fi';
import { MdOutlinePrecisionManufacturing } from 'react-icons/md';
import { RiAdvertisementLine } from 'react-icons/ri';
import { MyChart } from '../MyChart';

const MiddleCol = () => {
  return (
    <Flex
      w="60%"
      p="3%"
      flexDir="column"
      overflow="auto"
      minH="100vh"
      bgColor="#fdfdfd"
    >
      <Flex justify="center">
        <Heading fontWeight="normal" mb={4} letterSpacing="tight">
          Welcome back,{' '}
          <Flex fontWeight="bold" display="inline-flex">
            Mr. Johnson
          </Flex>
        </Heading>
      </Flex>

      <MyChart />

      <Flex justifyContent="space-between" mt={8}>
        <Flex align="flex-end" w="100%">
          <Heading as="h2" size="lg" letterSpacing="tight">
            My Classes
          </Heading>
          <Text fontSize="small" color="gray" ml={4} mb={0.5}>
            Feb 2021
          </Text>
        </Flex>
        {/* <Flex>
          <IconButton
            size="sm"
            icon={<FiPlus />}
            aria-label="Add Class"
            colorScheme={'blue'}
          />
        </Flex> */}
      </Flex>

      {/* TABLE WRAPPER */}
      <Flex flexDir="column">
        <Flex overflow="auto">
          <Table variant="unstyled" mt={4}>
            <Thead>
              <Tr color="gray">
                <Th>Course</Th>
                <Th>Num. Students</Th>
                <Th>Avg. Grade</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {/* BUSINESS & FINANCE ROW */}
              <Tr>
                <Td>
                  <Flex align="center">
                    <Avatar
                      size="sm"
                      mr={2}
                      icon={<FiDollarSign color="green" />}
                      bg="rgb(237, 242, 247)"
                      //   border="1px solid gray"
                    />
                    <Flex flexDir="column">
                      <Heading size="sm" letterSpacing="tight">
                        Business & Finance
                      </Heading>
                      <Text fontSize="sm" color="gray"></Text>
                    </Flex>
                  </Flex>
                </Td>
                <Td>18</Td>
                <Td>92</Td>
                <Td>
                  <Flex align="center">
                    <IconButton
                      size="sm"
                      icon={<FiEdit />}
                      aria-label="Add Class"
                      colorScheme={'blue'}
                      variant={'outline'}
                      mr={2}
                    />
                    <IconButton
                      size="sm"
                      icon={<FiTrash />}
                      aria-label="Add Class"
                      variant={'outline'}
                      colorScheme={'red'}
                    />
                  </Flex>
                </Td>
              </Tr>

              {/* MANUFACTURING & PRODUCT DEVELOPMENT */}
              <Tr>
                <Td>
                  <Flex align="center">
                    <Avatar
                      size="sm"
                      mr={2}
                      icon={<MdOutlinePrecisionManufacturing color="orange" />}
                      bg="rgb(237, 242, 247)"
                      //   border="1px solid gray"
                    />
                    <Flex flexDir="column">
                      <Heading size="sm" letterSpacing="tight">
                        Manufacturing
                      </Heading>
                      <Text fontSize="sm" color="gray"></Text>
                    </Flex>
                  </Flex>
                </Td>
                <Td>22</Td>
                <Td>89</Td>
                <Td>
                  <Flex align="center">
                    <IconButton
                      size="sm"
                      icon={<FiEdit />}
                      aria-label="Add Class"
                      colorScheme={'blue'}
                      variant={'outline'}
                      mr={2}
                    />
                    <IconButton
                      size="sm"
                      icon={<FiTrash />}
                      aria-label="Add Class"
                      variant={'outline'}
                      colorScheme={'red'}
                    />
                  </Flex>
                </Td>
              </Tr>

              {/* MARKETING */}
              <Tr>
                <Td>
                  <Flex align="center">
                    <Avatar
                      size="sm"
                      mr={2}
                      icon={<RiAdvertisementLine color="blue" />}
                      bg="rgb(237, 242, 247)"
                      //   border="1px solid gray"
                    />
                    <Flex flexDir="column">
                      <Heading size="sm" letterSpacing="tight">
                        Marketing
                      </Heading>
                      <Text fontSize="sm" color="gray"></Text>
                    </Flex>
                  </Flex>
                </Td>
                <Td>15</Td>
                <Td>87</Td>
                <Td>
                  <Flex align="center">
                    <IconButton
                      size="sm"
                      icon={<FiEdit />}
                      aria-label="Add Class"
                      colorScheme={'blue'}
                      variant={'outline'}
                      mr={2}
                    />
                    <IconButton
                      size="sm"
                      icon={<FiTrash />}
                      aria-label="Add Class"
                      variant={'outline'}
                      colorScheme={'red'}
                    />
                  </Flex>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default MiddleCol;
