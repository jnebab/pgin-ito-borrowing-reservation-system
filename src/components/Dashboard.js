import React from 'react'
import { Paper, Grid } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';

import RecentlyBorrowed from './DashboardComponents/RecentlyBorrowed'
import RecentlyReturned from './DashboardComponents/RecentlyReturned'
import ReservationRequests from './DashboardComponents/ReservationRequests'

import styles from './style/styles'

export default withStyles(styles)(props => {
	const { classes } = props

	return (
		<div className={classes.dbRoot}>
			<Grid container spacing={24}>
				<Grid item xs={12} sm={12} md={4} lg={4}>
					<Paper className={classes.dbPaper}>
						<RecentlyBorrowed  itemList={props.itemList}/>
					</Paper>
				</Grid>
				<Grid item xs={12} sm={12} md={4} lg={4}>
					<Paper className={classes.dbPaper}>
						<RecentlyReturned itemList={props.itemList} />
					</Paper>
				</Grid>
				<Grid item xs={12} sm={12} md={4} lg={4}>
					<Paper className={classes.dbPaper}>
						<ReservationRequests itemList={props.itemList}/>
					</Paper>
				</Grid>
			</Grid>
		</div>
	)
})
