import { Container, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/doctors")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);

  return (
    <div>
      <h2>Our Doctors {doctors.length}</h2>
      <Container>
        <Grid container spacing={2}>
          {doctors.map((doctor) => (
            <Grid item xs={12} sm={6} md={4}>
              <img
                style={{ width: "100%", height: "70%" }}
                src={`data:image/png;base64,${doctor.image}`}
                alt="Doctor img"
              />
              <h2>Name: {doctor.name}</h2>
              <h3>Email: {doctor.email}</h3>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Doctors;
