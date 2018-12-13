import React from 'react'
import Login from './Login'

const HistoryLog = props => {
	return (
		<div>
			{props.auth ? <h1>This will provide the History Logs</h1> : <Login handleSubmit={props.handleSubmit} />}
		</div>
	)
}

export default HistoryLog
