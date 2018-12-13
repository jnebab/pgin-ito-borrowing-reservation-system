import React from 'react'
import Login from './Login'

const ReservationForm = props => {
	return (
		<div>
			{props.auth ? <h1>This will provide the Reservation Form</h1> : <Login handleSubmit={props.handleSubmit} />}
		</div>
	)
}

export default ReservationForm
