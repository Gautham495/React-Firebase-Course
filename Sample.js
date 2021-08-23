const onAuthStateChanged = async (userAuth) => {
    if (!userAuth) {
      return;
    }
  
    const userReference = db.collection("users").doc(userAuth.uid);
    const snapShot = await userReference.get();
  
    if (snapShot.exists) {
    }
  
    if (!snapShot.exists) {
      const { displayName, email, photoURL, uid } = userAuth;
      const createdAt = new Date();
      const lastLoginAt = new Date();
  
      try {
      } catch (error) {
        console.log(error);
      }
    }
  
    return () => userReference();
  };
  
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  
    return () => {
      subscriber;
    };
  }, []);
  