import React, { useState, useEffect } from "react";
import "./trucksTable.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import axios from "axios"

const List = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/trucks");
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching task list:", error);
    }
  };


  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell tableHead">Truck No</TableCell>
            <TableCell className="tableCell tableHead">Truck Type</TableCell>
            <TableCell className="tableCell tableHead">Ownership</TableCell>
            <TableCell className="tableCell tableHead">Status</TableCell>
            <TableCell className="tableCell tableHead">Location</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((data) => (
            <TableRow key={data._id}>
              <TableCell className="tableCell">{data.Reg_Number}</TableCell>
              <TableCell className="tableCell">{data.Driver_Name}</TableCell>
              <TableCell className="tableCell">{data.Ownership}</TableCell>
              <TableCell className="tableCell">Available</TableCell>
              <TableCell className="tableCell">India</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
