import { Card, CardContent, Typography, Chip, Grid2, Tooltip } from '@mui/material';

function Necessities() {
    return (
        <Card
            variant="outlined"
            sx={{
                maxWidth: { xs: '100%', sm: '300px', md: '350px' }, // Reduced max width for narrower card
                width: '100%', // Full width of parent up to maxWidth
                padding: { xs: 1, sm: 1 }, // Adjust padding for responsiveness
                boxShadow: 2, // Optional: Adds shadow for better visual appearance
            }}
        >
            <CardContent>
                <Grid2>
                    <Typography
                        color="secondary"
                        variant="h5"
                        sx={{ pb: { xs: 1, sm: 2 } }} // Adjust spacing below title
                    >
                        Necessities
                    </Typography>
                    <Grid2 container spacing={1} wrap="wrap">
                        <Tooltip
                            arrow
                            followCursor
                            title="Allow a prompt and effective investigation of the offence or of the conduct of the person in question"
                        >
                            <Chip
                                label="Investigation"
                                variant="outlined"
                                size="small"
                                color="primary"
                            ></Chip>
                        </Tooltip>
                        <Tooltip
                            arrow
                            followCursor
                            title="Prevent any prosecution being hindered by the disappearance of the person in question"
                        >
                            <Chip
                                label="Disappearance"
                                variant="outlined"
                                size="small"
                                color="primary"
                            ></Chip>
                        </Tooltip>
                        <Tooltip arrow followCursor title="Protect a child or vulnerable person">
                            <Chip
                                label="Child or Vulnerable"
                                variant="outlined"
                                size="small"
                                color="primary"
                            ></Chip>
                        </Tooltip>
                        <Tooltip
                            arrow
                            followCursor
                            title="Prevent an unlawful obstruction of the highway"
                        >
                            <Chip
                                label="Obstruct Highway"
                                variant="outlined"
                                size="small"
                                color="primary"
                            ></Chip>
                        </Tooltip>
                        <Tooltip
                            arrow
                            followCursor
                            title="Prevent physical harm to self or another or suffering physical injury"
                        >
                            <Chip
                                label="Prevent injury"
                                variant="outlined"
                                size="small"
                                color="primary"
                            ></Chip>
                        </Tooltip>
                        <Tooltip
                            arrow
                            followCursor
                            title="Prevent an offence against public decency"
                        >
                            <Chip
                                label="Public Decency"
                                variant="outlined"
                                size="small"
                                color="primary"
                            ></Chip>
                        </Tooltip>
                        <Tooltip
                            arrow
                            followCursor
                            title="Prevent loss of or damage to property"
                        >
                            <Chip
                                label="Loss or Damage"
                                variant="outlined"
                                size="small"
                                color="primary"
                            ></Chip>
                        </Tooltip>
                        <Tooltip arrow followCursor title="Ascertain the person's name">
                            <Chip
                                label="Name"
                                variant="outlined"
                                size="small"
                                color="primary"
                            ></Chip>
                        </Tooltip>
                        <Tooltip arrow followCursor title="Ascertain the person's address">
                            <Chip
                                label="Address"
                                variant="outlined"
                                size="small"
                                color="primary"
                            ></Chip>
                        </Tooltip>
                    </Grid2>
                </Grid2>
            </CardContent>
        </Card>
    );
}

export default Necessities;
