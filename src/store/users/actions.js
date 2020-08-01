export const SET_USER_ACTIVE = 'SET_USER_ACTIVE'
export const SET_USER_INACTIVE = 'SET_USER_INACTIVE'
export const SET_FILTER_VALUE = 'SET_FILTER_VALUE'

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
