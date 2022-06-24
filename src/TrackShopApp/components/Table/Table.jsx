import "./Table.css";

import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, year, brand, status) {
  return { name, year, brand, status };
}

const rows = [
  createData("Iphone 12", 2022, "Apple", "Pending"),
  createData("Galaxy s22", 2022, "Samsung", "Delivered"),
  createData("MacBook", 2022, "Apple", "Approved")
  // createData('Cupcake', 305, 3.7, 67, 4.3),
  // createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const createStyle = (status) => {
  if (status === "Approved") {
    return {
      background: "hsl(148, 80%, 90%)",
      color: "hsl(148, 90%, 20%)",
      //border: '1px solid hsl(148, 90%, 20%)',
      borderRadius: "5px",
      padding: "0.3rem"
    };
  } else if (status === "Pending") {
    return {
      background: "hsl(0, 80%, 90%)",
      color: "hsl(0, 90%, 20%)",
      //border: '1px solid hsl(0, 90%, 20%)',
      borderRadius: "5px",
      padding: "0.3rem"
    };
  } else {
    return {
      background: "hsl(210, 80%, 90%)",
      color: "hsl(210, 90%, 20%)",
      // border: '1px solid hsl(210, 90%, 20%)',
      borderRadius: "5px",
      padding: "0.3rem"
    };
  }
};
export default function BasicTable() {
  return (
    <div className="Table">
      {/* <h5>Table</h5> */}

      <TableContainer
        component={Paper}
        style={{ boxShadow: "0 7px 10px 0 #c3c3c3" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell align="left">Year</TableCell>
              <TableCell align="left">Brand&nbsp;</TableCell>
              {/* <TableCell align="left">Price&nbsp;</TableCell> */}
              <TableCell align="left">Status&nbsp;</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.year}</TableCell>
                <TableCell align="left">{row.brand}</TableCell>
                {/* <TableCell align="left">{row.price}</TableCell> */}
                <TableCell align="left">
                  <span className="status" style={createStyle(row.status)}>
                    {row.status}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
