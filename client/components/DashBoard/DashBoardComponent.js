import React, { useContext, useState, useEffect} from "react"
import { DashboardWrapper } from "./styled"
import CardComponent  from "../Card/CardComponent"
import * as User from "../../context/user/User.Context"
import userApi from "../../network/user"
import {loadUsers} from "../../context/user/User.Actions"

const DashboardComponent = ({}) => {
  const userContext = useContext(User.UserContext)
  const users = userContext.state

  useEffect(() => {
    userApi.get()
    .then(data => {
      userContext.dispatch(loadUsers(data.data))
    })
    .catch(error => console.log(error))
  }, [])

  return (
   <DashboardWrapper>
    {users.loaded && users.data.map(user => (<CardComponent user={user}/>))}
   </DashboardWrapper>
  )
}

export default DashboardComponent