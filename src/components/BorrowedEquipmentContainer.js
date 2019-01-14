import React from 'react'
import SignIn from './SignIn'
import BorrowedEquipments from './BorrowedEquipments'

export default props => {
	return (
		<div>
			{props.auth ? <BorrowedEquipments /> : <SignIn handleSubmit={props.handleSubmit} />}
		</div>
	)
}
