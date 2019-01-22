import React, { Component, Fragment } from 'react'
import { TextField, Button, Card, CardContent } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { Consumer } from '../Context'

const styles = theme => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	textField: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit,
		width: 200,
	},
	card: {
		width: '40%',
		minWidth: 275,
		display: 'flex',
		justifyContent: 'center'
	}
})

class Form extends Component {
	handleChange = e => {
		const { name, value } = e.target

		this.setState({
			[name]: value
		})
	}

	render() {
		const { classes } = this.props
		const date = new Date()
		const today = date.getDate()
		const month = date.getMonth() + 1
		const year = date.getFullYear()
		const fullDate = `${month} ${today}, ${year}`
		const toReturn = this.props.toReturn || null
		const forBorrowing = this.props.forBorrowing || null
		const forReservation = this.props.forReservation

		return (
			<Consumer>
				{({auth, handleBorrowing, handleReturning, handleReservation, purpose, attachments}) => 
					<div style={{
						display:'flex',
						alignItems: 'center',
						justifyContent: 'center'
					}}>
						<Card className={classes.card}>
							<CardContent >
								<form
									style={{
										display: 'flex',
										flexDirection: 'column'
									}}
								>
									<TextField
										id="outlined-text-input"
										label="Name of Borrower"
										className={classes.textField}
										type="text"
										name="borrowersName"
										autoComplete="borrowersName"
										margin="normal"
										variant="outlined"
										fullWidth
										disabled={toReturn}
									/>
									<TextField
										variant='outlined'
										id="date"
										label="Date of Use"
										type="date"
										name="dateOfUse"
										defaultValue={fullDate}
										className={classes.textField}
										InputLabelProps={{
											shrink: true,
										}}
										fullWidth
										disabled={toReturn}
									/>
									<TextField
										id="filled-multiline-flexible"
										label="Purpose"
										multiline
										rowsMax="3"
										name="purpose"
										value={purpose}
										onChange={this.handleChange}
										className={classes.textField}
										margin="normal"
										helperText="Why are you borrowing this equipment?"
										variant="outlined"
										fullWidth
										disabled={toReturn}
									/>
									<TextField
										id="filled-multiline-flexible"
										label="Attachments"
										name="attachments"
										multiline
										rowsMax="3"
										value={attachments}
										onChange={this.handleChange}
										className={classes.textField}
										margin="normal"
										helperText="What are the other things needed to use this equipment?"
										variant="outlined"
										fullWidth
										disabled={toReturn}
									/>
									{(forBorrowing || toReturn) && 
										<Fragment>
											<TextField
											variant='outlined'
											id="date"
											label="Date of Release"
											type="date"
											name="releasedDate"
											defaultValue={fullDate}
											className={classes.textField}
											InputLabelProps={{
												shrink: true,
											}}
											fullWidth
											disabled={toReturn}
										/>
										<TextField
											id="outlined-text-input"
											label="Issued By"
											className={classes.textField}
											type="text"
											name="issuerName"
											autoComplete="BorrowersName"
											margin="normal"
											variant="outlined"
											fullWidth
											disabled={toReturn}
										/>
										</Fragment>
									}
									{toReturn && 
										<Fragment>
											<TextField
												variant='outlined'
												id="date"
												label="Date of Return"
												type="date"
												name="returnedDate"
												defaultValue={fullDate}
												className={classes.textField}
												InputLabelProps={{
													shrink: true,
												}}
												fullWidth
											/>
											<TextField
												id="outlined-text-input"
												label="Received By"
												className={classes.textField}
												type="text"
												name="receiverName"
												autoComplete="receiverName"
												margin="normal"
												variant="outlined"
												fullWidth
											/>
										</Fragment>
									}
									<Button
										variant="raised"
										color="primary"
										fullWidth
										onClick={forBorrowing ? handleBorrowing : toReturn ? handleReturning : handleReservation}
									>
										{forReservation ? 'Make Request' : 'Submit'}
									</Button>
								</form>
							</CardContent>
						</Card>
					</div>
				}
			</Consumer>
		)
	}
}

export default withStyles(styles)(Form)
