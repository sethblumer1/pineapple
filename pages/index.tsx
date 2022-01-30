import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import firebase from "../firebase/clientApp";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import React from "react";
import Auth from "../components/Auth";
import StudentList from "../components/StudentList";

import {
  InputGroup,
  Input,
  InputRightElement,
  Button,
  Flex,
} from '@chakra-ui/react';


type VoteDocument = {
  vote: string;
};

export default function Home() {

  // Firestore backend
  const db = firebase.firestore();

  // Destructure user, loading, and error out of hook
  const [user, loading, error] = useAuthState(firebase.auth());

  const [students, studentsLoading, studentsError] = useCollection(
    firebase.firestore().collection("students"),
    {}
  )

  // Print data (just to check)
  if (!studentsLoading && students) {
    students.docs.map((doc) => console.log(doc.data()));
  }

  // Create document function
  const addStudent = async (student: string) => {
    await db.collection("students").add({
      student: student
    })
    setValue('')
  }

  // For entering student name and sending to database 
  const [value, setValue] = React.useState('')
  const handleChange = (e) => {
    setValue(e.target.value)
    console.log(value)
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gridGap: 8,
      }}
    >
 
        {loading && <h4>Loading...</h4>}
        {!user && <Auth />}
        {user && (
          <>
            <Flex>
              <InputGroup size='md'>
                <Input
                  pr='4.5rem'
                  value={value}
                  onChange={handleChange}
                  placeholder='Enter student name'
                  focusBorderColor='blue.300'
                />
                <InputRightElement width='4.5rem'>
                  <Button h='1.75rem' size='sm' p='10px' onClick={() => addStudent(value)}  variant='solid' colorScheme='blue'>
                    Add
                  </Button>
                </InputRightElement>
              </InputGroup>
          </Flex>
          <Flex flexDirection='column'>
            {students?.docs?.map((doc) => {
              return (
               
                  <StudentList id={doc.id} key={doc.id} student={doc.data().student} />
             
              )
            })}
          </Flex>
        </>
      )}
    </div>
  );
}
