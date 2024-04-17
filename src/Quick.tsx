import "./quick.css";
import searchIcon from "./starter-code/assets/desktop/icon-search.svg";
import locationIcon from "./starter-code/assets/desktop/icon-location.svg";
import React, { useState } from 'react';
import Fbutton from "./Fbutton";


function Quick() {
    const [checked, setChecked] = useState(false);

    const handleCheckboxChange = () => {
        setChecked(!checked);
    };
  return (
    <div className="Qall">
      <div className="seachIn">
        <img className="Sicon" src={searchIcon} />
        <input
          className="searchInput"
          type="text"
          placeholder="Filter by title, companies, expertise…"
        />
      </div>
      <div className="filterIn">
        <img className="Licon" src={locationIcon} />
        <input
          className="searchInput"
          type="text"
          placeholder="Filter by location…"
        />
      </div>
      <div className="checkIn">
            <div className="cheeck"> 
            <input 
                type="checkbox" 
                checked={checked} 
                onChange={handleCheckboxChange} 
                className="Cinput"
            />
            <label className="Qlable">Full Time Only</label>
            </div>
            <Fbutton buttonText="Search"/>
      </div>
    </div>
  );
}

export default Quick;
