import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'

import styles from './components/style/styles'

import MainApp from './components/MainApp'
import firebase from './components/Firestore'

class App extends Component {
	state = {
		auth: false,
		open: false,
		email: '',
		password: '',
		itemList: {}
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

	render() {
	const { classes } = this.props

	return (
		<BrowserRouter>
			<div className={classes.root}>
					<MainApp 
						auth={this.state.auth}
						open={this.state.open}
						handleDrawerOpen={this.handleDrawerOpen}
						handleDrawerClose={this.handleDrawerClose}
						handleClick={this.handleClick}
					/>
			</div>
		</BrowserRouter>
	)}
}

App.propTypes = {
	classes: PropTypes.object.isRequired,
	container: PropTypes.object,
	theme: PropTypes.object.isRequired,
}

export default withStyles(styles, { withTheme: true })(App)
