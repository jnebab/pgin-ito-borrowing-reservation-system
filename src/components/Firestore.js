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

// firebase.firestore().enablePersistence()
// .catch(function(err) {
// 	if (err.code == 'failed-precondition') {
// 			// Multiple tabs open, persistence can only be enabled
// 			// in one tab at a a time.
// 			// ...
// 	} else if (err.code == 'unimplemented') {
// 			// The current browser does not support all of the
// 			// features required to enable persistence
// 			// ...
// 	}
// })

export default firebase
