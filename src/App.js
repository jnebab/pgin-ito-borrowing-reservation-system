import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'

import styles from './components/style/styles'

import MainApp from './components/MainApp'
import firebase from './components/Firestore'
import { Provider } from './Context'

class App extends Component {
	state = {
		auth: true,
		open: false,
		itemList: {},
		email: '',
		password: '',
		dateOfUse: '',
		purpose: '',
		attachments: '',
		historyLogs: []
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
		const db = firebase.firestore()
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

	handleClick = () => {
		this.setState({
			auth: false
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

	// componentDidMount() {
	// 	fetch('http://localhost:3001/borrowed-equipments')
	// 		.then(response => response.json())
	// 		.then(response => {
	// 			console.log(response)
	// 			this.setState({
	// 				itemList: response
	// 			})
	// 		})
	// }
	
	getContext = () => ({
		auth: this.state.auth,
		open: this.state.open,
		dateOfUse: this.state.dateOfUse,
		purpose: this.state.purpose,
		attachments: this.state.attachments,
		historyLogs: this.state.historyLogs,
		handleClick: this.handleClick,
		handleSubmit: this.handleSubmit,
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
