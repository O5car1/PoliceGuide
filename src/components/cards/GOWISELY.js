import { Card, CardContent, Grid2, List, ListItem, Typography } from "@mui/material";

function GOWISELY() {
    return(
        <Card variant='outlined'>
            <CardContent>
                <Typography color='secondary' variant='h5'>GOWISELY</Typography>
                <Grid2>
                <List dense>
                    <ListItem >
                        <Typography>
                            <Typography sx={{ fontWeight: 'bold' }} component="span">
                                Grounds{' '}
                            </Typography>
                            <Typography color='primary' sx={{ fontStyle: 'italic', fontSize: 'default' }} component="span">
                                Why are you searching
                            </Typography>
                        </Typography>
                    </ListItem>
                    <ListItem >
                        <Typography>
                            <Typography sx={{ fontWeight: 'bold' }} component="span">
                                Object{' '}
                            </Typography>
                            <Typography color='primary' sx={{ fontStyle: 'italic', fontSize: 'default' }} component="span">
                                What you are searching for
                            </Typography>
                        </Typography>
                    </ListItem>
                    <ListItem >
                        <Typography>
                            <Typography sx={{ fontWeight: 'bold' }} component="span">
                                Warrant Card{' '}
                            </Typography>
                            <Typography color='primary' sx={{ fontStyle: 'italic', fontSize: 'default' }} component="span">
                                Only if not in uniform
                            </Typography>
                        </Typography>
                    </ListItem>
                    <ListItem >
                        <Typography>
                            <Typography sx={{ fontWeight: 'bold' }} component="span">
                                Identify{' '}
                            </Typography>
                            <Typography color='primary' sx={{ fontStyle: 'italic', fontSize: 'default' }} component="span">
                                INSP/SGT/PC 145/168BX/OC-XX
                            </Typography>
                        </Typography>
                    </ListItem>
                    <ListItem >
                        <Typography>
                            <Typography sx={{ fontWeight: 'bold' }} component="span">
                                Station{' '}
                            </Typography>
                            <Typography color='primary' sx={{ fontStyle: 'italic', fontSize: 'default' }} component="span">
                                Attached to Lillie Road Firearms Base
                            </Typography>
                        </Typography>
                    </ListItem>
                    <ListItem >
                        <Typography>
                            <Typography sx={{ fontWeight: 'bold' }} component="span">
                                Entitlement{' '}
                            </Typography>
                            <Typography color='primary' sx={{ fontStyle: 'italic', fontSize: 'default' }} component="span">
                                To a copy of the search, up to 3 months from today
                            </Typography>
                        </Typography>
                    </ListItem>
                    <ListItem >
                        <Typography>
                            <Typography sx={{ fontWeight: 'bold' }} component="span">
                                Legal Power{' '}
                            </Typography>
                            <Typography color='primary' sx={{ fontStyle: 'italic', fontSize: 'default' }} component="span">
                                S.23 Misuse of Drugs/S.1 PACE/S.47 Firearms Act
                            </Typography>
                        </Typography>
                    </ListItem>
                    <ListItem >
                        <Typography>
                            <Typography sx={{ fontWeight: 'bold' }} component="span">
                                You{' '}
                            </Typography>
                            <Typography color='primary' sx={{ fontStyle: 'italic', fontSize: 'default' }} component="span">
                                Are being detained
                            </Typography>
                        </Typography>
                    </ListItem>
                </List>
                </Grid2>
            </CardContent>
        </Card>
    );
}

export default GOWISELY
