import React, { Fragment } from 'react'
import SignIn from './SignIn'
import { Consumer } from '../Context'

export default props => {
	return (
		<Consumer>
			{({auth}) => 
				<Fragment>
					{auth ? <h1>This will provide the Reservation Form</h1> : <SignIn />}
				</Fragment>
			}
		</Consumer>
	)
}
