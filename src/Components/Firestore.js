import React, { useState, useEffect } from "react";
import "firebase/firestore";
import { db } from "../Firebase";

const Firestore = () => {
  const [nameData, setNameData] = useState([]);

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
        {nameData.map((doc) => {
          return <div>{doc.name}</div>;
        })}{" "}
      </div>
    </div>
  );
};

export default Firestore;
