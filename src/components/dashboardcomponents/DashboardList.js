import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { List, ListItem, ListItemText, Typography } from '@material-ui/core'

const styles = theme => ({
	root: {
		width: '100%',
		maxWidth: 360,
		backgroundColor: theme.palette.background.paper,
	},
		inline: {
		display: 'inline',
	}
})

export default withStyles(styles)(props => {
	const { classes, isBorrow, isReturn, isReserve } = props

	return (
		<List>
			<ListItem >
				<ListItemText 
					primary="Equipment Name"
					secondary={
						<React.Fragment>
							<Typography component="span" className={classes.inline} color="textPrimary">
								{isReserve ? 'Requested' : 'Borrowed'} By: Juan DeLa Cruz
							</Typography><br />
							<Typography component="span" className={classes.inline} color="textPrimary">
								Borrowers Office: Tourism Office
							</Typography><br />
							{isReserve && <Typography component="span" className={classes.inline} color="textPrimary">
								Equipment Status: Available
							</Typography>}
						</React.Fragment>
					}
				/>
			</ListItem>
		</List>
	)
})
