import { Card, CardContent, Typography, TextField, Button } from '@mui/material'

function DisableZELSPanel() {
    const disableZEls = `let d=document;d.getElementsByName('z_els')[0].contentDocument.head.append(Object.assign(d.createElement('style'),{innerHTML:'.resize-drag{display:none!important;}'}))`

    return <Card variant='outlined' sx={{ mb: 2 }}>
        <CardContent>
            <Typography color='secondary' gutterBottom variant='h5' component='div'>
                Disable z_els Panel
            </Typography>

            <Button color='info' variant='outlined' onClick={() => navigator.clipboard.writeText(disableZEls)}>Copy</Button>

            <TextField
                margin='normal'
                fullWidth
                value={disableZEls}
                spellCheck={false}
                autoComplete='off'
                autoCorrect='off'
                autoCapitalize='off'
                disabled={true}
            />
        </CardContent>
    </Card>
}

export default DisableZELSPanel
