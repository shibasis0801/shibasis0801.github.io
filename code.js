
  // Initialize Firebase
var config = {
  apiKey: "AIzaSyDUpDUca3FWT38Anf7Uxn9z-JlH-KSPDEM",
  authDomain: "portfoliowebsite-7201a.firebaseapp.com",
  databaseURL: "https://portfoliowebsite-7201a.firebaseio.com",
  projectId: "portfoliowebsite-7201a",
  storageBucket: "portfoliowebsite-7201a.appspot.com",
  messagingSenderId: "462233119491"
};
firebase.initializeApp(config);
db = firebase.firestore()

const button = document.getElementById("button_firebase")

button.addEventListener('click',
    (event) => {
        db.collection("users").add({
            first: "Ada",
            last: "Lovelace",
            born: 1815
        })
        .then((documentReference) => {
            alert("Uploaded to firebase firestore")
        })
    }
)