import React, { useState, useEffect } from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllCounties} from "../../redux/contriesSlice";
import Main from "../Main";
import  "./style.css";
import Chart from '../Chart';
import axios from 'axios';


function Drop() {
  const dispatch = useDispatch();
  const [country, setCountry] = useState("worldwide");
  const [countryInfo, setCountryInfo] = useState({});
  const [fetchdata, setFetchdata]=useState()

  const data = useSelector((state) => state.countries.items);
  const url = "https://covid19.mathdro.id/api";

  const fetchData = async (country) => {
    let changeableUrl = url;
    if (country) {
      changeableUrl = `${url}/countries/${country}`;
    }
  
    try {
      const {
        data: { confirmed, recovered, deaths, lastUpdate },
      } = await axios.get(changeableUrl);
  
      return {
        confirmed,
        recovered,
        deaths,
        lastUpdate,
      };
    } catch (error) {
      console.log(error);
    }
  };
  const handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    setFetchdata(fetchedData);
  };
 
  
  useEffect(() => {
    dispatch(fetchAllCounties())
    handleCountryChange();

  }, [dispatch]);
  const onCountryChange = async (e) => {
    const countryCode = e.target.value;
    const url =
      countryCode === "worldwide"
        ? "https://covid19.mathdro.id/api/countries"
        : `https://covid19.mathdro.id/api/countries/${countryCode}`;
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCountry(countryCode);
        setCountryInfo(data);
      });
  };
  return (
    <div>
      <Main country={country} countryInfo={countryInfo} fetchData={fetchData}/>
      <Select
      className="select"
        variant="outlined"
        value={country}
        onChange={onCountryChange}
      >
        <MenuItem value="worldwide">Worldwide</MenuItem>
        {data.map((country,key) => (
          <MenuItem value={country.countryInfo.iso2} key={key}>{country.country} </MenuItem>
        ))}
      </Select>
      <Chart country={country} fetchdata={fetchdata} countryInfo={countryInfo}/>

    </div>
  )
}

export default Drop;
