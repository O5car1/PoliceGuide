import { Card, CardContent, Grid2, List, ListItem, Typography, Tooltip } from "@mui/material";

function GOWISELY() {
    return (
        <Card
            variant="outlined"
            sx={{ width: '100%', height: '100%' }}
        >
            <CardContent>
                <Typography
                    color="secondary"
                    variant="h5"
                >
                    GOWISELY
                </Typography>
                <Grid2>
                    <List dense>
                        <Tooltip arrow followCursor title="Why are you searching">
                            <ListItem>
                                <Typography>
                                    <Typography sx={{ fontWeight: 'bold' }} component="span">
                                        Grounds{' '}
                                    </Typography>
                                </Typography>
                            </ListItem>
                        </Tooltip>
                        <Tooltip arrow followCursor title="What are you searching for">
                            <ListItem>
                                <Typography>
                                    <Typography sx={{ fontWeight: 'bold' }} component="span">
                                        Object{' '}
                                    </Typography>
                                </Typography>
                            </ListItem>
                        </Tooltip>
                        <Tooltip arrow followCursor title="Only if wearing plain clothes">
                            <ListItem>
                                <Typography>
                                    <Typography sx={{ fontWeight: 'bold' }} component="span">
                                        Warrant Card{' '}
                                    </Typography>
                                </Typography>
                            </ListItem>
                        </Tooltip>
                        <Tooltip arrow followCursor title="Your callsign/collar number">
                            <ListItem>
                                <Typography>
                                    <Typography sx={{ fontWeight: 'bold' }} component="span">
                                        Identify{' '}
                                    </Typography>
                                </Typography>
                            </ListItem>
                        </Tooltip>
                        <Tooltip arrow followCursor title="Attached to Lillie Road Firearms Base or Alpteron Operations Base">
                            <ListItem>
                                <Typography>
                                    <Typography sx={{ fontWeight: 'bold' }} component="span">
                                        Station{' '}
                                    </Typography>
                                </Typography>
                            </ListItem>
                        </Tooltip>
                        <Tooltip arrow followCursor title="Entitled to a copy of the search up to 3 months from todays date">
                            <ListItem>
                                <Typography>
                                    <Typography sx={{ fontWeight: 'bold' }} component="span">
                                        Entitlement{' '}
                                    </Typography>
                                </Typography>
                            </ListItem>
                        </Tooltip>
                        <Tooltip arrow followCursor title="S.23 Misuse of Drugs/S.1 PACE/S.47 Firearms Act">
                            <ListItem>
                                <Typography>
                                    <Typography sx={{ fontWeight: 'bold' }} component="span">
                                        Legal Power{' '}
                                    </Typography>
                                </Typography>
                            </ListItem>
                        </Tooltip>
                        <Tooltip arrow followCursor title="Tell them they are being detained for the purpose of the search and are not free to leave">
                            <ListItem>
                                <Typography>
                                    <Typography sx={{ fontWeight: 'bold' }} component="span">
                                        You are being detained{' '}
                                    </Typography>
                                </Typography>
                            </ListItem>
                        </Tooltip>
                    </List>
                </Grid2>
            </CardContent>
        </Card>
    );
}

export default GOWISELY;
