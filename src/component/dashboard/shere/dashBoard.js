import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import Flag from "../assert/flag.svg";
import Header from "../assert/header.png";
import Group from "../assert/group.png";

export const dashBoard = () => {
  return (
    <Grid container>
      <Grid item xs={6} lg={10} md={8}>
        <Box
          Component={Typography}
          variant="h3"
          className="p-3 font-weight-bold"
          color="var(--font)"
          fontSize="28px"
        >
          Dashboard
        </Box>
      </Grid>
      <Box
        component={Grid}
        item
        xs={6}
        lg={2}
        md={4}
        className="p-2"
        bgcolor="var(--white)"
        marginTop="20px !important"
      >
        <Grid container>
          <Grid item xs={12} lg={12}>
            <Typography variant="body1" className="text-theme">
              Currently Learning
            </Typography>
          </Grid>
          <Grid item xs={2} lg={2}>
            <a href="#/">
              <Box component="img" width="30px" src={Flag} alt="PLATFORM" />
            </a>
          </Grid>
          <Grid item xs={6} lg={2}>
            <Typography
              gutterBottom
              variant="body1"
              className="font-weight-bold p-1 ml-3"
            >
              English
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box component={Grid} item xs={12} lg={12} md={8} position="absolute">
        <Box className="d-flex flex-row ">
          <Box component="img" src={Group} alt="GROUP" height="330px" />
          <div className="d-flex flex-column justify-content-center">
            
            <Box
              component={Typography}
              color="#f5f5fb "
              fontSize="30px !important"
              className="font-weight-bold"
            >
              Welcome back, Clarence
            </Box>
            <Box component={Typography} color="#f5f5fb">
              To-da! You're up to data. 🥳
            </Box>
          </div>
        </Box>
      </Box>
      <Box component={Grid} item xs={12} lg={10} md={6}>
        <Box
          className="p-2"
          component="img"
          src={Header}
          alt="header"
          height="246px"
        />
      </Box>
    </Grid>
  );
};

export default dashBoard;
