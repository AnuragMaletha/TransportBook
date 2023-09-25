import React, { useState } from 'react';
import {Container,Paper,TextField,Button,FormControl,InputLabel,Select,MenuItem,Grid,Typography} from '@mui/material';
import './Form.css'; // Create this CSS file for custom styles

import indianStates from './indianStates';
import axios from 'axios';

function Form() {
  const [Party_Name, setParty_Name] = useState('');
  const [Reg_Number, setReg_Number] = useState('');
  const [Origin, setOrigin] = useState('');
  const [Destination, setDestination] = useState('');
  const [Freight_Amount, setFreight_Amount] = useState('');
  const [Trip_Start_Date, setTrip_Start_Date] = useState('');
  const [KM_Reading, setKM_Reading] = useState('');
  const [Bill_Type, setBill_Type] = useState('');

  const handleSubmit = async (event) => {
    
    event.preventDefault();
    try {
      await axios.post("http://localhost:8000/api/createtrip", {Party_Name,Reg_Number,Origin,Destination,Freight_Amount,Trip_Start_Date,KM_Reading,Bill_Type });
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
                  label="Party Name"
                  variant="outlined"
                  fullWidth
                  value={Party_Name}
                  onChange={(e) => setParty_Name(e.target.value)}
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
                <FormControl variant="outlined" fullWidth>
                  <InputLabel htmlFor="Origin">Route Origin</InputLabel>
                  <Select
                    label="Route Origin"
                    value={Origin}
                    onChange={(e) => setOrigin(e.target.value)}
                    required
                  >
                    <MenuItem value="">
                      <em>Select Origin</em>
                    </MenuItem>
                    {indianStates.map((state) => (
                      <MenuItem key={state} value={state}>
                        {state}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl variant="outlined" fullWidth>
                  <InputLabel htmlFor="Destination">Route Destination</InputLabel>
                  <Select
                    label="Route Destination"
                    value={Destination}
                    onChange={(e) => setDestination(e.target.value)}
                    required
                  >
                    <MenuItem value="">
                      <em>Select Destination</em>
                    </MenuItem>
                    {indianStates.map((state) => (
                      <MenuItem key={state} value={state}>
                        {state}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Freight Amount"
                  variant="outlined"
                  fullWidth
                  type="number"
                  value={Freight_Amount}
                  onChange={(e) => setFreight_Amount(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField

                  variant="outlined"
                  fullWidth
                  type="date"
                  value={Trip_Start_Date}
                  onChange={(e) => setTrip_Start_Date(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Kilometers Reading"
                  variant="outlined"
                  fullWidth
                  type="number"
                  value={KM_Reading}
                  onChange={(e) => setKM_Reading(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={12} md={6}>
              <FormControl variant="outlined" fullWidth>
                  <InputLabel htmlFor="Destination">Payment Method</InputLabel>
                  <Select
                    label="Payment Method"
                    value={Bill_Type}
                    onChange={(e) => setBill_Type(e.target.value)}
                    required
                  >
                    <MenuItem value="">
                      <em>Payment Method</em>
                    </MenuItem>
              
                    <MenuItem value="Online">
                        Online
                    </MenuItem>
                    <MenuItem value="Cash">
                        Cash
                    </MenuItem>
                    
                  </Select>
                </FormControl>
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
