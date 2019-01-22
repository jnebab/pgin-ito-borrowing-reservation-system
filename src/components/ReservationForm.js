import React, { Fragment } from 'react'
import SignIn from './SignIn'
import Form from './Form'
import { Consumer } from '../Context'

export default props => {
	return (
		<Consumer>
			{({auth}) => 
				<Fragment>
					{auth ? <Form forReservation/> : <SignIn />}
				</Fragment>
			}
		</Consumer>
	)
}
