import { Paper, CardContent, Grid2, Typography, Table, TableHead, TableRow, TableCell, TableBody, TableContainer } from "@mui/material";

const LegislationTable = () => {
    const rows = [
      { id: 1, name: 'John Doe', age: 28, job: 'Developer' },
      { id: 2, name: 'Jane Smith', age: 34, job: 'Designer' },
      { id: 3, name: 'Sam Wilson', age: 22, job: 'Intern' },
    ];

    return (
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Job</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.age}</TableCell>
                <TableCell>{row.job}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

export default LegislationTable
