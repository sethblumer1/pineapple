import React, { ReactElement } from "react";
import { useDocument } from "react-firebase-hooks/firestore";
import firebase from "../firebase/clientApp";

interface Props {
  // id is the id of the vote document
  // (which is also the uid of the user, and the name of the user doucment for that user)
  id: string;
  student: string;
}

export default function StudentList({ id, student }: Props): ReactElement {
  const [value, loading, error] = useDocument(
    firebase.firestore().doc(`users/${id}`)
  );

  return (
    <>
      {error && <strong>Error: {JSON.stringify(error)}</strong>}
      {loading && <span>Collection: Loading...</span>}
      {value && (
        <h4 style={{ marginTop: 0 }}>
            {student}
        </h4>
      )}
    </>
  );
}
        