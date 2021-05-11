const firebaseConfig = {
    apiKey: "AIzaSyA3AJ7Wl-jOc_QJDgEagwN2D_-OLxTqY3s",
    authDomain: "disneyplus-clone-437e6.firebaseapp.com",
    projectId: "disneyplus-clone-437e6",
    storageBucket: "disneyplus-clone-437e6.appspot.com",
    messagingSenderId: "86803722049",
    appId: "1:86803722049:web:44e7319c2a0ba523423bc0",
    measurementId: "G-L96QN09W0W"
  };
  // Initialize Firebase
  const firebase = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage;
  
 export{auth, provider, storage};
 export default db;