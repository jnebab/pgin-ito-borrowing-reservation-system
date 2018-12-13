import React from 'react'
import Login from './Login'

const BorrowForm = props => {
	return (
		<div>
			{props.auth ? <h1>This will provide the Borrow Form</h1> : <Login handleSubmit={props.handleSubmit} />}
		</div>
	)
}

export default BorrowForm
