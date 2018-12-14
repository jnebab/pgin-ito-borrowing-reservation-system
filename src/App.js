import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types';
import { BrowserRouter, Link, Route } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import { Drawer, List, ListItem, AppBar, CssBaseline, Toolbar, Typography,
		Divider, IconButton, ListItemText, ListItemIcon, Button } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import DashboardIcon from '@material-ui/icons/Dashboard'
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm'
import CheckCircle from '@material-ui/icons/CheckCircle'
import CompareArrows from '@material-ui/icons/CompareArrows'
import Assignment from '@material-ui/icons/Assignment'
import AssignmentTurnedIn from '@material-ui/icons/AssignmentTurnedIn'
import CalendarToday from '@material-ui/icons/CalendarToday'
import History from '@material-ui/icons/History'

import styles from './components/style/styles'
import classNames from 'classnames';

import Dashboard from './components/DashboardContainer'
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
		auth: false,
		open: false
	}

	handleDrawerOpen = () => {
		this.setState({ open: true });
	}
	
	handleDrawerClose = () => {
		this.setState({ open: false });
	};
	

	handleSubmit = data => {
		console.log(data.get('email'))
		if(data.get('email') === 'admin@admin.com' && 
			data.get('password') === 'adminpass123') {
				this.setState({
					auth: true
				})
			}
	}

	handleClick = () => {
		this.setState({
			auth: false
		})
	}

	render() {
	const { classes, theme } = this.props
	const routes = [
		{
			name: 'Dashboard',
			path: '/',
			exact: true,
			icon: <ListItemIcon><DashboardIcon /></ListItemIcon>,
			main: () => <Dashboard auth={this.state.auth} handleSubmit={this.handleSubmit}/>
		},
		{
			name: 'Borrowed Equipments',
			path: '/borrowed-equipments',
			icon: <ListItemIcon><AccessAlarmIcon /></ListItemIcon>,
			main: () => <BorrowedEquipments auth={this.state.auth} handleSubmit={this.handleSubmit}/>
		},
		{
			name: 'Available Equipments',
			path: '/available-equipments',
			icon: <ListItemIcon><CheckCircle /></ListItemIcon>,
			main: () => <AvailableEquipments auth={this.state.auth} handleSubmit={this.handleSubmit}/>
		},
		{
			name: 'Borrow Form',
			path: '/borrow-form',
			icon: <ListItemIcon><Assignment /></ListItemIcon>,
			main: () => <BorrowForm auth={this.state.auth} handleSubmit={this.handleSubmit}/>
		},
		{
			name: 'Return Form',
			path: '/return-form',
			icon: <ListItemIcon><CompareArrows /></ListItemIcon>,
			main: () => <ReturnForm auth={this.state.auth} handleSubmit={this.handleSubmit}/>
		},
		{
			name: 'Reservation Form',
			path: '/reservation-form',
			icon: <ListItemIcon><AssignmentTurnedIn /></ListItemIcon>,
			main: () => <ReservationForm auth={this.state.auth} handleSubmit={this.handleSubmit}/>
		},
		{
			name: 'Calendar',
			path: '/calendar',
			icon: <ListItemIcon><CalendarToday /></ListItemIcon>,
			main: () => <Calendar auth={this.state.auth} handleSubmit={this.handleSubmit}/>
		},
		{
			name: 'History Log',
			path: '/history-log',
			icon: <ListItemIcon><History /></ListItemIcon>,
			main: () => <HistoryLog auth={this.state.auth} handleSubmit={this.handleSubmit}/>
		}
	]

	const drawer = (
		<Fragment>
			<List>
				{routes.map(({name, icon, path}, index) => (
					<Link to={path} className="sidebar-links">
						<ListItem button key={index}>
							{icon} 
							<ListItemText primary={name} />
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
				<Button color="default" variant="raised" onClick={this.handleClick}>
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
	// Injected by the documentation to work in an iframe.
	// You won't need it on your project.
	container: PropTypes.object,
	theme: PropTypes.object.isRequired,
}

export default withStyles(styles, { withTheme: true })(App);
