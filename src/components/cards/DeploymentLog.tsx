import { Autocomplete, Button, Card, CardContent, Chip, Divider, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, InputLabel, MenuItem, Radio, RadioGroup, Select, SelectChangeEvent, Switch, TextField, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useDebounce } from 'use-debounce'

const VALID_RANKS = [
    'Constable',
    'Detective Constable',
    'Acting Sergeant',
    'Acting Detective Sergeant',
    'Sergeant',
    'Detective Sergeant',
    'Inspector',
    'Detective Inspector',
    'Acting Chief Inspector',
    'Acting Detective Chief Inspector',
    'Chief Inspector',
    'Detective Chief Inspector',
    'Superintendent',
    'Detective Superintendent',
    'Chief Superintendent',
    'Detective Chief Superintendent',
    'Commander',
    'Deputy Assistant Commisioner',
    'Assistant Commisioner',
    'Deputy Commisioner',
    'Commisioner',
]

const DISCORD_NITRO_MESSAGE_LENGTH = 4000
const MESSAGE_LENGTH = 2000

const COMMANDER_ROLES = ['OFC', 'TFC', 'SFC']

type OfficersType = {
    rank: string
    name: string
    fin: string
    commanderRank: string
}

type DeploymentOfficerType = {
    weapons: string[]
    discordId: string
    fin: string
    role: string
}

function processFmsData(fmsData: string) {
    const data = fmsData.trim()

    if (!data) return []

    const lines = data.split('\n')
    const officers: OfficersType[] = []

    let lineIndex = 0
    let commanderRank = ''

    for (const line of lines) {
        lineIndex++

        if (lineIndex < 7) continue

        const parts = line.split(',')

        console.log(`Processing line: ${parts[3]} ${parts[4]} ${parts[5]}`)

        const _commanderRank = parts[1].trim()

        if (COMMANDER_ROLES.includes(_commanderRank)) commanderRank = _commanderRank

        if (_commanderRank === 'AFO') commanderRank = ''

        const rank = parts[3].trim()

        if (!VALID_RANKS.includes(rank)) {
            console.log(`Invalid RANK on line ${lineIndex}: ${rank}`)

            continue
        }

        const name = parts[4].trim()
        const fin = parts[5].trim()

        if (fin === '' || fin === 'N/A') {
            console.log(`Missing FIN on line ${lineIndex}: ${line}`)

            continue
        }

        officers.push({
            rank: rank,
            name: name,
            fin: fin,
            commanderRank,
        })
    }

    return officers
}

function DeploymentLog() {
    const [deploymentReference, setDeploymentReference] = useState(localStorage.getItem('deployment-log:reference') || '')
    const [incidentDate, setIncidentDate] = useState(localStorage.getItem('deployment-log:incident-date') || '')
    const [timeOfFirstCall, setTimeOfFirstCall] = useState(localStorage.getItem('deployment-log:time-of-first-call') || '')
    const [incidentEndTime, setIncidentEndTime] = useState(localStorage.getItem('deployment-log:incident-end-time') || '')

    const [whoDeclared, setWhoDeclared] = useState(localStorage.getItem('deployment-log:who-declared') || '')
    const [timeDeclared, setTimeDeclared] = useState(localStorage.getItem('deployment-log:time-declared') || '')
    const [dfiRescinded, setDfiRescinded] = useState(localStorage.getItem('deployment-log:dfi-rescinded') || '')

    const [circumstances, setCircumstances] = useState(localStorage.getItem('deployment-log:circumstances') || '')

    const [tactics, setTactics] = useState<string[]>(JSON.parse(localStorage.getItem('deployment-log:tactics') || '[]'))
    const [offences, setOffences] = useState<string[]>(JSON.parse(localStorage.getItem('deployment-log:offences') || '[]'))

    const [showSettings, setShowSettings] = useState(false)
    const [fmsDataRaw, setFmsDataRaw] = useState('')
    const [processedFmsData, setProcessedFmsData] = useState('')

    const [officers, setOfficers] = useState<OfficersType[]>(JSON.parse(localStorage.getItem('deployment-log:officers:1') || '[]'))

    const [deploymentLog, setDeploymentLog] = useState('')

    const [hasNitro, setHasNitro] = useState(localStorage.getItem('deployment-log:has-nitro') === 'true' ? true : false)

    const [deploymentOfficers, setDeploymentOfficers] = useState<DeploymentOfficerType[]>(JSON.parse(localStorage.getItem('deployment-log:deployment-officers') || '[]'))
    const [deploymentOfficerFins, setDeploymentOfficerFins] = useState<string[]>([])

    const [circumstancesText] = useDebounce(circumstances, 500)

    const [messages, setMessages] = useState<string[]>([])

    useEffect(() => {
        localStorage.setItem('deployment-log:officers:1', JSON.stringify(officers))

        setProcessedFmsData(Object.entries(officers).map(([, o]) => `${o.commanderRank !== '' ? `[${o.commanderRank}] ` : ''}${o.rank} ${o.name} (${o.fin})`).join('\n'))
    }, [officers])

    useEffect(() => { localStorage.setItem('deployment-log:reference', deploymentReference) }, [deploymentReference])
    useEffect(() => { localStorage.setItem('deployment-log:incident-date', incidentDate) }, [incidentDate])
    useEffect(() => { localStorage.setItem('deployment-log:time-of-first-call', timeOfFirstCall) }, [timeOfFirstCall])
    useEffect(() => { localStorage.setItem('deployment-log:incident-end-time', incidentEndTime) }, [incidentEndTime])
    useEffect(() => { localStorage.setItem('deployment-log:who-declared', whoDeclared) }, [whoDeclared])
    useEffect(() => { localStorage.setItem('deployment-log:time-declared', timeDeclared) }, [timeDeclared])
    useEffect(() => { localStorage.setItem('deployment-log:dfi-rescinded', dfiRescinded) }, [dfiRescinded])
    useEffect(() => { localStorage.setItem('deployment-log:circumstances', circumstancesText) }, [circumstancesText])
    useEffect(() => { localStorage.setItem('deployment-log:tactics', JSON.stringify(tactics)) }, [tactics])
    useEffect(() => { localStorage.setItem('deployment-log:offences', JSON.stringify(offences)) }, [offences])
    useEffect(() => { localStorage.setItem('deployment-log:has-nitro', hasNitro === true ? 'true' : 'false') }, [hasNitro])
    useEffect(() => { localStorage.setItem('deployment-log:deployment-officers', JSON.stringify(deploymentOfficers)) }, [deploymentOfficers])

    useEffect(() => {
        setDeploymentOfficerFins(deploymentOfficers.map(officer => officer.fin))
    }, [deploymentOfficers])

    function processAndSave() {
        const officers = processFmsData(fmsDataRaw)

        setOfficers(officers)
        setFmsDataRaw('')
    }

    function generateDeploymentLog() {
        const parts: string[] = []

        if (deploymentReference) parts.push(`**Deployment Reference**: ${deploymentReference}`)

        parts.push('')

        if (incidentDate) parts.push(`**Incident Date**: ${incidentDate}`)
        if (timeOfFirstCall) parts.push(`**First Call Time**: ${timeOfFirstCall}`)
        if (incidentEndTime) parts.push(`**Incident End Time**: ${incidentEndTime}`)

        parts.push('')

        if (whoDeclared) parts.push(`**Who declared incident**: ${whoDeclared}`)

        if (timeDeclared) parts.push(`**Declared Time**: ${timeDeclared}`)
        if (dfiRescinded) parts.push(`**Rescinded Time**: ${dfiRescinded}`)

        parts.push('')

        if (deploymentOfficers.filter(officer => officer.role === 'sfc').length > 0) {
            parts.push(`**SFC**: ${deploymentOfficers.filter(officer => officer.role === 'sfc').map(officer => officer.fin).join(', ')}`)
        }

        if (deploymentOfficers.filter(officer => officer.role === 'tfc').length > 0) {
            parts.push(`**TFC**: ${deploymentOfficers.filter(officer => officer.role === 'tfc').map(officer => officer.fin).join(', ')}`)
        }

        if (deploymentOfficers.filter(officer => officer.role === 'ofc').length > 0) {
            parts.push(`**OFC**: ${deploymentOfficers.filter(officer => officer.role === 'ofc').map(officer => officer.fin).join(', ')}`)
        }

        if (deploymentOfficers.filter(officer => officer.role === 'afo').length > 0) {
            parts.push(`**AFO**: ${deploymentOfficers.filter(officer => officer.role === 'afo').map(officer => officer.fin).join(', ')}`)
        }

        parts.push('')

        if (tactics && tactics.length > 0) {
            parts.push(`**Tactics**:`)
            parts.push(tactics.join('\n'))
        }

        parts.push('')

        if (circumstancesText) {
            parts.push(`**Circumstances**:`)
            parts.push(circumstancesText)
        }

        parts.push('')

        if (offences && offences.length > 0) {
            parts.push(`**Offences**:`)
            parts.push(offences.join('\n'))
        }

        parts.push('')

        parts.push(`**Weapon Deployments**:`)

        deploymentOfficers.forEach((officer) => {
            parts.push(`**${officer.fin}**: ${officer.weapons.length > 0 ? officer.weapons.join(', ') : 'No weapons deployed'}`)
        })

        const deploymentFormatted = parts.join('\n')

        setDeploymentLog(deploymentFormatted)

        const messageLength = hasNitro ? DISCORD_NITRO_MESSAGE_LENGTH : MESSAGE_LENGTH
        const messages: string[] = []

        let currentMessage = ''

        const lines = deploymentFormatted.split('\n')

        lines.forEach((line) => {
            if (currentMessage.length + line.length + 1 > messageLength) {
                messages.push(currentMessage.trim())
                currentMessage = ''
            }

            currentMessage += line + '\n'
        })

        if (currentMessage.length > 0) {
            messages.push(currentMessage.trim())
        }

        setMessages(messages)

        console.log(`Generated ${messages.length} messages for deployment log.`)
    }

    function clear() {
        setDeploymentReference('')
        setIncidentDate('')
        setTimeOfFirstCall('')
        setIncidentEndTime('')
        setWhoDeclared('')
        setTimeDeclared('')
        setDfiRescinded('')
        setCircumstances('')
        setDeploymentLog('')
        setOffences([])
        setTactics([])
        setDeploymentOfficers([])
    }

    function addOfficer(fin: string) {
        const newOfficer: DeploymentOfficerType = {
            weapons: [],
            discordId: '',
            fin,
            role: 'afo',
        }

        setDeploymentOfficers((prev) => prev ? [...prev, newOfficer] : [newOfficer])
    }

    function removeOfficer(fin: string) {
        setDeploymentOfficers((prev) => {
            if (!prev) return []

            return prev.filter((officer) => officer.fin !== fin)
        })
    }

    function setDeploymentOfficerWeapon(fin: string, weapons: string[]) {
        setDeploymentOfficers((prev) => {
            if (!prev) return []

            return prev.map((officer) => {
                if (officer.fin === fin) {
                    return { ...officer, weapons }
                }

                return officer
            })
        })
    }

    function setDeploymentOfficerRole(fin: string, role: string) {
        setDeploymentOfficers((prev) => {
            if (!prev) return []

            return prev.map((officer) => {
                if (officer.fin === fin) {
                    return { ...officer, role }
                }

                return officer
            })
        })
    }

    // useEffect(() => {
    //     generateDeploymentLog()
    // }, [deploymentReference, incidentDate, timeOfFirstCall, incidentEndTime, whoDeclared, timeDeclared, dfiRescinded, circumstancesText, offences, tactics, deploymentOfficers])

    return <Card variant="outlined" sx={{ mb: 2 }}>
        <CardContent>
            <Typography color='secondary' gutterBottom variant='h5' component="div">
                Deployment Log
            </Typography>

            <Button sx={{ float: 'right' }} onClick={() => generateDeploymentLog()}>Generate Deployment Log</Button>
            <Button sx={{ float: 'right' }} onClick={() => clear()}>Clear</Button>
            <Button sx={{ float: 'right' }} onClick={() => setShowSettings(!showSettings)}>{showSettings ? 'Close' : 'Open'} Settings</Button>

            {showSettings && <>
                <FormGroup>
                    <FormControlLabel control={
                        <Switch
                            checked={hasNitro}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => { setHasNitro(event.target.checked) }} />}
                        label="Have Discord Nitro?"
                    />
                </FormGroup>

                <Grid container spacing={1}>
                    <Grid item xs={6}>
                        <TextField
                            label="FMS CSV"
                            multiline
                            margin='dense'
                            fullWidth
                            value={fmsDataRaw}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setFmsDataRaw(event.target.value)}
                        />

                        <Button color='info' sx={{ float: 'right' }} onClick={() => processAndSave()}>Process and save data</Button>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            label="Processed FMS Data"
                            multiline
                            margin='dense'
                            fullWidth
                            value={processedFmsData}
                            disabled={true}
                        />
                    </Grid>
                </Grid>
            </>}

            <Grid container spacing={1}>
                <Grid item xs={3}>
                    <TextField
                        label="Deployment Reference"
                        value={deploymentReference}
                        fullWidth
                        margin='dense'
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setDeploymentReference(event.target.value)}
                    />

                    <TextField
                        label="Incident Date"
                        value={incidentDate}
                        fullWidth
                        margin='dense'
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setIncidentDate(event.target.value)}
                    />

                    <TextField
                        label="Time of First Call"
                        value={timeOfFirstCall}
                        fullWidth
                        margin='dense'
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setTimeOfFirstCall(event.target.value)}
                    />

                    <TextField
                        label="Incident End Time"
                        value={incidentEndTime}
                        fullWidth
                        margin='dense'
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setIncidentEndTime(event.target.value)}
                    />

                    <FormControl fullWidth>
                        <InputLabel id="who-declared-incident">Who Declared Incident</InputLabel>
                        <Select
                            labelId="who-declared-incident"
                            id="who-declared-incident"
                            value={whoDeclared}
                            label="Who Declared Incident"
                            margin='dense'
                            onChange={(event: SelectChangeEvent) => setWhoDeclared(event.target.value)}
                        >
                            {officers.filter(officer => COMMANDER_ROLES.includes(officer.commanderRank)).map((officer) => (
                                <MenuItem key={officer.fin} value={officer.fin}>{`${officer.commanderRank !== '' ? `[${officer.commanderRank}] ` : ''}${officer.rank} ${officer.name} (${officer.fin})`}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <TextField
                        label="Declared Time"
                        value={timeDeclared}
                        fullWidth
                        margin='dense'
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setTimeDeclared(event.target.value)}
                    />

                    <TextField
                        label="Rescinded Time"
                        value={dfiRescinded}
                        fullWidth
                        margin='dense'
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setDfiRescinded(event.target.value)}
                    />

                    <Autocomplete
                        multiple
                        options={[]}
                        freeSolo
                        filterSelectedOptions
                        value={offences}
                        onChange={(event: any, value: string[]) => {
                            setOffences(value ? value : [])
                        }}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Offences"
                                placeholder="Offences"
                                margin='dense'
                            />
                        )}
                    />

                    <Autocomplete
                        multiple
                        options={[]}
                        freeSolo
                        filterSelectedOptions
                        value={tactics}
                        onChange={(event: any, value: string[]) => {
                            setTactics(value ? value : [])
                        }}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Tactics"
                                placeholder="Tactics"
                                margin='dense'
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={9}>
                    <TextField
                        label="Circumstances"
                        multiline
                        margin='dense'
                        fullWidth
                        minRows={19}
                        value={circumstances}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setCircumstances(event.target.value)}
                    />

                    {deploymentOfficers && deploymentOfficers.map((officer, index) => (
                        <Grid container spacing={1} key={officer.fin}>
                            <Grid item xs={2}>
                                <TextField
                                    label="Officer"
                                    value={officer.fin}
                                    fullWidth
                                    margin='dense'
                                    disabled={true}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                {officer.fin !== '' && <Autocomplete
                                    multiple
                                    options={['SIG MCX (Not discharged)', 'GLOCK 17 GEN5 (Discharged)']}
                                    freeSolo
                                    filterSelectedOptions
                                    value={officer.weapons}
                                    disabled={officer.fin === ''}
                                    onChange={(event: any, value: string[]) => {
                                        setDeploymentOfficerWeapon(officer.fin, value)
                                    }}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            label="Weapons"
                                            placeholder="Weapons"
                                            margin='dense'
                                        />
                                    )}
                                />}
                            </Grid>
                            <Grid item xs={3}>
                                {officer.fin !== '' && <FormControl margin='normal' fullWidth>
                                    <RadioGroup aria-labelledby="role" name="role" row value={officer.role} onChange={(event: React.ChangeEvent<HTMLInputElement>) => { setDeploymentOfficerRole(officer.fin, event.target.value) }}>
                                        <FormControlLabel value="sfc" control={<Radio size="small" disabled={officer.fin === ''} />} label="SFC" />
                                        <FormControlLabel value="tfc" control={<Radio size="small" disabled={officer.fin === ''} />} label="TFC" />
                                        <FormControlLabel value="ofc" control={<Radio size="small" disabled={officer.fin === ''} />} label="OFC" />
                                        <FormControlLabel value="afo" control={<Radio size="small" disabled={officer.fin === ''} />} label="AFO" />
                                    </RadioGroup>
                                </FormControl>}
                            </Grid>
                            <Grid item xs={1}>
                                <Button onClick={() => removeOfficer(officer.fin)}>Remove</Button>
                            </Grid>
                        </Grid>
                    ))}

                    <Grid container spacing={1}>
                        <Grid item xs={3}>
                            <FormControl fullWidth>
                                <InputLabel id="officer">Officer</InputLabel>
                                <Select
                                    labelId="officer"
                                    id="officer"
                                    value={''}
                                    label="Officer"
                                    margin='dense'
                                    onChange={(event: SelectChangeEvent) => addOfficer(event.target.value)}
                                >
                                    {
                                        officers
                                            .filter(o => deploymentOfficerFins.includes(o.fin) === false)
                                            .map((o) => (
                                                <MenuItem key={o.fin} value={o.fin}>{`${o.commanderRank !== '' ? `[${o.commanderRank}] ` : ''}${o.rank} ${o.name} (${o.fin})`}</MenuItem>
                                            ))
                                    }
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            {deploymentLog !== '' && <>
                <Divider sx={{ mt: 3, mb: 3 }}><Chip label="Generated Deployment Log" size="small" /></Divider>

                <Button sx={{ float: 'right' }} onClick={() => generateDeploymentLog()}>Generate Deployment Log</Button>

                {messages.map((message, index) => <TextField
                    key={index}
                    label={`Message ${index + 1} (${message.length} characters)`}
                    multiline
                    margin='dense'
                    fullWidth
                    value={message}
                    disabled={true}
                />)}
            </>}
        </CardContent>
    </Card >
}

export default DeploymentLog