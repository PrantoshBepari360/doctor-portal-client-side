import React from "react";
import { Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import BookingMordal from "../BookingMordal/BookingMordal";

const Booking = ({ booking, date, setBookingSuccess }) => {
  const { name, time, space, price } = booking;

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
    <Grid item xs={12} sm={6} md={4}>
      <Paper elevation={3} sx={{ py: 5 }}>
        <Typography sx={{ color: 'info.main', fontweight: 600 }} variant="h5" gutterBottom component="div">
          {name}
        </Typography>
        <Typography variant="h6" gutterBottom component="div">
          {time}
        </Typography>
        <Typography variant="caption" display="block" gutterBottom>
          price ${price}
        </Typography>
        <Typography variant="caption" display="block" gutterBottom>
          {space} SPACES AVAILABLE
        </Typography>
        <Button onClick={handleOpen} variant="contained">BOOK APPOINTMENT</Button>
      </Paper>
    </Grid>
    <BookingMordal 
    date={date}
    booking={booking}
    open={open}
    handleClose={handleClose}
    setBookingSuccess={setBookingSuccess}
    ></BookingMordal>
    </>
  );
};

export default Booking;
