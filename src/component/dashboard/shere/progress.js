import React from "react";
import { Box, Grid, Typography, Card, Divider } from "@material-ui/core";
import Chart from "../../../global/chart/chart";
import { progress } from "./utils/utils";
import Footer from "../assert/footer.png";

const Progress = () => {
  const colors = ["#ffd201", "#ff794f"];
  const labels = ["Compeleted", "Left to go"];
  return (
    <Grid container>
      <Grid item xs={12} lg={4} md={5}>
        <Box
          component={Card}
          bgcolor="#1a2c7c"
          className="p-3 m-4"
          borderRadius="5px"
        >
          <Grid item xs={12} lg={10}>
            <Box
              Component={Typography}
              variant="h3"
              color="#FFFEFE"
              fontSize="28px"
              className="d-flex justify-content-center p-3 font-weight-bold"
            >
              Progress overview
            </Box>

            <Chart colors={colors} series={[40, 60]} labels={labels} />
          </Grid>
          <Box bgcolor="#2e4086" borderRadius="20px">
            <Grid>
              <Grid container>
                <Grid item xs={12} lg={6} className="P-3">
                  <Grid container>
                    <Grid item xs={2} lg={2}>
                      <Box
                        bgcolor="#ffd201"
                        borderRadius="50%"
                        width="20px"
                        height="20px"
                        className="d-flex justify-content-center align-items-center p-3"
                      />
                    </Grid>
                    <Grid item xs={10} lg={10}>
                      <Box
                        Component={Typography}
                        variant="h3"
                        color="#FFFEFE"
                        fontSize="15px"
                        className="p-2 font-weight-bold"
                      >
                        Completed
                      </Box>
                    </Grid>
                    <Grid item xs={10} lg={10}>
                      <Box
                        color="#FFFEFE"
                        fontSize="50px"
                        className="p-1 font-weight-bold"
                      >
                        20
                        <Box
                          component="span"
                          fontSize="30px"
                          className="ml-2 mr-2"
                        >
                          hours
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
                <Box component={Divider} color="#fffff" />
                <Grid item xs={12} lg={6} className="P-3">
                  <Grid container>
                    <Grid item xs={2} lg={2}>
                      <Box
                        bgcolor="#ff794f"
                        borderRadius="50%"
                        width="20px"
                        height="20px"
                        className="d-flex justify-content-center align-items-center p-3"
                      />
                    </Grid>
                    <Grid item xs={10} lg={10}>
                      <Box
                        Component={Typography}
                        variant="h3"
                        color="#FFFEFE"
                        fontSize="15px"
                        className="p-2 font-weight-bold"
                      >
                        Left to go
                      </Box>
                    </Grid>
                    <Grid item xs={10} lg={10}>
                      <Box
                        color="#FFFEFE"
                        fontSize="50px"
                        className="p-1 font-weight-bold"
                      >
                        30
                        <Box
                          component="span"
                          fontSize="30px"
                          className="ml-2 mr-2"
                        >
                          hours
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} lg={8} md={7}>
        <Grid container>
          {progress.map((data) => {
            return (
              <Box
                component={Grid}
                xs={12}
                lg={3}
                bgcolor={data.color}
                className="p-4 m-3"
                key={data.id}
              >
                <Grid container>
                  <Grid item xs={12} lg={6}>
                    <Box component={Typography} color="#bbb8cd" fontSize="20px !important" fontWeight="bold">
                      {data.name}
                    </Box>
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <Box
                      component={Typography}
                      fontSize="25px !important"
                      className="font-weight-bold d-flex align-items-center justify-content-center "
                    >
                      {data.value}
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            );
          })}
           <Grid item xs={12} lg={8} md={7}>
      <Box component={Grid} item xs={12} lg={12} md={8} position="absolute">
       
          <div className="d-flex flex-column justify-content-center align-items-center">
            
            <Box
              component={Typography}
              color="#f5f5fb "
              fontSize="23px !important"
              marginTop="60px !important"
              className="font-weight-bold d-flex justify-content-center align-items-center ml-4
              p-2"
            >
             Confirm your account details please confirm your email and phone number.😰
            </Box>
        
        </div>
 
      </Box>
      <Box component={Grid} item xs={12} lg={10} md={6}>
        <Box
          className="p-2"
          component="img"
          src={Footer}
         height="140px"
          alt="footer"
  
        />
      </Box>
          </Grid>
        </Grid>
      </Grid>
     
    </Grid>
  );
};

export default Progress;
