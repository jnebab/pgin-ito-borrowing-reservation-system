import React, { Fragment } from 'react'
import SignIn from './SignIn'
import { Consumer } from '../Context'

export default props => {
	return (
		<Consumer>
			{({auth}) => 
				<Fragment> 
					{auth ? <h1>This will provide the History Logs</h1> : <SignIn />} 
				</Fragment>
			}
		</Consumer>
		
	)
}
