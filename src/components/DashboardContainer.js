import React from 'react'
import Login from './Login'
import Dashboard from './Dashboard'

const DashboardContainer = props => {
	return (
		<div>
			{props.auth ? <Dashboard /> : <Login handleSubmit={props.handleSubmit} />} 
		</div>
	);
};

export default DashboardContainer