import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: conceal it or something
const firebaseConfig = {
  apiKey: "AIzaSyDADXDp3DthuikO4MH9JclzC97Yj0uksPw",
  authDomain: "paig-68eab.firebaseapp.com",
  databaseURL: "https://paig-68eab-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "paig-68eab",
  storageBucket: "paig-68eab.appspot.com",
  messagingSenderId: "599601281811",
  appId: "1:599601281811:web:ff4c1d4448808a7854b8e6"
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export default database;
