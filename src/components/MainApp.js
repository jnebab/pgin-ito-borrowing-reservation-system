import React, { Fragment } from 'react'
import { Link, Route } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import { AppBar, Drawer, CssBaseline, Toolbar, Typography,
	Divider, IconButton, Button, List, ListItem, ListItemText } from '@material-ui/core'
import routes from '../Routes'
import Footer from './Footer'
import { withContext } from '../Context'

import styles from './style/styles'

class MainApp extends React.Component {
	render() {
		const { classes, auth, open, handleClick, handleDrawerOpen, handleDrawerClose } = this.props

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
			<Fragment >
			<CssBaseline />
			<AppBar
				position="absolute"
				className={classNames(classes.appBar, open && classes.appBarShift)}
			>
				<Toolbar disableGutters={!open} className={classes.toolbar}>
				<IconButton
					color="inherit"
					aria-label="Open drawer"
					onClick={handleDrawerOpen}
					className={classNames(
					classes.menuButton,
					open && classes.menuButtonHidden,
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
					BaRITO of PGIN - Borrowing and Reservation System for the Information Technology Office
				</Typography>
				<SearchIcon />
				<Button color="default" variant="contained" onClick={handleClick}>
					{auth ? "Logout" : "Login"}
				</Button>
				
			</Toolbar>
			</AppBar>
			<Drawer
				variant="permanent"
				classes={{
				paper: classNames(classes.drawerPaper, !open && classes.drawerPaperClose),
				}}
				open={open}
			>
				<div className={classes.toolbarIcon}>
				<IconButton onClick={handleDrawerClose}>
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
			</Fragment>
		)
	}
}

export default withContext(withStyles(styles)(MainApp))
