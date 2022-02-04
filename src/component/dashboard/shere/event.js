import React from "react";
import { Box, Grid, Typography, Card } from "@material-ui/core";
import Img from "../assert/event.png";
import ListCard from "../../../global/list-card/list-card";
import { eventActivity } from "./utils/utils";

export const Event = () => {
  return (
    <Grid container>


      <Grid item xs={12} lg={12} md={8}>
        <Box
          Component={Typography}
          variant="h3"
          className="p-3 font-weight-bold"
          color="var(--font)"
          fontSize="28px"
        >
          Event
        </Box>
      </Grid>

      <Box component={Grid} item xs={12} lg={8} md={6}>
        <Box
          className="p-2"
          component="img"
          src={Img}
          alt="header"
          width="100%"
          height="100%"
        />
      </Box>

      <Box component={Grid} item xs={12} lg={4} md={6}>
        <Grid item xs={12}>
          <Box component={Typography} color="#2f4e75" className="p-3">
            EVENTS TODAY
          </Box>
        </Grid>
        <Grid container>
          <Grid item xs={6} lg={12}>
            {eventActivity?.map((data) => {
              return (
                <Card key={data.id} className="p-3 m-2">
                  <ListCard item={data} />
                </Card>
              );
            })}
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

export default Event;
