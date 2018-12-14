import React from 'react'
import { Paper, Grid, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';

import RecentlyBorrowed from './dashboardcomponents/RecentlyBorrowed'
import RecentlyReturned from './dashboardcomponents/RecentlyReturned'
import ReservationRequests from './dashboardcomponents/ReservationRequests'
import CalendarSchedule from './dashboardcomponents/CalendarSchedule'

import styles from './style/styles'

const Dashboard = props => {
	const { classes } = props

	return (
		<div className={classes.dbRoot}>
			<Grid container spacing={24}>
				<Grid item xs={12} sm={12} md={4} lg={4}>
					<Paper className={classes.dbPaper}>
						<RecentlyBorrowed />
					</Paper>
				</Grid>
				<Grid item xs={12} sm={12} md={4} lg={4}>
					<Paper className={classes.dbPaper}>
						<RecentlyReturned />
					</Paper>
				</Grid>
				<Grid item xs={12} sm={12} md={4} lg={4}>
					<Paper className={classes.dbPaper}>
						<ReservationRequests />
					</Paper>
				</Grid>
			</Grid>
		</div>
	)
}

export default withStyles(styles)(Dashboard)