import React, { Fragment } from 'react'
import SignIn from './SignIn'
import { Consumer } from '../Context'
import { Card, CardContent, List, ListItem, ListItemText } from '@material-ui/core';

export default props => {
	return (
		<Consumer>
			{({auth, historyLogs}) => 
				<Fragment> 
					{auth ? 
						<Card>
							<CardContent>
								<List>
								{historyLogs.map((log, index) => 
									<ListItem key={index}>
										<ListItemText primary={log} />
									</ListItem>)}
								</List>
							</CardContent>
						</Card> 
						: <SignIn />
					} 
				</Fragment>
			}
		</Consumer>
		
	)
}
