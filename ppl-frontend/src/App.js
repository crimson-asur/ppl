import NavBar from "./screens/components/NavBar";
import Content from "./screens/RegisterPage/Content";
import Footer from "./screens/components/Footer";
import Timeline from "./TimeLine";
import SinglePost from "./screens/SinglePost/PostPage";

import { Router, Route, Switch } from "react-router-dom";

import history from "./screens/History/";
import store from "./store";

function App() {
  console.log("initial render");
  console.log(store.getState());
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
