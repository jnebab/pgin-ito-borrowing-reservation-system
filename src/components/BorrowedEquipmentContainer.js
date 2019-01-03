import React from 'react'
import Login from './Login'
import BorrowedEquipments from './BorrowedEquipments'

const BorrowedEquipmentsContainer = props => {
	return (
		<div>
			{props.auth ? <BorrowedEquipments /> : <Login handleSubmit={props.handleSubmit} />}
		</div>
	)
}

export default BorrowedEquipmentsContainer
