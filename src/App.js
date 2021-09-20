import { Route, Switch } from "react-router-dom"

import UserRouter from "./pages/user/Router"
import AdminRouter from "./pages/admin/Router"

import "./styles/App.css"

function App() {
  return (
    <>
      <Switch>
        <Route path="/admin">
          <AdminRouter />
        </Route>
        <Route path="/">
          <UserRouter />
        </Route>
      </Switch>
    </>
  )
}

export default App
