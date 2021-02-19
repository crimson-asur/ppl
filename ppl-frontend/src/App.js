import NavBar from "./screens/components/NavBar";
import Content from "./screens/RegisterPage/Content";
import Footer from "./screens/components/Footer";
import Timeline from "./TimeLine";
import SinglePost from "./screens/SinglePost/PostPage";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <>
        <NavBar />
        <Switch>
          <Route path="/home">
            <Content />
          </Route>

          <Route exact path="/timeline">
            <Timeline />
          </Route>

          <Route path="/timeline/:id" component={SinglePost} />
        </Switch>
        <Footer />
      </>
    </Router>
  );
}

export default App;
