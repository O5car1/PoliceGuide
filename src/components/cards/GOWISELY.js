import { Card, CardContent, Grid2, List, ListItem, Typography } from "@mui/material";

function GOWISELY() {
    return (
        <Card
            variant="outlined"
            sx={{
                maxWidth: { xs: '100%', sm: '450px', md: '500px' }, // Responsive max width
                width: '100%', // Full width of parent up to maxWidth
                padding: { xs: 1, sm: 1 }, // Responsive padding
                boxShadow: 2, // Subtle shadow for better appearance
            }}
        >
            <CardContent>
                <Grid2>
                    <Typography
                        color="secondary"
                        variant="h5"
                        sx={{ pb: { xs: 1, sm: 2 } }} // Adjust spacing below title
                    >
                        GOWISELY
                    </Typography>
                    <Grid2 container spacing={1} wrap="wrap">
                        <Tooltip
                            arrow
                            followCursor
                            title="Why are you searching"
                        >
                            <Chip
                                label="Grounds"
                                variant="outlined"
                                size="small"
                                color="primary"
                            ></Chip>
                        </Tooltip>
                        <Tooltip
                            arrow
                            followCursor
                            title="What are you searching for"
                        >
                            <Chip
                                label="Object"
                                variant="outlined"
                                size="small"
                                color="primary"
                            ></Chip>
                        </Tooltip>
                        <Tooltip arrow followCursor title="Only if not in uniform">
                            <Chip
                                label="Warrant Card"
                                variant="outlined"
                                size="small"
                                color="primary"
                            ></Chip>
                        </Tooltip>
                        <Tooltip
                            arrow
                            followCursor
                            title="Your callsign or shoulder number"
                        >
                            <Chip
                                label="Identify"
                                variant="outlined"
                                size="small"
                                color="primary"
                            ></Chip>
                        </Tooltip>
                        <Tooltip
                            arrow
                            followCursor
                            title="Lillie Road Firearms Base/Alperton Operations Base"
                        >
                            <Chip
                                label="Station"
                                variant="outlined"
                                size="small"
                                color="primary"
                            ></Chip>
                        </Tooltip>
                        <Tooltip
                            arrow
                            followCursor
                            title="Entitled to a copy of the search, up to 3 months from todays date"
                        >
                            <Chip
                                label="Entitlement"
                                variant="outlined"
                                size="small"
                                color="primary"
                            ></Chip>
                        </Tooltip>
                        <Tooltip
                            arrow
                            followCursor
                            title="S.23 Misuse of Drufs Act, S.1 Police and Criminal Evidence Act, S.47 Firearms Act"
                        >
                            <Chip
                                label="Legal Power"
                                variant="outlined"
                                size="small"
                                color="primary"
                            ></Chip>
                        </Tooltip>
                        <Tooltip arrow followCursor title="Tell them they are detained for the purpose of a search">
                            <Chip
                                label="You are being detained"
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

export default GOWISELY;
