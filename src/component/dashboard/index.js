import React from "react";
import { Box, Grid} from "@material-ui/core";
import DashBoard from "./shere/dashBoard";
import Event from "./shere/event";
import Activity from "./shere/activity";
import Progress from "./shere/progress";

const Dashboard = () => {
  return (
    <>
      <Box>
        <Grid container spacing={0}>
          <Grid item xs={12} lg={11} md={8}>
           <DashBoard/>
           </Grid>
           <Grid item xs={12} lg={11} md={8}>
           <Event/>
           </Grid>
           <Grid item xs={12} lg={11} md={8}>
           <Activity/>
           </Grid>
           <Grid item xs={12} lg={11} md={8}>
           <Progress/>
           </Grid>
        </Grid>
       
      </Box>
    </>
  );
};

export default Dashboard;
