import React, { useEffect} from 'react';

import { useSelector, useDispatch } from 'react-redux';
import CountUp from "react-countup";

import { fetchValues } from "../../redux/valuesSlice";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { red } from '@mui/material/colors';


function Card1({country, countryInfo}) {
  const data = useSelector((state) => state.covidvalues.values);
  const isLoading = useSelector((state) => state.isLoading);
  const error = useSelector((state) => state.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchValues())
  }, [dispatch])
  console.log(data, "data");
  console.log(countryInfo, "countryInfo");
  
  

  if (isLoading) {
    return <div>Loading..</div>
  }
  if (error) {
    return <div>Error:{error} </div>
  }

  return (
    <Box >
      <Card  sx={{  bgcolor: red[100] }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Deaths
          </Typography>
          <Typography variant="h5" component="div">
            {(country === 'worldwide' ? (
               <CountUp
                  start={0}
                  end={data?.deaths?.value}
                  duration={2}
                  separator=","
              />) :
               (<CountUp
                  start={0}
                  end={countryInfo?.deaths?.value}
                  duration={2}
                  separator=","
                />)
            )}
          </Typography>
          <Typography sx={{ mb: 1}} color="text.secondary">
            Last Updated at :  {new Date(data.lastUpdate).toDateString()}  {new Date(data.lastUpdate).toLocaleTimeString()}
          </Typography>
          <Typography sx={{ mb: 1 }} color="text.secondary">
            {new Date(data.lastUpdate).toLocaleTimeString()}
          </Typography>
          <Typography variant="body2">
            Number of deaths caused by COVID-19 <strong> {country} </strong>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  )
}

export default Card1;
