import Button from '@mui/material/Button'
import { ButtonGroup, Card, CardContent, TextField, Typography } from '@mui/material'
import { useEffect, useState } from 'react'

function formatDateToDDMMYY(date: Date): string {
    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const year = String(date.getFullYear()).slice(-2)

    return `${day}/${month}/${year}`
}

function formatTimeToHHMM(date: Date, anotherDay: boolean): string {
    const hours = String(date.getHours()).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')

    if (!anotherDay) return `${hours}:${minutes}`

    return `${formatDateToDDMMYY(date)} @ ${hours}:${minutes}`
}

function FMSGenerator() {
    const [showSettings, setShowSettings] = useState(false)
    const [retrievalTime, setRetrievalTime] = useState<Date | undefined>(localStorage.getItem('retrievalTime') ? new Date(localStorage.getItem('retrievalTime')!) : undefined)
    const [handInTime, setHandInTime] = useState<Date | undefined>()
    const [fms, setFms] = useState('')
    const [fin, setFin] = useState(localStorage.getItem('fin') || '')
    const [username, setUsername] = useState(localStorage.getItem('username') || '')
    const [weapons, setWeapons] = useState(localStorage.getItem('weapons') || 'Glock 17 Gen5, Taser X2, SIG MCX, H&K L104A1 Baton Launcher, EFT Benelli')

    const retrieveAction = () => {
        localStorage.setItem('retrievalTime', new Date().toISOString())

        setRetrievalTime(new Date())
    }

    const handInAction = () => {
        setHandInTime(new Date())
    }

    const resetAction = () => {
        setRetrievalTime(undefined)
        setHandInTime(undefined)
    }

    useEffect(() => {
        if (!retrievalTime) {
            setFms('')

            return
        }

        setFms([
            `**Name**: @${username}`,
            `**FIN**: ${fin}`,
            `**Date**: ${formatDateToDDMMYY(retrievalTime)}`,
            `**Weapons Retrieval Time**: ${formatTimeToHHMM(retrievalTime, false)}`,
            `**Weapons Hand in Time**: ${handInTime ? formatTimeToHHMM(handInTime, retrievalTime.getDay() !== handInTime.getDay()) : ''}`,
            `**Weapon Set Deployment**: ${weapons}`,
        ].join(`\n`).replace('            ', ''))
    }, [retrievalTime, handInTime, fin, username, weapons])

    useEffect(() => {
        if (fin) localStorage.setItem('fin', fin)
    }, [fin])

    useEffect(() => {
        if (username) localStorage.setItem('username', username)
    }, [username])

    useEffect(() => {
        if (weapons) localStorage.setItem('weapons', weapons)
    }, [weapons])

    useEffect(() => {
        if (retrievalTime)
            localStorage.setItem('retrievalTime', retrievalTime.toISOString())
        else
            localStorage.removeItem('retrievalTime')
    }, [retrievalTime])

    return <Card variant="outlined" sx={{ mb: 2 }}>
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                FMS Generator
            </Typography>

            {showSettings && <>
                <TextField
                    label="Force Identification Number"
                    value={fin}
                    fullWidth
                    margin='normal'
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setFin(event.target.value)
                    }}
                />

                <TextField
                    label="Username"
                    value={username}
                    fullWidth
                    margin='normal'
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setUsername(event.target.value)
                    }}
                />

                <TextField
                    label="Weapons"
                    value={weapons}
                    fullWidth
                    margin='normal'
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setWeapons(event.target.value)
                    }}
                />
            </>}

            <ButtonGroup variant="contained">
                {!retrievalTime && <Button onClick={() => retrieveAction()}>Retrieve</Button>}

                {retrievalTime && <Button onClick={() => handInAction()}>Hand In</Button>}
                {fms && <Button onClick={() => navigator.clipboard.writeText(fms)}>Copy</Button>}
                {retrievalTime && <Button color='error' onClick={() => resetAction()}>Reset</Button>}
            </ButtonGroup>

            <Button sx={{ float: 'right' }} onClick={() => setShowSettings(!showSettings)}>{showSettings ? 'Close' : 'Open'} Settings</Button>

            {fms && <TextField
                label="FMS"
                multiline
                margin='normal'
                rows={6}
                fullWidth
                value={fms}
                spellCheck={false}
                autoComplete='off'
                autoCorrect='off'
                autoCapitalize='off'
                disabled={true}
            />}
        </CardContent>
    </Card>
}

export default FMSGenerator