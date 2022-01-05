import userApi from "./network/user"
import loadUsers from "./context/user/User.Actions"

class UserService {
  getUser = (dispatch) => {
    userApi.get()
    .then(data => {
      dispatch(loadUsers(data.body))
    })
    .catch(error => console.error(error))
    return 0
  }
};

export default new UserService()
