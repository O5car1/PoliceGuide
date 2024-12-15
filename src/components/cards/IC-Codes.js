import { Card, CardContent, Grid2, Typography, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";

function ICCodes() {
    return (
        <Card
            variant="outlined"
            sx={{
                maxWidth: { xs: '100%', sm: '400px', md: '500px' }, // Responsive width limits
                width: '100%', // Takes up the full width of its parent up to maxWidth
                padding: { xs: 1, sm: 1 }, // Adjust padding for responsiveness
                boxShadow: 2, // Optional: Adds shadow for better appearance
            }}
        >
            <CardContent>
                <Typography
                    color="secondary"
                    variant="h5"
                >
                    IC Codes
                </Typography>
                <Grid2>
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    <Typography color="primary" variant="subtitle2">IC Code</Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography color="primary" variant="subtitle2">Ethnicity</Typography>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>IC-1</TableCell>
                                <TableCell>White (North European)</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>IC-2</TableCell>
                                <TableCell>White (South European)</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>IC-3</TableCell>
                                <TableCell>Black</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>IC-4</TableCell>
                                <TableCell>Asian (Indian Subcontinent)</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>IC-5</TableCell>
                                <TableCell>Chinese, Japanese, Korean or other Southeast Asian</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>IC-6</TableCell>
                                <TableCell>Arab or North African</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>IC-9</TableCell>
                                <TableCell>Unknown</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Grid2>
            </CardContent>
        </Card>
    );
}

export default ICCodes;
