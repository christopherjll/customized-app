import React from "react";
import { AppProvider } from "./AppProvider";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { Dashboard, DetailsPage } from "./containers";
import "./App.css";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const Test = () => <h1>test</h1>;

function App() {
  return (
    <AppProvider>
      <Router>
        <Switch>
          <Route exact path="/:id/view" component={DetailsPage} />
          <Route exact path="/:id/edit" component={Test} />
          <Route path="/" component={Dashboard} />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </AppProvider>
  );
}

export default App;
