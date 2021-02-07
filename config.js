import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyDqEuIYIYkX3s850kHS4MSW_DtGpsSWPfs",
  authDomain: "booksanta-41487.firebaseapp.com",
  projectId: "booksanta-41487",
  databaseURL: "booksanta-41487.firebaseio.com",
  storageBucket: "booksanta-41487.appspot.com",
  messagingSenderId: "185011376616",
  appId: "1:185011376616:web:9a82d15c335c4b2c34145d"
};

if(!firebase.app.length){
firebase.initializeApp(firebaseConfig)
}
export default firebaseConfig