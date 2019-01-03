import React from 'react'
import Dashboard from './Dashboard'

const DashboardContainer = props => {
	return (
		<div>
			<Dashboard itemList={props.itemList}/>
		</div>
	)
}

export default DashboardContainer