import React from 'react';
import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';
import Card4 from './Card4';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  

function Main({country, countryInfo, fetchData}) {
 
    return (
        <Box sx={{ flexGrow: 1 }} style={{margin: 80}}>
        <Grid container spacing={8}>
          <Grid item xs={3}>
            <Item> <Card1 country={country} countryInfo={countryInfo} /> </Item>
          </Grid>
          <Grid item xs={3}>
            <Item> <Card2 country={country} countryInfo={countryInfo} /> </Item>
          </Grid>
          <Grid item xs={3}>
            <Item> <Card3 country={country} countryInfo={countryInfo}/> </Item>
          </Grid>
          <Grid item xs={3}>
            <Item> <Card4 country={country} countryInfo={countryInfo} fetchData={fetchData} /> </Item>
          </Grid>
        </Grid>
      </Box>
    )
}

export default Main
