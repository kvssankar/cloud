import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import PrivateRoute from "./components/PrivateRoute";
import Applet from "./pages/Applet";
import Home from "./pages/Home";
import Verify from "./pages/Verfiy";
import ViewPage from "./pages/View";
import Loading from "./Test.js";

//TODO: Make display page
//TODO: Expires in a day
//TODO: Change titles
//TODO: Set password
//TODO: Share button
//TODO: AWS HOSTING
//TODO: AWS S3 USE IF POSSIBLE
//TODO: ENCRIPTION IF POSSIBLE
//TODO: Loading page

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/app" exact component={Applet} />
        <Route path="/v/:title" exact component={Verify} />
        <Route path="/view/:title" exact component={ViewPage} />
        <Route path="/test" exact component={Loading} />
        {/* <PrivateRoute path="/dashboard" exact component={Dashboard} /> */}
      </Switch>
    </Router>
  );
}

export default App;
