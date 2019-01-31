import React, { Component, Fragment } from 'react'
import { 
	TextField,
	Button, 
	Card, 
	CardContent, 
	Select, 
	MenuItem, 
	FormControl, 
	ListItemText,
	OutlinedInput,
	InputLabel
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { withContext } from '../Context'

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
	formControl: {
		margin: theme.spacing.unit,
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

	mainFormSubmit = e => {
		const { handleBorrowing, handleReturning, handleReservation } = this.props
		e.preventDefault()
		const data = new FormData(e.target)
		if(this.props.forBorrowing) {
			handleBorrowing(data)
		}
		else if(this.props.toReturn) {
			handleReturning(data)
		}
		else if(this.props.forReservation) {
			handleReservation(data)
		}
	}

	render() {
		const { classes, borrowersName, borrowersDept, selectedItem, dateOfUse, releasedDate, returnedDate, issuerName, receiverName, purpose, attachments, itemList, labelWidth, handleChange} = this.props
		const toReturn = this.props.toReturn || null
		const forBorrowing = this.props.forBorrowing || null
		const forReservation = this.props.forReservation

		return (
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
								onSubmit={this.mainFormSubmit}
							>
								<FormControl variant="outlined" className={classes.formControl}>
									<InputLabel
										ref={ref => {
											this.InputLabelRef = ref;
										}}
										htmlFor="select-equipment"
									>
										Select Equipment
									</InputLabel>
									<Select
										value={selectedItem}
										onChange={handleChange}
										name="selectedItem"
										input={
										<OutlinedInput
											labelWidth={labelWidth}
											name="selectedItem"
											id="select-equipment"
										/>
										}
									>
										<MenuItem value="Select Equipment">
											Select Equipment
										</MenuItem>
										{itemList.map((item, index) => 
										<MenuItem key={index} value={item.unit}>
											<ListItemText primary={item.unit} />
										</MenuItem>)}
									</Select>
								</FormControl>
								<TextField
									id="outlined-text-input"
									label="Name of Borrower"
									className={classes.textField}
									type="text"
									value={borrowersName}
									name="borrowersName"
									autoComplete="borrowersName"
									margin="normal"
									variant="outlined"
									fullWidth
									disabled={toReturn}
									onChange={handleChange}
								/>
								<TextField
									id="outlined-text-input"
									label="Department of Borrower"
									className={classes.textField}
									type="text"
									value={borrowersDept}
									name="borrowersDept"
									autoComplete="borrowersDept"
									margin="normal"
									variant="outlined"
									fullWidth
									disabled={toReturn}
									onChange={handleChange}
								/>
								<TextField
									variant='outlined'
									id="date"
									label="Date of Use"
									type="date"
									value={dateOfUse}
									name="dateOfUse"
									className={classes.textField}
									InputLabelProps={{
										shrink: true,
									}}
									fullWidth
									disabled={toReturn}
									onChange={handleChange}
								/>
								<TextField
									id="filled-multiline-flexible"
									label="Purpose"
									multiline
									rowsMax="3"
									name="purpose"
									value={purpose}
									onChange={handleChange}
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
									onChange={handleChange}
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
										value={releasedDate}
										className={classes.textField}
										InputLabelProps={{
											shrink: true,
										}}
										fullWidth
										disabled={toReturn}
										onChange={handleChange}
									/>
									<TextField
										id="outlined-text-input"
										label="Issued By"
										className={classes.textField}
										type="text"
										name="issuerName"
										value={issuerName}
										autoComplete="issuerName"
										margin="normal"
										variant="outlined"
										fullWidth
										disabled={toReturn}
										onChange={handleChange}
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
											value={returnedDate}
											className={classes.textField}
											InputLabelProps={{
												shrink: true,
											}}
											fullWidth
											onChange={handleChange}
										/>
										<TextField
											id="outlined-text-input"
											label="Received By"
											className={classes.textField}
											type="text"
											name="receiverName"
											value={receiverName}
											autoComplete="receiverName"
											margin="normal"
											variant="outlined"
											fullWidth
											onChange={handleChange}
										/>
									</Fragment>
								}
								<Button
									type="submit"
									variant="contained"
									color="primary"
									fullWidth
								>
									{forReservation ? 'Make Request' : 'Submit'}
								</Button>
							</form>
						</CardContent>
					</Card>
				</div>
		)
	}
}

export default withContext(withStyles(styles)(Form))
