import React from 'react'
import { Typography } from '@material-ui/core'

import DashboardList from './DashboardList'

export default props => {
	return (
		<div>
			<Typography variant='subheading'>Recently Returned</Typography>
			<DashboardList isReturn/>
		</div>
	)
}
