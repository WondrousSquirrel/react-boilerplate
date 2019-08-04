import * as React from "react";

export default (props: any) => {
  const Component = React.lazy(() => import(`${props.componentPath}`));
  return <Component />;
};
