import React, { useState } from 'react';
import {
  Box,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  TextField,
  Button,
  Typography,
} from '@mui/material';

const LegislationTable = () => {
  const [rows, setRows] = useState([
    {
      act: 'Police and Criminal Evidence Act 1984',
      section: 'Section 1',
      title: 'Power of constable to stop and search persons, vehicles etc',
      link: 'https://www.legislation.gov.uk/ukpga/1984/60/section/1',
    },
    {
      act: 'Police and Criminal Evidence Act 1984',
      section: 'Section 17',
      title: 'Entry for purpose of arrest, executing a warrant and to protect life and limb',
      link: 'https://www.legislation.gov.uk/ukpga/1984/60/section/17',
    },
    {
      act: 'Police and Criminal Evidence Act 1984',
      section: 'Section 18',
      title: 'Entry and search after arrest',
      link: 'https://www.legislation.gov.uk/ukpga/1984/60/section/18',
    },
    {
      act: 'Police and Criminal Evidence Act 1984',
      section: 'Section 19',
      title: 'General power of seizure',
      link: 'https://www.legislation.gov.uk/ukpga/1984/60/section/19',
    },
    {
      act: 'Police and Criminal Evidence Act 1984',
      section: 'Section 32',
      title: 'Search upon arrest',
      link: 'https://www.legislation.gov.uk/ukpga/1984/60/section/32',
    },
    {
      act: 'Misuse of Drugs Act 1971',
      section: 'Section 4',
      title: 'Restriction of production and supply of controlled drugs',
      link: 'https://www.legislation.gov.uk/ukpga/1971/38/section/4',
    },
    {
      act: 'Misuse of Drugs Act 1971',
      section: 'Section 5',
      title: 'Restriction of possession of controlled drugs',
      link: 'https://www.legislation.gov.uk/ukpga/1971/38/section/5',
    },
    {
      act: 'Misuse of Drugs Act 1971',
      section: 'Section 23',
      title: 'Powers to search and obtain evidence',
      link: 'https://www.legislation.gov.uk/ukpga/1971/38/section/23',
    },
    {
        act: 'Road Traffic Act 1988',
        section: 'Section 5',
        title: 'Driving or being in charge of a motor vehicle with alcohol concentration above prescribed limit',
        link: 'https://www.legislation.gov.uk/ukpga/1988/52/section/5',
    },
    {
        act: 'Road Traffic Act 1988',
        section: 'Section 40a',
        title: 'Using vehicle in dangerous condition etc',
        link: 'https://www.legislation.gov.uk/ukpga/1988/52/section/40A',
    },
    {
        act: 'Road Traffic Act 1988',
        section: 'Section 87',
        title: 'Drivers of motor vehicles to have driving licences',
        link: 'https://www.legislation.gov.uk/ukpga/1988/52/section/87',
    },
    {
      act: 'Road Traffic Act 1988',
      section: 'Section 163',
      title: 'Power of police to stop vehicles',
      link: 'https://www.legislation.gov.uk/ukpga/1988/52/section/163',
    },
    {
        act: 'Road Traffic Act 1988',
        section: 'Section 164',
        title: 'Power of constables to require production of driving licence and in certain cases statement of date of birth',
        link: 'https://www.legislation.gov.uk/ukpga/1988/52/section/164',
    },
    {
        act: 'Road Traffic Act 1988',
        section: 'Section 165',
        title: 'Power of constables to obtain names and addresses of drivers and others, and to require production of evidence of insurance and test certificates',
        link: 'https://www.legislation.gov.uk/ukpga/1988/52/section/165',
    },
    {
        act: 'Road Traffic Act 1988',
        section: 'Section 165a',
        title: 'Power to seize vehicles driven without licence or insurance',
        link: 'https://www.legislation.gov.uk/ukpga/1988/52/section/165A',
    },
    {
        act: 'Road Traffic Act 1988',
        section: 'Section 168',
        title: 'Failure to give, or giving false, name and address in case of reckless or careless or inconsiderate driving or cycling',
        link: 'https://www.legislation.gov.uk/ukpga/1988/52/section/168',
    },
    {
        act: 'Road Traffic Act 1988',
        section: 'Section 170',
        title: 'Duty of driver to stop, report accident and give information or documents',
        link: 'https://www.legislation.gov.uk/ukpga/1988/52/section/170',
    },
    {
        act: 'Firearms Act 1968',
        section: 'Section 1',
        title: 'Requirement of firearm certificate',
        link: 'https://www.legislation.gov.uk/ukpga/1968/27/section/1',
    },
    {
        act: 'Firearms Act 1968',
        section: 'Section 16',
        title: 'Possession of firearm with intent to injure',
        link: 'https://www.legislation.gov.uk/ukpga/1968/27/section/16',
    },
    {
        act: 'Firearms Act 1968',
        section: 'Section 16a',
        title: 'Possession of firearm with intent to cause fear of violence',
        link: 'https://www.legislation.gov.uk/ukpga/1968/27/section/16A',
    },
    {
        act: 'Firearms Act 1968',
        section: 'Section 17',
        title: 'Use of firearm to resist arrest',
        link: 'https://www.legislation.gov.uk/ukpga/1968/27/section/17',
    },
    {
        act: 'Firearms Act 1968',
        section: 'Section 18',
        title: 'Carrying firearm with criminal intent',
        link: 'https://www.legislation.gov.uk/ukpga/1968/27/section/18',
    },
    {
        act: 'Firearms Act 1968',
        section: 'Section 19',
        title: 'Carrying firearm in a public place',
        link: 'https://www.legislation.gov.uk/ukpga/1968/27/section/19',
    },
    {
        act: 'Firearms Act 1968',
        section: 'Section 46',
        title: 'Power of search with warrant',
        link: 'https://www.legislation.gov.uk/ukpga/1968/27/section/46',
    },
    {
        act: 'Firearms Act 1968',
        section: 'Section 47',
        title: 'Powers of constables to stop and search',
        link: 'https://www.legislation.gov.uk/ukpga/1968/27/section/47',
    },
    {
        act: 'Theft Act 1968',
        section: 'Section 1',
        title: 'Theft',
        link: 'https://www.legislation.gov.uk/ukpga/1968/60/section/1',
    },
    {
        act: 'Theft Act 1968',
        section: 'Section 8',
        title: 'Robbery',
        link: 'https://www.legislation.gov.uk/ukpga/1968/60/section/8',
    },
    {
        act: 'Theft Act 1968',
        section: 'Section 9',
        title: 'Burglary',
        link: 'https://www.legislation.gov.uk/ukpga/1968/60/section/9',
    },
    {
        act: 'Theft Act 1968',
        section: 'Section 10',
        title: 'Aggravated burglary',
        link: 'https://www.legislation.gov.uk/ukpga/1968/60/section/10',
    },
    {
        act: 'Theft Act 1968',
        section: 'Section 12',
        title: 'Taking motor vehicle or other conveyance without authority',
        link: 'https://www.legislation.gov.uk/ukpga/1968/60/section/12',
    },
    {
        act: 'Theft Act 1968',
        section: 'Section 12a',
        title: 'Aggravated vehicle-taking',
        link: 'https://www.legislation.gov.uk/ukpga/1968/60/section/12A',
    },
    {
        act: 'Theft Act 1968',
        section: 'Section 22',
        title: 'Handling stolen goods',
        link: 'https://www.legislation.gov.uk/ukpga/1968/60/section/22',
    },
    {
        act: 'Theft Act 1968',
        section: 'Section 25',
        title: 'Going equipped for stealing, etc',
        link: 'https://www.legislation.gov.uk/ukpga/1968/60/section/25',
    },
    {
      act: 'Criminal Justice Act 1988',
      section: 'Section 139',
      title: 'Offence of having article with blade or point in public place',
      link: 'https://www.legislation.gov.uk/ukpga/1988/33/section/139',
    },
    {
        act: 'Offences against the Person Act 1861',
        section: 'Section 16',
        title: 'Threats to kill',
        link: 'https://www.legislation.gov.uk/ukpga/Vict/24-25/100/section/16',
    },
    {
        act: 'The Air Navigation Order 2016',
        section: 'Section 1',
        title: 'Endangering safety of an aircraft',
        link: 'https://www.legislation.gov.uk/uksi/2016/765/part/10/chapter/1',
    },
  ]);

  const [searchQuery, setSearchQuery] = useState('');

  const filteredRows = rows.filter(
    (row) =>
      row.act.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.section.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Paper style={{ padding: 16 }}>
      <TextField
        label="Search"
        variant="outlined"
        fullWidth
        margin="normal"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <TableContainer
        style={{
          maxHeight: '70vh', // Set a fixed height
          overflowY: 'auto', // Enable vertical scrolling
        }}
      >
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography color="primary" variant="h6">
                  Section
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="primary" variant="h6">
                  Act
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="primary" variant="h6">
                  Title
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="primary" variant="h6">
                  Actions
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.section}</TableCell>
                <TableCell>{row.act}</TableCell>
                <TableCell>{row.title}</TableCell>
                <TableCell>
                  <Button
                    color="secondary"
                    variant="outlined"
                    onClick={() => window.open(row.link, '_blank', 'noopener,noreferrer')}
                  >
                    Open Link
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default LegislationTable;
