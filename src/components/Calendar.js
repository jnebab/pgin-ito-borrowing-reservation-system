import React from 'react'
import Login from './Login'

const Calendar = props => {
	return (
		<div>
			{props.auth ? <h1>This will display the Calendar</h1> : <Login handleSubmit={props.handleSubmit} />}
		</div>
	)
}

export default Calendar;