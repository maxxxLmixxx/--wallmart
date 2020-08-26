export const SET_USER_ACTIVE = 'SET_USER_ACTIVE'
export const SET_USER_INACTIVE = 'SET_USER_INACTIVE'
export const SET_FILTER_VALUE = 'SET_FILTER_VALUE'
export const CLEAR_ACTIVE_USERS = 'CLEAR_ACTIVE_USERS'
export const SORT_INACTIVE_USERS_AZ = 'SORT_INACTIVE_USERS_AZ'

export const setUserActive = (userId) => ({
  type: SET_USER_ACTIVE,
  payload: {userId},
})
export const setUserInactive = (userId) => ({
  type: SET_USER_INACTIVE,
  payload: {userId},
})

export const setFilterValue = (value) => ({
  type: SET_FILTER_VALUE,
  payload: {value},
})

export const clearActiveUsers = () => ({
  type: CLEAR_ACTIVE_USERS
})

export const sortInactiveUsersAz = () => ({
  type: SORT_INACTIVE_USERS_AZ
})