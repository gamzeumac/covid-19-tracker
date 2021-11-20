import React from 'react';
import "./style.css";
import CoronavirusIcon from '@mui/icons-material/Coronavirus';

function Header() {
    return (
        <div className="header">
            <h1>C <CoronavirusIcon className="icon"></CoronavirusIcon> vid-19</h1>
            <h5>Global and Country Wise Casesof Corona Virus</h5>
            <div className="parantez">(For a Particular select a Country from below)</div>
        </div>
    )
}

export default Header;
