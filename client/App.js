import * as React from "react";
import axios from "axios";
import  HeaderComponent  from "./components/Header/HeaderComponent"
import  DashboardComponent  from "./components/Dashboard/DashboardComponent"
import { UserProvider } from "./context/user/User.Context"

const App = () => {
  return (
    <>
      <UserProvider>
        <HeaderComponent/>
        <DashboardComponent/>
      </UserProvider>
    </>
  );
};

export default App;
