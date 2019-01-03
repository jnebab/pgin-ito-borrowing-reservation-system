import firebase from 'firebase'

const config = {
	apiKey: "AIzaSyASrnLmFcLWt9bSetRP1ynNONV7cV3fmzE",
	authDomain: "pgin-ito-web-app.firebaseapp.com",
	databaseURL: "https://pgin-ito-web-app.firebaseio.com",
	projectId: "pgin-ito-web-app",
	storageBucket: "pgin-ito-web-app.appspot.com",
	messagingSenderId: "270793553710"
}
firebase.initializeApp(config)

export default firebase