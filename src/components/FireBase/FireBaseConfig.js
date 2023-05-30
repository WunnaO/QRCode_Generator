import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBj9xizXir8XqNeWejEmvGEP2fkNdwXPeA",
  authDomain: "qrcode-generator-8a204.firebaseapp.com",
  projectId: "qrcode-generator-8a204",
  storageBucket: "qrcode-generator-8a204.appspot.com",
  messagingSenderId: "849147882141",
  appId: "1:849147882141:web:758bc577137b07cedf0274",
  measurementId: "G-91LGXNS21C",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export default storage;

// const firebaseApi = {
//   apiKey: "AIzaSyBj9xizXir8XqNeWejEmvGEP2fkNdwXPeA",
//   authDomain: "qrcode-generator-8a204.firebaseapp.com",
//   projectId: "qrcode-generator-8a204",
//   storageBucket: "qrcode-generator-8a204.appspot.com",
//   messagingSenderId: "849147882141",
//   appId: "1:849147882141:web:758bc577137b07cedf0274",
//   measurementId: "G-91LGXNS21C",
// };

// const data = initializeApp(firebaseApi);
// export const fireStore = storage(data);
