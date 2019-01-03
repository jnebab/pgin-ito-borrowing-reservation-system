import React from 'react'
import { ListItemIcon } from '@material-ui/core'
import DashboardIcon from '@material-ui/icons/Dashboard'
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm'
import CheckCircle from '@material-ui/icons/CheckCircle'
import CompareArrows from '@material-ui/icons/CompareArrows'
import Assignment from '@material-ui/icons/Assignment'
import AssignmentTurnedIn from '@material-ui/icons/AssignmentTurnedIn'
import CalendarToday from '@material-ui/icons/CalendarToday'
import History from '@material-ui/icons/History'

import DashboardContainer from './components/DashboardContainer'
import AvailableEquipments from './components/AvailableEquipments'
import BorrowedEquipmentContainer from './components/BorrowedEquipmentContainer'
import BorrowForm from './components/BorrowForm'
import ReturnForm from './components/ReturnForm'
import ReservationForm from './components/ReservationForm'
import Calendar from './components/Calendar'
import HistoryLog from './components/HistoryLog'

const routes = [
	{
		name: 'Dashboard',
		path: '/',
		exact: true,
		icon: <ListItemIcon><DashboardIcon /></ListItemIcon>,
		main: () => <DashboardContainer auth={this.state.auth} handleSubmit={this.handleSubmit} itemList={this.state.itemList} />
	},
	{
		name: 'Borrowed Equipments',
		path: '/borrowed-equipments',
		icon: <ListItemIcon><AccessAlarmIcon /></ListItemIcon>,
		main: () => <BorrowedEquipmentContainer auth={this.state.auth} handleSubmit={this.handleSubmit}/>
	},
	{
		name: 'Available Equipments',
		path: '/available-equipments',
		icon: <ListItemIcon><CheckCircle /></ListItemIcon>,
		main: () => <AvailableEquipments auth={this.state.auth} handleSubmit={this.handleSubmit}/>
	},
	{
		name: 'Borrow Form',
		path: '/borrow-form',
		icon: <ListItemIcon><Assignment /></ListItemIcon>,
		main: () => <BorrowForm auth={this.state.auth} handleSubmit={this.handleSubmit}/>
	},
	{
		name: 'Return Form',
		path: '/return-form',
		icon: <ListItemIcon><CompareArrows /></ListItemIcon>,
		main: () => <ReturnForm auth={this.state.auth} handleSubmit={this.handleSubmit}/>
	},
	{
		name: 'Reservation Form',
		path: '/reservation-form',
		icon: <ListItemIcon><AssignmentTurnedIn /></ListItemIcon>,
		main: () => <ReservationForm auth={this.state.auth} handleSubmit={this.handleSubmit}/>
	},
	{
		name: 'Calendar',
		path: '/calendar',
		icon: <ListItemIcon><CalendarToday /></ListItemIcon>,
		main: () => <Calendar auth={this.state.auth} handleSubmit={this.handleSubmit}/>
	},
	{
		name: 'History Log',
		path: '/history-log',
		icon: <ListItemIcon><History /></ListItemIcon>,
		main: () => <HistoryLog auth={this.state.auth} handleSubmit={this.handleSubmit}/>
	}
]

export default routes