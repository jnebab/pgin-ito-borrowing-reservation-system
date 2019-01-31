import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { TextField, Button, Card, CardContent } from '@material-ui/core'
import { withContext } from '../Context'

const styles = theme => ({
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

class AddEquipment extends Component {

	addFormSubmit = e => {
		const { handleAddEquipment } = this.props
		e.preventDefault()
		const data = new FormData(e.target)
		handleAddEquipment(data)
	}

	render() {
		const { classes, equipmentBrand, equipmentModel, equipmentSerial, equipmentType, handleChange } = this.props

	return (
			<div
				style={{
					display:'flex',
					alignItems: 'center',
					justifyContent: 'center'
				}}
			>
			<Card className={classes.card}>
				<CardContent >
						<form 
							style={{
								display: 'flex',
								flexDirection: 'column'
							}}
							onSubmit={this.addFormSubmit}
						>
							<TextField
								id="outlined-text-input"
								label="Equipment Brand"
								className={classes.textField}
								type="text"
								value={equipmentBrand}
								name="equipmentBrand"
								autoComplete="equipmentBrand"
								margin="normal"
								variant="outlined"
								fullWidth
								onChange={handleChange}
							/>
							<TextField
								id="outlined-text-input"
								label="Equipment Model"
								className={classes.textField}
								type="text"
								value={equipmentModel}
								name="equipmentModel"
								autoComplete="equipmentModel"
								margin="normal"
								variant="outlined"
								fullWidth
								onChange={handleChange}
							/>
							<TextField
								id="outlined-text-input"
								label="Equipment Serial Number"
								className={classes.textField}
								type="text"
								value={equipmentSerial}
								name="equipmentSerial"
								autoComplete="equipmentSerial"
								margin="normal"
								variant="outlined"
								fullWidth
								onChange={handleChange}
							/>
							<TextField
								id="outlined-text-input"
								label="Equipment Type"
								className={classes.textField}
								type="text"
								value={equipmentType}
								name="equipmentType"
								autoComplete="equipmentType"
								margin="normal"
								variant="outlined"
								fullWidth
								onChange={handleChange}
							/>
							<Button
								type="submit"
								variant="contained"
								color="primary"
								fullWidth
							>
								Add Equipment
							</Button>
						</form>
					</CardContent>
				</Card>
			</div>
		)
	}
}

export default withContext(withStyles(styles)(AddEquipment))
