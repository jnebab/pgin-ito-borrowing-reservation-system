import React from 'react'
import { Typography, Button } from '@material-ui/core'

import DashboardList from './DashboardList'

export default props => {
	return (
		<div>
			<Typography variant='subheading'>Reservation Requests</Typography>
			<DashboardList isReserve />
			<Button variant='outlined'>Accept</Button>
			<Button variant='outlined'>Decline</Button>
		</div>
	)
}
