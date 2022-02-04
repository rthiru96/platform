import React from "react";
import {
  Box,
  Grid,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import { activity } from "./utils/utils";

import ExpandMoreIcon from "@material-ui/icons/Add";

const Activity = () => {
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
          Activity
        </Box>
        <div className="p-3" >
          {activity?.map((data) => {
            return (
              <Accordion key={data.id} className="p-1 m-3">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <div className="d-flex flex-row ">
                    <Box component="img" src={data?.img} alt={data?.img} />
                    <Typography className="justify-content-center d-flex ml-3 align-items-center">{data.name}</Typography>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="p-3">{data.desc}</Typography>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </div>
      </Grid>
    </Grid>
  );
};

export default Activity;
