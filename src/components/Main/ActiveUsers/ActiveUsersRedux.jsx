import React from 'react'

import { connect } from 'react-redux'
import { setUserActive } from 'store/users/actions'

import ActiveUsers from './ActiveUsers'

function ActiveUsersContainer(props) {
  const { users, setUserActive } = props
  return <ActiveUsers users={users} setUserActive={setUserActive} />
}

const mapStateToProps = (state) => {
  const { allUsers, activeUsersIds } = state.users
  return {
    users: activeUsersIds.map((id) => allUsers[id]),
  }
}

const mapDispatchToProps = {setUserActive}

export default connect(mapStateToProps, mapDispatchToProps)(ActiveUsersContainer)
