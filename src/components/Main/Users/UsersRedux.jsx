import React from 'react'

import { connect } from 'react-redux'
import { setUserInactive } from 'store/users/actions'

import Users from './Users'

function UsersRedux(props) {
  const { users, filterValue, setUserInactive } = props
  return <Users users={users} filterValue={filterValue} setUserInactive={setUserInactive} />
}

const mapStateToProps = (state) => {
  const { allUsers, inactiveUsersIds, filterValue } = state.users
  return {
    users: inactiveUsersIds.map((id) => allUsers[id]),
    filterValue,
  }
}

const mapDispatchToProps = { setUserInactive }

export default connect(mapStateToProps, mapDispatchToProps)(UsersRedux)
