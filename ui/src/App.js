import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import PrivateRoute from "./components/PrivateRoute";
import Applet from "./pages/Applet";
import Home from "./pages/Home";
import Verify from "./pages/Verfiy";
import ViewPage from "./pages/View";
import Loading from "./Test.js";

//TODO: show expires in, in view page
//TODO: Loading page

//level 1
//dockerize api1,api2,ui and upload in aws ecr or dockerhub
//api1 private subnet1
//api2 private subnet2
//mongo db in docker in private subset3
//ui public subet all in same vpc
//s3 for images and videos
//security groups for transfer of data

//level2
//mongo db connect ebs volumes to mongodb
//ENCRIPTION IF POSSIBLE
//Expires in a time set by them, use aws lambda for this
//create snapshots for every week of s3 using lambda

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
