import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'

import styles from './components/style/styles'

import MainApp from './components/MainApp'
import firebase from './components/Firestore'
import { Provider } from './Context'

const db = firebase.firestore()

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
			itemList: {}
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
	
	async handleAddEquipment(e, data) {
		const brand = data.get('equipmentBrand')
		const model = data.get('equipmentModel')
		const serial = data.get('equipmentSerial')
		const type = data.get('equipmentType')
		const eqRef = db.collection("equipments")
		const size = await eqRef.get().then(snapshot => snapshot.docs.length)
		const zeroes = size < 10 ? '00' : size > 10 && size < 100 ? '0' : size
		const documentId = `eq-${zeroes}${size+1}`
		eqRef.doc(documentId).set({
			brand,
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

	handleBorrowing = () => {
		console.log('This is for borrowing submission')
	}

	handleReturning = () => {
		console.log('This is for returning submission')
	}

	handleReservation = () => {
		console.log('This is for reservations submission')
	}

	componentDidMount() {
		db.settings({
			timestampsInSnapshots: true
		})
		const eqRef = db.collection('equipments')
		console.log(eqRef.get().then(snapshot => snapshot.docs[0]))
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
