import React, { Component } from 'react'
import './App.css'

import Header from './components/Header'
import Dashboard from './components/Dashboard'
import NavigationDrawer from './components/NavigationDrawer'
import Footer from './components/Footer'

class App extends Component {
	state = {
		anchorEl: null,
		mobileMoreAnchorEl: null
	}
	
	handleProfileMenuOpen = event => {
		this.setState({ anchorEl: event.currentTarget });
	}
	
	handleMenuClose = () => {
		this.setState({ anchorEl: null });
		this.handleMobileMenuClose();
	}
	
	handleMobileMenuOpen = event => {
		this.setState({ mobileMoreAnchorEl: event.currentTarget });
	}
	
	handleMobileMenuClose = () => {
		this.setState({ mobileMoreAnchorEl: null });
	}

	render() {
		return (
			<React.Fragment>
				<Header 
					handleProfileMenuOpen = {this.handleProfileMenuOpen}
					handleMenuClose = {this.handleMenuClose}
					handleMobileMenuOpen = {this.handleMobileMenuOpen}
					handleMobileMenuClose = {this.handleMobileMenuClose}
					anchorEl = {this.state.anchorEl}
					mobileMoreAnchorEl = {this.state.mobileMoreAnchorEl}
					/>
				<Dashboard />
				<NavigationDrawer open={false}/>
				<Footer />
			</React.Fragment>
		)
	}
}

export default App
