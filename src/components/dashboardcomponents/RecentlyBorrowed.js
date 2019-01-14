import React from 'react'
import { Typography } from '@material-ui/core'

import DashboardList from './DashboardList'

export default props => {
	return (
		<div>
			<Typography>Recently Borrowed</Typography>
			<DashboardList itemList={props.itemList}/>
		</div>
	)
}
