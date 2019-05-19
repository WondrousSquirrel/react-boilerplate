import * as React from "react";
import { Route, Switch } from "react-router-dom";

const RouteLoader = (props: any) => {
  const Component = React.lazy(() => import(`${props.componentPath}`));
  return <Component />;
};

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
