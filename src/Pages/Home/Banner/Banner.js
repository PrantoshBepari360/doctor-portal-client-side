import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import chair from "../../../images/chair.png";
import bg from "../../../images/bg.png";

const bannerBg = {
  background: `url(${bg})`,
};

const verticalCenter = {
  height: 500,
  display: "flex",
  alignItems: "center",
};

const Banner = () => {
  return (
    <Box style={bannerBg}>
      <Container sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} style={verticalCenter}>
          <Grid item style={{ textAlign: "left" }} xs={12} md={6}>
            <Typography variant="h3">
              Your New Smile <br />
              Starts Here
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontSize: 13, fontweight: 300, color: "gray", my: 3 }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              ducimus saepe officiis praesentium possimus dolore reprehenderit
              eveniet dignissimos recusandae! Quod?
            </Typography>
            <Button variant="contained" style={{ backgroundColor: "#5CE7ED" }}>
              Get Appoinment
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <img style={{ width: "370px" }} src={chair} alt="" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;
