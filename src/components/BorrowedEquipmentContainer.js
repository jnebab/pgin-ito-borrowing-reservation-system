import React, { Fragment } from 'react'
import SignIn from './SignIn'
import BorrowedEquipments from './BorrowedEquipments'
import { Consumer } from '../Context'

export default props => {
	return (
		<Consumer>
			{({auth}) => 
				<Fragment>
					{auth ? <BorrowedEquipments /> : <SignIn />}
				</Fragment>
			}
		</Consumer>
	)
}
