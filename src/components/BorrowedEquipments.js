import React from 'react'
import Login from './Login'

const BorrowedEquipments = props => {
	return (
		<div>
			{props.auth ? <h1>Borrowed Equipments here</h1> : <Login handleSubmit={props.handleSubmit} />}
		</div>
	)
}

export default BorrowedEquipments
