import React from "react"
import { CardWrapper, CardContent } from "./styled"

const CardComponent = ({user}) => {
  return (
   <CardWrapper>
      <CardContent>{user.name} - {user.bags}</CardContent>
   </CardWrapper>
  )
}

export default CardComponent