import React from 'react'
import Login from './Login'

const AvailableEquipments = props => {
	return (
		<div>
			{props.auth ? <h1>This presents the Available Equipments</h1> : <Login handleSubmit={props.handleSubmit} />}
		</div>
	)
}

export default AvailableEquipments
