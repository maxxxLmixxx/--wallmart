// import { SET_USER_ACTIVE } from "./actions";
import { SET_USER_ACTIVE, SET_USER_INACTIVE, SET_FILTER_VALUE } from './actions'

const defaultState = {
  allUsers: {
    '11': { name: 'Mike1', id: '11', icon: '' },
    '12': { name: 'Mike2', id: '12', icon: '' },
    '13': { name: 'Mike3', id: '13', icon: '' },
    '14': { name: 'Mike4', id: '14', icon: '' },
    '15': { name: 'Mike5', id: '15', icon: '' },
    '16': { name: 'Mike6', id: '16', icon: '' },
    '17': { name: 'Mike7', id: '17', icon: '' },
    '18': { name: 'Mike8', id: '18', icon: '' },
    '19': { name: 'Mike9', id: '19', icon: '' },
    '20': { name: 'Mike10', id: '20', icon: '' },
    '21': { name: 'Mike11', id: '21', icon: '' },
    '22': { name: 'Mike12', id: '22', icon: '' },
    '23': { name: 'Mike13', id: '23', icon: '' },
    '24': { name: 'Mike14', id: '24', icon: '' },
    '25': { name: 'Mike15', id: '25', icon: '' },
    '26': { name: 'Mike16', id: '26', icon: '' },
    '27': { name: 'Mike17', id: '27', icon: '' },
    '28': { name: 'Mike18', id: '28', icon: '' },
    '29': { name: 'Mike19', id: '29', icon: '' },
    '30': { name: 'Mike20', id: '30', icon: '' },
    '31': { name: 'Mike21', id: '31', icon: '' },
    '32': { name: 'Mike22', id: '32', icon: '' },
    '33': { name: 'Mike23', id: '33', icon: '' },
    '34': { name: 'Mike24', id: '34', icon: '' },
    '35': { name: 'Mike25', id: '35', icon: '' },
    '36': { name: 'Mike26', id: '36', icon: '' },
    '37': { name: 'Mike27', id: '37', icon: '' },
    '38': { name: 'Mike28', id: '38', icon: '' },
    '39': { name: 'Mike29', id: '39', icon: '' },
    '40': { name: 'Mike30', id: '40', icon: '' },
    '41': { name: 'Mike31', id: '41', icon: '' },
    '42': { name: 'Mike32', id: '42', icon: '' },
    '43': { name: 'Mike33', id: '43', icon: '' },
  },
  filterValue: '',
  activeUsersIds: [],
  inactiveUsersIds: [
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
    '24',
    '25',
    '26',
    '27',
    '28',
    '29',
    '30',
    '31',
    '32',
    '33',
    '34',
    '35',
    '36',
    '37',
    '38',
    '39',
    '40',
    '41',
    '42',
    '43',
  ],
}

export const usersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_USER_ACTIVE: {
      const { inactiveUsersIds, activeUsersIds } = state
      const { userId } = action.payload
      if (activeUsersIds.includes(userId)) return { ...state }

      const index = inactiveUsersIds.indexOf(userId)
      const user = inactiveUsersIds.splice(index, 1)

      activeUsersIds.push(...user)

      return { ...state, inactiveUsersIds, activeUsersIds }
    }
    case SET_USER_INACTIVE: {
      const { inactiveUsersIds, activeUsersIds } = state
      const { userId } = action.payload
      if (inactiveUsersIds.includes(userId)) return { ...state }

      const index = activeUsersIds.indexOf(userId)
      const user = activeUsersIds.splice(index, 1)
      inactiveUsersIds.push(...user)

      return { ...state, inactiveUsersIds, activeUsersIds }
    }
    case SET_FILTER_VALUE: {
      const { value } = action.payload
      return { ...state, filterValue: value }
    }
    default:
      return { ...state }
  }
}