import { Grid2, Accordion, AccordionSummary, Card, CardContent, Typography, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function IPP() {
    return (
        <Card
            variant="outlined"
            sx={{
                maxWidth: { xs: '100%', sm: '400px', md: '500px' }, // Responsive max width
                width: '100%', // Full width of parent up to maxWidth
                padding: { xs: 1, sm: 1 }, // Adjust padding for responsiveness
                boxShadow: 2, // Optional: Add shadow for better visual appearance
            }}
        >
            <CardContent>
                <Typography
                    color="secondary"
                    variant="h5"
                    sx={{ marginBottom: { xs: 1, sm: 1 } }} // Adjust title spacing
                >
                    Drug Classes
                </Typography>
                <Grid2>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography color="primary">Class A</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            Cocaine, Crack Cocaine, Ecstasy (MDMA), Heroin, LSD, Magic Mushrooms, Methadone, Methamphetamine (Crystal Meth)
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography color="primary">Class B</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            Amphetamines, Barbiturates, Cannabis, Codeine, Gamma Hydroxybutyrate (GHB), Gamma-Butyrolactone (GBL), Ketamine, Methylphenidate (Ritalin), Synthetic Cannabinoids, Synthetic Cathinones (Mephedrone, Methoxetamine)
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography color="primary">Class C</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            Anabolic Steroids, Benzodiazepines (Diazepam), Khat, Nitrous Oxide (Laughing Gas), Piperazines (BZP)
                        </AccordionDetails>
                    </Accordion>
                </Grid2>
            </CardContent>
        </Card>
    );
}

export default IPP;
