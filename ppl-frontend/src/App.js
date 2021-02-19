import NavBar from "./screens/components/NavBar";
import Content from "./screens/RegisterPage/Content";
import Footer from "./screens/components/Footer";
import Timeline from "./TimeLine";
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

          <Route path="/timeline">
            <Timeline />
          </Route>
        </Switch>
        <Footer />
      </>
    </Router>
  );
}

export default App;
