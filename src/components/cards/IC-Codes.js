import { Card, CardContent, Grid2, Typography, Table, TableHead, TableRow, TableCell, TableBody, Box } from "@mui/material";

function ICCodes() {
    return (
        <Card variant='outlined'>
            <CardContent>
                <Typography color='secondary' variant='h5'>IC Codes</Typography>
                <Grid2>
                    <Table size='small'>
                        <TableHead>
                            <TableRow>
                                    <TableCell><Typography color='primary'>Colour</Typography></TableCell>
                                    <TableCell><Typography color='primary'>IC Code</Typography></TableCell>
                                    <TableCell><Typography color='primary'>Ethnicity</Typography></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <Box sx={{ p: 1.25, bgcolor: 'white' }} />
                                </TableCell>
                                <TableCell>IC-1</TableCell>
                                <TableCell>White (North European)</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Box sx={{ p: 1.25, bgcolor: 'white' }} />
                                </TableCell>
                                <TableCell>IC-2</TableCell>
                                <TableCell>White (South European)</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Box sx={{ p: 1.25, bgcolor: 'black' }} />
                                </TableCell>
                                <TableCell>IC-3</TableCell>
                                <TableCell>Black</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Box sx={{ p: 1.25, bgcolor: 'yellow' }} />
                                </TableCell>
                                <TableCell>IC-4</TableCell>
                                <TableCell>Asian (Indian Subcontinent)</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Box sx={{ p: 1.25, bgcolor: 'yellow' }} />
                                </TableCell>
                                <TableCell>IC-5</TableCell>
                                <TableCell>Chinese, Japanese, Korean or other Southeast Asian</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Box sx={{ p: 1.25, bgcolor: 'yellow' }} />
                                </TableCell>
                                <TableCell>IC-6</TableCell>
                                <TableCell>Arab or North African</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Unknown</TableCell>
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

export default ICCodes
