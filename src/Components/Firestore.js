import React, { useState, useEffect } from "react";
import "firebase/firestore";
import { db } from "../Firebase";
import Login from '../Login'

const Firestore = () => {
  const [nameData, setNameData] = useState([]);
  const [firestoreData, setFirestoreData] = useState("");

  const firestoreChange = (e) => {
    setFirestoreData(e.target.value);
  };

  const onSubmit = async () => {

    const addData = await db.collection("names").add({ name: firestoreData });

    setFirestoreData("");

  };

  const getData = async () => {
    let nameArray = [];

    const names = await db.collection("names").get();

    names.forEach((doc) => {
      // console.log(doc.id, '=>', doc.data());
      nameArray.push(doc.data());
    });

    setNameData(nameArray);

    console.log(nameData);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      Firebase Firestore Example
      <div>
        <input
          type="text"
          value={firestoreData}
          onChange={(e) => firestoreChange(e)}
          placeholder="Name"
        ></input>
        <button onClick={onSubmit}>Submit</button>
      </div>
      <div>
        {nameData.map((doc) => {
          return <div>{doc.name}</div>;
        })}{" "}
      </div>
      <Login/>
    </div>
  );
};

export default Firestore;

// google oauth --> displayName email 
// onAuthChanged
