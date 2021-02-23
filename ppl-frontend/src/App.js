import NavBar from "./screens/components/NavBar";
import Content from "./screens/RegisterPage/Content";
import Footer from "./screens/components/Footer";
import Timeline from "./TimeLine";
import SinglePost from "./screens/SinglePost/PostPage";
import Login from "./screens/RegisterPage/Login";

import { Router, Route, Switch } from "react-router-dom";

import history from "./screens/History/";

function App() {
  return (
    <>
      <NavBar />
      <Router history={history}>
        <Switch>
          {/* <Route path="/" component={Login} /> */}
          <Route exact path="/timeline" component={Timeline} />
          <Route path="/timeline/:id" component={SinglePost} />
          <Route path="/" component={Content} />
        </Switch>
      </Router>

      <Footer />
    </>
  );
}

export default App;
