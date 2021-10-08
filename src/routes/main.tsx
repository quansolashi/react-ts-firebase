import { Router } from "@reach/router"
import Login from "../pages/login";
import Route from "./route";

const MainRouter: React.VFC = () => {
  return (
    <>
      <Router>
        <Route component={Login} path="/login" />
      </Router>
    </>
  )
}

export default MainRouter;