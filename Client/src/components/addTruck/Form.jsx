import React, { useState } from 'react';
import {Container,Paper,TextField,Button,FormControl,InputLabel,Select,MenuItem,Grid,Typography} from '@mui/material';
import './Form.css'; // Create this CSS file for custom styles

import axios from 'axios';

function Form() {
  const [Driver_Name, setDriver_Name] = useState('');
  const [Reg_Number, setReg_Number] = useState('');
  const [Truck_Type, setTruck_Type] = useState('');
  const [ownership, setOwnership] = useState('');

  const handleSubmit = async (event) => {
    
    event.preventDefault();
    try {
      await axios.post("http://localhost:8000/api/createtruck", {Driver_Name,Reg_Number,Truck_Type,ownership});
      window.location.href=window.location.href
      
    } catch (error) {
      console.error("Error saving task:", error);
    }
  };

  return (
    <div className='form'>
      <Container maxWidth="lg" >
        <Paper elevation={3} className="material-add-trip-form">
          <Typography variant="h4" gutterBottom>
            Add Trip
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Driver Name"
                  variant="outlined"
                  fullWidth
                  value={Driver_Name}
                  onChange={(e) => setDriver_Name(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Truck Registration Number"
                  variant="outlined"
                  fullWidth
                  value={Reg_Number}
                  onChange={(e) => setReg_Number(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Truck Type"
                  variant="outlined"
                  fullWidth
                  value={Truck_Type}
                  onChange={(e) => setTruck_Type(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Ownership"
                  variant="outlined"
                  fullWidth
                  value={ownership}
                  onChange={(e) => setOwnership(e.target.value)}
                  required
                />
              </Grid>
              
            </Grid>

            <div className="btn">
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Add Trip
              </Button>
            </div>

          </form>
        </Paper>
      </Container>
    </div>
  );
}

export default Form;
