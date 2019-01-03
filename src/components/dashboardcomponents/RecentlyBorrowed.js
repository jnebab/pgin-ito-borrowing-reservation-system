import React from 'react'
import { Typography } from '@material-ui/core'

import DashboardList from './DashboardList'

const RecentlyBorrowed = props => {
	return (
		<div>
			<Typography>Recently Borrowed</Typography>
			<DashboardList itemList={props.itemList}/>
		</div>
	);
};

export default RecentlyBorrowed