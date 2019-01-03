import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types';
import { BrowserRouter, Link, Route } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import { Drawer, List, ListItem, AppBar, CssBaseline, Toolbar, Typography,
		Divider, IconButton, ListItemText, Button } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'


import styles from './components/style/styles'
import classNames from 'classnames';
import routes from './Routes'

import Footer from './components/Footer'
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
	const drawer = (
		<Fragment>
			<List>
				{routes.map(({name, icon, path}, index) => (
					<Link to={path} key={index} className="sidebar-links">
						<ListItem button>
							{icon} 
							<ListItemText key={index} primary={name} />
						</ListItem>
					</Link>
				))}
			</List>
		</Fragment>
	)

	return (
		<BrowserRouter>
			<div className={classes.root}>
			<CssBaseline />
			<AppBar
				position="absolute"
				className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
			>
				<Toolbar disableGutters={!this.state.open} className={classes.toolbar}>
				<IconButton
				color="inherit"
				aria-label="Open drawer"
				onClick={this.handleDrawerOpen}
				className={classNames(
				classes.menuButton,
				this.state.open && classes.menuButtonHidden,
				)}
				>
				<MenuIcon />
				</IconButton>
				<Typography
					component="h1"
					variant="h6"
					color="inherit"
					noWrap
					className={classes.title}
				>
				PGIN-ITO Borrowing
				</Typography>
				<SearchIcon />
				<Button color="default" variant="contained" onClick={this.handleClick}>
					{this.state.auth ? "Logout" : "Login"}
				</Button>
				
			</Toolbar>
			</AppBar>
			<Drawer
				variant="permanent"
				classes={{
				paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
				}}
				open={this.state.open}
			>
				<div className={classes.toolbarIcon}>
				<IconButton onClick={this.handleDrawerClose}>
					<ChevronLeftIcon />
				</IconButton>
				</div>
				<Divider />
				{drawer}
			</Drawer>
			<main className={classes.content}>
				<div style={{ flex: 1, padding: '50px 10px 10px' }}>
					{routes.map((route, index) => (
						<Route
						key={index}
						path={route.path}
						exact={route.exact}
						component={route.main}
						/>
					))}
				</div>
			<Footer />
			</main>
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
