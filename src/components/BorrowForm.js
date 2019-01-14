import React from 'react'
import SignIn from './SignIn'

export default props => {
	return (
		<div>
			{props.auth ? <h1>This will provide the Borrow Form</h1> : <SignIn handleSubmit={props.handleSubmit} />}
		</div>
	)
}
