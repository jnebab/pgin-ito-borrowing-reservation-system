import React from "react"
import PropTypes from "prop-types"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import InputBase from "@material-ui/core/InputBase"
import MenuItem from "@material-ui/core/MenuItem"
import Menu from "@material-ui/core/Menu"
import { withStyles } from "@material-ui/core/styles"
import MenuIcon from "@material-ui/icons/Menu"
import SearchIcon from "@material-ui/icons/Search"
import AccountCircle from "@material-ui/icons/AccountCircle"
import MoreIcon from "@material-ui/icons/MoreVert"

import styles from './style/styles'

const Header = props => {

		const anchorEl = props.anchorEl
		const mobileMoreAnchorEl = props.mobileMoreAnchorEl
		const { classes } = props
		const isMenuOpen = Boolean(anchorEl)
		const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

		const renderMenu = (
		<Menu
			anchorEl={anchorEl}
			anchorOrigin={{ vertical: "top", horizontal: "right" }}
			transformOrigin={{ vertical: "top", horizontal: "right" }}
			open={isMenuOpen}
			onClose={props.handleMenuClose}
		>
			<MenuItem onClick={props.handleMenuClose}>Profile</MenuItem>
			<MenuItem onClick={props.handleMenuClose}>My account</MenuItem>
		</Menu>
		);

		const renderMobileMenu = (
		<Menu
			anchorEl={mobileMoreAnchorEl}
			anchorOrigin={{ vertical: "top", horizontal: "right" }}
			transformOrigin={{ vertical: "top", horizontal: "right" }}
			open={isMobileMenuOpen}
			onClose={props.handleMobileMenuClose}
		>
			<MenuItem onClick={props.handleProfileMenuOpen}>
			<IconButton color="inherit">
				<AccountCircle />
			</IconButton>
			<p>Profile</p>
			</MenuItem>
		</Menu>
		);

		return (
			<div className={classes.root}>
				<AppBar position="static">
				<Toolbar>
					<IconButton
						className={classes.menuButton}
						color="inherit"
						aria-label="Open drawer"
						onClick={props.toggleDrawer}
					>
						<MenuIcon />
					</IconButton>
					<Typography
						className={classes.title}
						variant="h6"
						color="inherit"
						noWrap
					>
						PGIN-ITO B&R System
					</Typography>
					<div className={classes.search}>
					<div className={classes.searchIcon}>
						<SearchIcon />
					</div>
					<InputBase
						placeholder="Search…"
						classes={{
						root: classes.inputRoot,
						input: classes.inputInput
						}}
					/>
					</div>
					<div className={classes.grow} />
					<div className={classes.sectionDesktop}>
					<IconButton
						aria-owns={isMenuOpen ? "material-appbar" : undefined}
						aria-haspopup="true"
						onClick={props.handleProfileMenuOpen}
						color="inherit"
					>
						<AccountCircle />
					</IconButton>
					</div>
					<div className={classes.sectionMobile}>
					<IconButton
						aria-haspopup="true"
						onClick={props.handleMobileMenuOpen}
						color="inherit"
					>
						<MoreIcon />
					</IconButton>
					</div>
				</Toolbar>
				</AppBar>
				{renderMenu}
				{renderMobileMenu}
			</div>
		)
	}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
