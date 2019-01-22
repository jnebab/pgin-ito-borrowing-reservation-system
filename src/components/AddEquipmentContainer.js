import React from 'react'
import SignIn from './SignIn'
import AddEquipment from './AddEquipment'
import { Consumer } from '../Context'

export default props => {
	return (
		<Consumer>
			{({ auth }) => auth ? <AddEquipment /> : <SignIn />}
		</Consumer>
	)
}
