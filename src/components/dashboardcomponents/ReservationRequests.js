import React from 'react'
import { Typography } from '@material-ui/core'

import DashboardList from './DashboardList'

const ReservationRequests = props => {
	return (
		<div>
			<Typography>Reservation Requests</Typography>
			<DashboardList itemList={props.itemList}/>
		</div>
	);
};

export default ReservationRequests