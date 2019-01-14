import React from 'react'
import SignIn from './SignIn'

export default props => {
	return (
		<React.Fragment>
			{props.auth ? <h1>This presents the Available Equipments</h1> : <SignIn handleSubmit={props.handleSubmit} />}
		</React.Fragment>
	)
}
