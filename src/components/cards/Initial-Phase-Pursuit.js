import { Card, CardContent, Grid2, List, ListItem, Typography } from "@mui/material";

function IPP() {
    return(
        <Card variant='outlined'>
            <CardContent>
                <Typography color='secondary' variant='h5'>IPP</Typography>
                <Grid2>
                <List dense>
                    <ListItem>
                        <Typography sx={{ fontWeight: 'bold' }} component="span">
                            Active Message
                        </Typography>
                    </ListItem>
                    <ListItem >
                        <Typography>
                            <Typography sx={{ fontWeight: 'bold' }} component="span">
                                Vehicle{' '}
                            </Typography>
                            <Typography color='primary' sx={{ fontStyle: 'italic', fontSize: 'default' }} component="span">
                                [Make/Model/VRM]
                            </Typography>
                        </Typography>
                    </ListItem>
                    <ListItem >
                        <Typography>
                            <Typography sx={{ fontWeight: 'bold' }} component="span">
                                Location{' '}
                            </Typography>
                            <Typography color='primary' sx={{ fontStyle: 'italic', fontSize: 'default' }} component="span">
                                [Road and Postal]
                            </Typography>
                        </Typography>
                    </ListItem>
                    <ListItem >
                        <Typography sx={{ fontWeight: 'bold' }} component="span">
                            Speed
                        </Typography>
                    </ListItem>
                    <ListItem >
                        <Typography>
                            <Typography sx={{ fontWeight: 'bold' }} component="span">
                                Vehicle Density{' '}
                            </Typography>
                            <Typography color='primary' sx={{ fontStyle: 'italic', fontSize: 'default' }} component="span">
                                [LOW/MED/HIGH]
                            </Typography>
                        </Typography>
                    </ListItem>
                    <ListItem >
                        <Typography>
                            <Typography sx={{ fontWeight: 'bold' }} component="span">
                                Pedestrian Density{' '}
                            </Typography>
                            <Typography color='primary' sx={{ fontStyle: 'italic', fontSize: 'default' }} component="span">
                                [LOW/MED/HIGH]
                            </Typography>
                        </Typography>
                    </ListItem>
                    <ListItem >
                        <Typography>
                            <Typography sx={{ fontWeight: 'bold' }} component="span">
                                Road Conditions{' '}
                            </Typography>
                            <Typography color='primary' sx={{ fontStyle: 'italic', fontSize: 'default' }} component="span">
                                [WET/DRY/DIRT]
                            </Typography>
                        </Typography>
                    </ListItem>
                    <ListItem >
                        <Typography>
                            <Typography sx={{ fontWeight: 'bold' }} component="span">
                                Weather{' '}
                            </Typography>
                            <Typography color='primary' sx={{ fontStyle: 'italic', fontSize: 'default' }} component="span">
                                [CLEAR/LIGHT/DARK]
                            </Typography>
                        </Typography>
                    </ListItem>
                    <ListItem >
                        <Typography>
                            <Typography sx={{ fontWeight: 'bold' }} component="span">
                                Visibility{' '}
                            </Typography>
                            <Typography color='primary' sx={{ fontStyle: 'italic', fontSize: 'default' }} component="span">
                                [CLEAR/MED/LOW]
                            </Typography>
                        </Typography>
                    </ListItem>
                    <ListItem >
                        <Typography>
                            <Typography sx={{ fontWeight: 'bold' }} component="span">
                                Driver Level{' '}
                            </Typography>
                            <Typography color='primary' sx={{ fontStyle: 'italic', fontSize: 'default' }} component="span">
                                ADV TPAC
                            </Typography>
                        </Typography>
                    </ListItem>
                    <ListItem >
                        <Typography>
                            <Typography sx={{ fontWeight: 'bold' }} component="span">
                                Police Vehicle{' '}
                            </Typography>
                            <Typography color='primary' sx={{ fontStyle: 'italic', fontSize: 'default' }} component="span">
                                [UN/MARKED]
                            </Typography>
                        </Typography>
                    </ListItem>
                </List>
                </Grid2>
            </CardContent>
        </Card>
    );
}

export default IPP
