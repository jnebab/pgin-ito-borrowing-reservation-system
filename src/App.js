import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'

import styles from './components/style/styles'

import MainApp from './components/MainApp'
import firebase from './components/Firestore'
import { Provider } from './Context'

let db = null

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			auth: true,
			open: false,
			equipmentBrand: '',
			equipmentModel: '',
			equipmentSerial: '',
			equipmentType: '',
			equipmentStatus: '',
			borrowersName: '',
			borrowersDept: '',
			selectedItem: '',
			email: '',
			password: '',
			dateOfUse: '',
			releasedDate: '',
			returnedDate: '',
			issuerName: '',
			receiverName: '',
			purpose: '',
			attachments: '',
			historyLogs: [],
			itemList: [],
			labelWidth: 0
		}

		this.handleAddEquipment = this.handleAddEquipment.bind(this)
	}

	handleDrawerOpen = () => {
		this.setState({ open: true });
	}
	
	handleDrawerClose = () => {
		this.setState({ open: false });
	}
	

	handleSubmit = (e, data) => {
		e.preventDefault()
		console.log(`Email: ${data.get('email')}, Password: ${data.get('password')}`)
		db.settings({
			timestampsInSnapshots: true
		})
		const userRef = db.collection('users')
		const emailQuery = userRef.where('email', '==', data.get('email'))
		const passwordQuery = userRef.where('password', '==', data.get('password'))
		if(emailQuery && passwordQuery) {
			this.setState({auth: true})
		}
	}

	handleChange = e => {
		const { name, value } = e.target

		this.setState({
			[name]: value
		})
	}

	handleClick = () => {
		this.setState({
			auth: false
		})
	}
	
	async handleAddEquipment(data) {
		const name = data.get('equipmentBrand')
		const model = data.get('equipmentModel')
		const serial = data.get('equipmentSerial')
		const type = data.get('equipmentType')
		const eqRef = db.collection("equipments")
		const checkId = await eqRef.get().then(snapshot => snapshot.docs.map(snap => snap.id === name))
		console.log(checkId)
		const altName = checkId && `${name}b`
		eqRef.doc(checkId ? altName : name).set({
			name,
			model,
			serial,
			type,
			eqStatus: "available"
		})
		.then(() => {
			console.log("Document successfully written!")
			this.setState({
				equipmentBrand: '',
				equipmentModel: '',
				equipmentSerial: '',
				equipmentType: '',
			})
		})
		.catch(error => {
			console.error("Error writing document: ", error)
		})
	}

	async handleBorrowing(data){
		const equipmentName = data.get('selectedItem')
		// const borrowersName = data.get('borrowersName')
		// const borrowersDept = data.get('borrowersDept')
		// const dateOfUse = data.get('dateOfUse')
		// const dateReleased = data.get('releasedDate')
		// const dateReturned = data.get('returnedDate')
		// const issuerName = data.get('issuerName')
		// const receiverName = data.get('receiverName')
		// const purpose = data.get('purpose')
		// const attachments = data.get('attachments')
		console.log(`eq: ${equipmentName}`)
		const eqRef = db.collection("equipments")
		const dt = await eqRef.get()
			.then(snapshot => snapshot.docs.map(snap => snap.data()))
		const index = await dt.map((equipment, i) => {
			if(equipment.unit === equipmentName){
				return(i)
			}
		})
		const zeroes = index < 10 ? '00' : index > 10 && index < 100 ? '0' : index
		const docId = `eq-${zeroes}${index+1}`
		console.log(docId.split(",", ""))
	}

	// async handleReturning = data => {
	// 	console.log('This is for returning submission')
	// }

	// async handleReservation = data => {
	// 	console.log('This is for reservations submission')
	// }

	async componentDidMount() {
		db = firebase.firestore()
		db.settings({
			timestampsInSnapshots: true
		})
		const eqRef = db.collection('equipments')
		const data = await eqRef.get().then(snapshot => snapshot.docs.map(snap => snap.data()))
		console.log(data.map(item => item))
		this.setState({
			itemList: data
		})
	}

	getContext = () => ({
		...this.state,
		historyLogs: this.state.historyLogs,
		handleChange: this.handleChange,
		handleClick: this.handleClick,
		handleSubmit: this.handleSubmit,
		handleAddEquipment: this.handleAddEquipment,
		handleBorrowing: this.handleBorrowing,
		handleReturning: this.handleReturning,
		handleReservation: this.handleReservation,
		handleDrawerOpen: this.handleDrawerOpen,
		handleDrawerClose: this.handleDrawerClose
	})

	render() {
		const { classes } = this.props

		return (
			<Provider value={this.getContext()}>
				<BrowserRouter>
					<div className={classes.root}>
							<MainApp />
					</div>
				</BrowserRouter>
			</Provider>
		)
	}
}

App.propTypes = {
	classes: PropTypes.object.isRequired,
	container: PropTypes.object,
	theme: PropTypes.object.isRequired,
}

export default withStyles(styles, { withTheme: true })(App)
