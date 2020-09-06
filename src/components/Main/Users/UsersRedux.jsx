import React, {useState} from 'react'

import { connect } from 'react-redux'
import { setUserInactive, fetchUsersThunk } from 'store/users/actions'

import Users from './Users'

function UsersRedux(props) {
  const { users, activeUsersIds, filterValue, setUserInactive, fetchUsersThunk, ...rest } = props
  
  const [isLoad, setLoad] = useState(true);
  if (isLoad) {
    fetchUsersThunk();
    setLoad(false);
  }

  return <Users users={users} 
    activeUsersIds={activeUsersIds}
    filterValue={filterValue}
    setUserInactive={setUserInactive}
    {...rest} 
  />
}

const mapStateToProps = (state) => {
  const { allUsers, activeUsersIds, inactiveUsersIds, filterValue } = state.users
  return {
    users: inactiveUsersIds.map((id) => allUsers[id]),
    activeUsersIds,
    filterValue,
  }
}

const mapDispatchToProps = { setUserInactive, fetchUsersThunk }

export default connect(mapStateToProps, mapDispatchToProps)(UsersRedux)
