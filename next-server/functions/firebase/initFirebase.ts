import { getApp, initializeApp } from "firebase/app";
const initFirebase = () => {
  let instance = undefined;
  const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: `${process.env.PROJECT_ID}.firebaseapp.com`,
    databaseURL: `https://${process.env.DATABASE_NAME}.firebaseio.com`,
    projectId: process.env.PROJECT_ID,
    storageBucket: `${process.env.DATABASE_NAME}.appspot.com`,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
  };
  try {
    instance = getApp(process.env.PROJECT_ID);
  } catch (error) {
    instance = initializeApp(firebaseConfig);
  }
  return instance;
};
export { initFirebase };
