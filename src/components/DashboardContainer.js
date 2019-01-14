import React from 'react'
import Dashboard from './Dashboard'

export default props => {
	return (
		<div>
			<Dashboard itemList={props.itemList}/>
		</div>
	)
}
