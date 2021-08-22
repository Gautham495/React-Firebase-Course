import React, { useEffect } from "react";
import 'firebase/firestore'
import {db} from '../Firebase'

const Firestore = () => {
  const getData = async () => {
    const names = await db.collection("names").get();
    console.log(names);
  };

  useEffect(() => {
    getData();
  }, []);

  return <div>Firebase Firestore Example</div>;
};

export default Firestore;
