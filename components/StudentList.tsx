import React, { ReactElement } from "react";
import { useDocument } from "react-firebase-hooks/firestore";
import firebase from "../firebase/clientApp";

interface Props {
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
        