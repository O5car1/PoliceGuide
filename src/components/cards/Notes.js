import { Card, CardContent, Typography, Chip, Grid2, Tooltip, TextField } from '@mui/material';

function Notes() {
    return (
        <Card variant='outlined'  sx={{ 
            width: '100%', 
            display: 'flex', 
            flexDirection: 'column',
          }}>
            <CardContent>
                <Grid2>
                    <Typography color='secondary' variant='h5' sx={{pb: 2}}>Notes</Typography>
                    <TextField multiline rows={10.6} variant='standard' spellCheck={false} color='primary'/>
                </Grid2>
            </CardContent>
        </Card>
    );
}

export default Notes
