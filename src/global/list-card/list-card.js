import { Box, Typography, Grid } from "@material-ui/core";
import React from "react";

const ListCard = ({ item }) => {
  return (
    <Grid container>
      <Grid item xs={12} lg={2} md={2}>
        {!!item?.img && <Box component="img" src={item?.img} alt={item?.img} />}
      </Grid>
      <Grid item xs={12} lg={10} md={2}>
        {!!item?.time && !item?.msg &&  (
          <>
            <Grid item xs={12} lg={2} md={8}>
              <Box component={Typography} color="#9c9ab6">
                {item?.time}
              </Box>
            </Grid>
            <Grid item xs={12} lg={10} md={2}>
              <Typography>{item?.desc}</Typography>
            </Grid>
          </>
        )}
        {!!item?.msg && (
          <>
            <Grid item xs={12} className="ml-3">
              <Typography>{item?.msg}</Typography>
            </Grid>
            <Grid item xs={12} >
              <Box component={Typography} color="#9c9ab6" className="ml-3">
                {item?.time}
              </Box>
            </Grid>
          </>
        )}
      </Grid>
    </Grid>
  );
};

export default ListCard;
