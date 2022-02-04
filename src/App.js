import React from "react";
import AppRoutes from "./layouts/app/index"
import { CssBaseline, MuiThemeProvider } from "@material-ui/core";
import { mainTheme } from "./theme/main";

function App() {
  return (
    <>
      <MuiThemeProvider theme={mainTheme}>
        <CssBaseline />
        <AppRoutes />
      </MuiThemeProvider>
    </>
  );
}

export default App;
