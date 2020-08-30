// import { SET_USER_ACTIVE } from "./actions";
import {
  SET_USER_ACTIVE,
  SET_USER_INACTIVE,
  SET_FILTER_VALUE,
  CLEAR_ACTIVE_USERS,
  SORT_INACTIVE_USERS_AZ,
  BAN_ACTIVE_USERS,
  FILTER_BY_ROOM
} from './actions'

const defaultState = {
  allUsers: {
    11: { name: 'Mike1', id: '11', icon: '', banned: false, muted: false },
    12: { name: 'Mike2', id: '12', icon: '', banned: false, muted: false },
    13: { name: 'Mike3', id: '13', icon: '', banned: false, muted: false },
    14: { name: 'Mike4', id: '14', icon: '', banned: false, muted: false },
    15: { name: 'Mike5', id: '15', icon: '', banned: false, muted: false },
    16: { name: 'Mike6', id: '16', icon: '', banned: false, muted: false },
    17: { name: 'Mike7', id: '17', icon: '', banned: false, muted: false },
    18: { name: 'Mike8', id: '18', icon: '', banned: false, muted: false },
    19: { name: 'Mike9', id: '19', icon: '', banned: false, muted: false },
    20: { name: 'Mike10', id: '20', icon: '', banned: false, muted: false },
    21: { name: 'Mike11', id: '21', icon: '', banned: false, muted: false },
    22: { name: 'Mike12', id: '22', icon: '', banned: false, muted: false },
    23: { name: 'Mike13', id: '23', icon: '', banned: false, muted: false },
    24: { name: 'Mike14', id: '24', icon: '', banned: false, muted: false },
    25: { name: 'Mike15', id: '25', icon: '', banned: false, muted: false },
    26: { name: 'Mike16', id: '26', icon: '', banned: false, muted: false },
    27: { name: 'Mike17', id: '27', icon: '', banned: false, muted: false },
    28: { name: 'Mike18', id: '28', icon: '', banned: false, muted: false },
    29: { name: 'Mike19', id: '29', icon: '', banned: false, muted: false },
    30: { name: 'Mike20', id: '30', icon: '', banned: false, muted: false },
    31: { name: 'Mike21', id: '31', icon: '', banned: false, muted: false },
    32: { name: 'Mike22', id: '32', icon: '', banned: false, muted: false },
    33: { name: 'Mike23', id: '33', icon: '', banned: false, muted: false },
    34: { name: 'Mike24', id: '34', icon: '', banned: false, muted: false },
    35: { name: 'Mike25', id: '35', icon: '', banned: false, muted: false },
    36: { name: 'Mike26', id: '36', icon: '', banned: false, muted: false },
    37: { name: 'Mike27', id: '37', icon: '', banned: false, muted: false },
    38: { name: 'Mike28', id: '38', icon: '', banned: false, muted: false },
    39: { name: 'Mike29', id: '39', icon: '', banned: false, muted: false },
    40: { name: 'Mike30', id: '40', icon: '', banned: false, muted: false },
    41: { name: 'Mike31', id: '41', icon: '', banned: false, muted: false },
    42: { name: 'Mike32', id: '42', icon: '', banned: false, muted: false },
    43: { name: 'Mike33', id: '43', icon: '', banned: false, muted: false },
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
  rooms: {
    'room1': [11, 12, 13, 14, 15, 16, 17, 18],
    'room2': [27, 28, 29, 30, 31, 32, 33, 34, 35],
    'room3': [11, 15],
    'all': [11, 12],
  }
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
    case CLEAR_ACTIVE_USERS: {
      const { inactiveUsersIds, activeUsersIds } = state
      inactiveUsersIds.push(...activeUsersIds)
      return { ...state, inactiveUsersIds, activeUsersIds: [] }
    }
    case SORT_INACTIVE_USERS_AZ: {
      const { allUsers, inactiveUsersIds } = state
      const inactiveUsers = inactiveUsersIds.map((id) => ({
        id,
        name: allUsers[id].name,
      }))
      inactiveUsers.sort((userA, userB) => {
        return userA['name'].localeCompare(userB['name'])
      })
      return {
        ...state,
        inactiveUsersIds: inactiveUsers.map((el) => el['id']),
      }
    }
    case BAN_ACTIVE_USERS: {
      const { allUsers, activeUsersIds } = state
      activeUsersIds.forEach((id) => {
        allUsers[id].banned = true
      })
      return { ...state, allUsers }
    }
    case FILTER_BY_ROOM: {
      let { inactiveUsersIds, rooms } = state;
      inactiveUsersIds = rooms[action.payload]
      
      return { ...state, inactiveUsersIds, rooms }
    }
    default:
      return { ...state }
  }
}
