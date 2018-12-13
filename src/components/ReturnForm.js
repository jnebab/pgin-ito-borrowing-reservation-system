import React from 'react'
import Login from './Login'

const ReturnForm = props => {
	return (
		<div>
			{props.auth ? <h1>This will provide the Return Form</h1> : <Login handleSubmit={props.handleSubmit} />}
		</div>
	)
}

export default ReturnForm
