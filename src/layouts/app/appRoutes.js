import React from "react";
import { Switch , Route} from "react-router-dom";

import { DashboardSuspense, PageNotFoundSuspense } from "./suspenseRoutes";

export default function AppRoutes() {
  return (
    <Switch>
      <Route path="/" exact component={DashboardSuspense} />
      <Route component={PageNotFoundSuspense} />
    </Switch>
  );
}
