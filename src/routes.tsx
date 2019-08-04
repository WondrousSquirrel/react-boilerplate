import * as React from "react";
import { Route, Switch } from "react-router-dom";

import RouteLoader from "./routeLoader";

// TODO: can create HOC for Route component

const createRoutes = () => (
  <>
    <React.Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route
          exact
          path="/"
          render={routeProps => (
            <RouteLoader {...routeProps} componentPath={"./components/Home"} />
          )}
        />
      </Switch>
    </React.Suspense>
  </>
);
const routes = createRoutes();

export default routes;
