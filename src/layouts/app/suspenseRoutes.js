import React, { Suspense } from "react";
import LinearProgress from "../../global/linearProgress/linearProgress";

const Dashboard = React.lazy(() => import("../../component/dashboard/index"));

const PageNotFound = React.lazy(() => import("../../component/404/pageNotFound"));

export const DashboardSuspense = (props) => (
    <Suspense fallback={<LinearProgress />}>
      <Dashboard {...props} />
    </Suspense>
  );
  
  export const PageNotFoundSuspense = (props) => (
    <Suspense fallback={<LinearProgress />}>
      <PageNotFound {...props} />
    </Suspense>
  );
  