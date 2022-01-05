import * as USER from './User.Constants'

function loadUsers(data) {
  const user = data

  return {
    type: USER.LOAD_USER,
    payload: { data },
  }
}


export { loadUsers }
