import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types';
import { BrowserRouter, Link, Route } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import { Drawer, List, ListItem, ListItemText, 
		AppBar, CssBaseline, Toolbar, Typography,
		Hidden, IconButton, InputBase } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'

import styles from './components/style/styles'

import Dashboard from './components/Dashboard'
import AvailableEquipments from './components/AvailableEquipments'
import BorrowedEquipments from './components/BorrowedEquipments'
import BorrowForm from './components/BorrowForm'
import ReturnForm from './components/ReturnForm'
import ReservationForm from './components/ReservationForm'
import Calendar from './components/Calendar'
import HistoryLog from './components/HistoryLog'
import Footer from './components/Footer'

class App extends Component {
	state = {
		mobileOpen: false,
	}

	handleDrawerToggle = () => {
		this.setState(prevState => ({ mobileOpen: !prevState.mobileOpen }));
	}

	render() {
	const { classes, theme } = this.props
	const routes = [
		{
			name: 'Dashboard',
			path: '/',
			exact: true,
			main: () => <Dashboard />
		},
		{
			name: 'Borrowed Equipments',
			path: '/borrowed-equipments',
			main: () => <BorrowedEquipments />
		},
		{
			name: 'Available Equipments',
			path: '/available-equipments',
			main: () => <AvailableEquipments />
		},
		{
			name: 'Borrow Form',
			path: '/borrow-form',
			main: () => <BorrowForm />
		},
		{
			name: 'Return Form',
			path: '/return-form',
			main: () => <ReturnForm />
		},
		{
			name: 'Reservation Form',
			path: '/reservation-form',
			main: () => <ReservationForm />
		},
		{
			name: 'Calendar',
			path: '/calendar',
			main: () => <Calendar />
		},
		{
			name: 'History Log',
			path: '/history-log',
			main: () => <HistoryLog />
		}
	]

	const drawer = (
		<Fragment>
			<List>
				{routes.map(({name, path}, index) => (
					<ListItem button key={index}>
						<Link to={path} className="sidebar-links">{name}</Link>
					</ListItem>
				))}
			</List>
		</Fragment>
	)

	return (
		<BrowserRouter>
			<div className={classes.root}>
			<CssBaseline />
			<AppBar position='fixed' className={classes.appBar}>
				<Toolbar>
					<IconButton
						color='white'
						aria-label='Open drawer'
						onClick={this.handleDrawerToggle}
						className={classes.menuButton}
					>
					<MenuIcon />
					</IconButton>
					<Typography variant='h6' color='inherit' noWrap>
						PGIN-ITO B&amp;R System
					</Typography>
					<div className={classes.search}>
					<div className={classes.searchIcon}>
						<SearchIcon />
					</div>
					<InputBase
						placeholder="Search…"
						classes={{
							root: classes.inputRoot,
							input: classes.inputInput,
						}}
					/>
					</div>
				</Toolbar>
			</AppBar>
			<nav className={classes.drawer}>
				{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
				<Hidden smUp implementation='css'>
				<Drawer
					container={this.props.container}
					variant='temporary'
					anchor={theme.direction === 'rtl' ? 'right' : 'left'}
					open={this.state.mobileOpen}
					onClose={this.handleDrawerToggle}
					classes={{
						paper: classes.drawerPaper,
					}}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
				>
					{drawer}
				</Drawer>
				</Hidden>
				<Hidden xsDown implementation='css'>
					<Drawer
						classes={{
							paper: classes.drawerPaper,
						}}
						variant='permanent'
						open
					>
						{drawer}
					</Drawer>
			</Hidden>
			</nav>
			<main className={classes.content}>
				<div style={{ flex: 1, padding: '10px' }}>
					{routes.map((route, index) => (
						// Render more <Route>s with the same paths as
						// above, but different components this time.
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
	// Injected by the documentation to work in an iframe.
	// You won't need it on your project.
	container: PropTypes.object,
	theme: PropTypes.object.isRequired,
}

export default withStyles(styles, { withTheme: true })(App);
