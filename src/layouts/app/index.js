import React from "react";

import Header from "../header";
import { Box } from "@material-ui/core";
import Scrollbars from "react-custom-scrollbars";
import Sidebar from "../sidebar";
import routes from "./routes";
import Approutes from "./appRoutes";

const Applayout = () => {
  const [open, setOpen] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Header

      // {...rest}
      />
      <Box className="d-flex" paddingTop={["58px", "74px"]} >
        <Sidebar
          routes={routes}
          logoText={"Platform"}
          handleDrawerToggle={handleDrawerToggle}
          open={mobileOpen}
          color="#FFFFFF"
          classNames="drawer"
          isCollapsed={!open}
          handleDrawerClose={open ? handleDrawerClose : handleDrawerOpen}
        />
        <div className="w-100">
          <Box component={Scrollbars} autoHide={false} height="94vh !important" bgcolor="var(--body)">
            <Approutes />
          </Box>
        </div>
      </Box>
    </>
  );
};

export default Applayout;
