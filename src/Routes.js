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
import BorrowedEquipmentsContainer from './components/BorrowedEquipmentsContainer'
import AddEquipmentContainer from './components/AddEquipmentContainer'
import BorrowingContainer from './components/BorrowingContainer'
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
		main: () => <DashboardContainer />
	},
	{
		name: 'Borrowed Equipments',
		path: '/borrowed-equipments',
		icon: <ListItemIcon><AccessAlarmIcon /></ListItemIcon>,
		main: () => <BorrowedEquipmentsContainer />
	},
	{
		name: 'Available Equipments',
		path: '/available-equipments',
		icon: <ListItemIcon><CheckCircle /></ListItemIcon>,
		main: () => <AvailableEquipments />
	},
	{
		name: 'Add Equipment Form',
		path: '/add-equipment-form',
		icon: <ListItemIcon><Assignment /></ListItemIcon>,
		main: () => <AddEquipmentContainer />
	},
	{
		name: 'Borrow Form',
		path: '/borrow-form',
		icon: <ListItemIcon><Assignment /></ListItemIcon>,
		main: () => <BorrowingContainer />
	},
	{
		name: 'Return Form',
		path: '/return-form',
		icon: <ListItemIcon><CompareArrows /></ListItemIcon>,
		main: () => <ReturnForm />
	},
	{
		name: 'Reservation Form',
		path: '/reservation-form',
		icon: <ListItemIcon><AssignmentTurnedIn /></ListItemIcon>,
		main: () => <ReservationForm />
	},
	{
		name: 'Calendar',
		path: '/calendar',
		icon: <ListItemIcon><CalendarToday /></ListItemIcon>,
		main: () => <Calendar />
	},
	{
		name: 'History Log',
		path: '/history-log',
		icon: <ListItemIcon><History /></ListItemIcon>,
		main: () => <HistoryLog />
	}
]

export default routes
