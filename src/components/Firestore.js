import firebase from 'firebase'

var config = {
	apiKey: "AIzaSyC-ReHLnKrmKfI_xSdz-OpfsJxMVB-Vjxo",
	authDomain: "barito-pgin.firebaseapp.com",
	databaseURL: "https://barito-pgin.firebaseio.com",
	projectId: "barito-pgin",
	storageBucket: "barito-pgin.appspot.com",
	messagingSenderId: "875124099252"
}
firebase.initializeApp(config)

export default firebase
