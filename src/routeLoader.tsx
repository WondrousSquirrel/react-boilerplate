import * as React from "react";

// load component with dynamic splitting
export default (props: any) => {
  const Component = React.lazy(() => import(`${props.componentPath}`));
  return <Component />;
};
