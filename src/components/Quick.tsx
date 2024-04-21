// Quick.tsx
import "./quick.css";
import searchIcon from "../starter-code/assets/desktop/icon-search.svg";
import locationIcon from "../starter-code/assets/desktop/icon-location.svg";
import React, { useState } from "react";
import Fbutton from "./Fbutton";
import filterIcon from "../starter-code/assets/mobile/icon-filter.svg";
import searchIconn from "../assets/images/Search Icon.svg";

interface QuickProps {
  setFilteredJobs?: React.Dispatch<React.SetStateAction<any[]>>;
  allJobs?: any[];
}

function Quick({ setFilteredJobs, allJobs }: QuickProps) {
  const [checked, setChecked] = useState(false);
  const [searchTitle, setSearchTitle] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleOpenFiletr = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handleSearch = () => {
    if (allJobs) {
      let filteredJobs = allJobs.filter((job) => {
        const titleMatch =
          !searchTitle ||
          job.title.toLowerCase().includes(searchTitle.toLowerCase()) ||
          job.company.toLowerCase().includes(searchTitle.toLowerCase());
        const locationMatch =
          !searchLocation ||
          job.country.toLowerCase().includes(searchLocation.toLowerCase());
        const jobTypeMatch =
          !checked || job.jobType.toLowerCase() === "full time";

        if (!searchTitle && !searchLocation && !checked) {
          return true;
        }

        if (searchTitle && titleMatch) {
          return true;
        }
        if (searchLocation && locationMatch) {
          return true;
        }
        if (checked && jobTypeMatch) {
          return true;
        }

        if (searchTitle && searchLocation && titleMatch && locationMatch) {
          return true;
        }
        if (searchTitle && checked && titleMatch && jobTypeMatch) {
          return true;
        }
        if (searchLocation && checked && locationMatch && jobTypeMatch) {
          return true;
        }

        return false;
      });

      if (setFilteredJobs) {
        setFilteredJobs(filteredJobs);
      }
    }
  };

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
          placeholder="Filter by title…"
          value={searchTitle}
          onChange={(e) => setSearchTitle(e.target.value)}
        />
      </div>
      <div className="filterIn">
        <img className="Licon" src={locationIcon} />
        <input
          className="searchInputL"
          type="text"
          placeholder="Filter by location…"
          value={searchLocation}
          onChange={(e) => setSearchLocation(e.target.value)}
        />
        <img
          onClick={handleOpenFiletr}
          className="filterI"
          src={filterIcon}
          alt=""
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
          <label className="Qlable">Full Time</label>
        </div>
        <button className="searchBut">
          <img onClick={handleSearch} className="seaar" src={searchIconn} alt="" />
        </button>
        <div className="fBut">
          <Fbutton buttonText="Search" onClick={handleSearch} />
        </div>
      </div>

      <div
        onClick={handleOpenFiletr}
        className={isFilterOpen ? "mobileSearch" : "not"}
      >
        <div className="mobb" onClick={(e) => e.stopPropagation()}>
          <div className="Smobile">
            <img className="Micon" src={locationIcon} />
            <input
              className="searchInputM"
              type="text"
              placeholder="Filter by location…"
              value={searchLocation}
              onChange={(e) => setSearchLocation(e.target.value)}
            />
          </div>
          <div className="chee">
            <input
              type="checkbox"
              checked={checked}
              onChange={handleCheckboxChange}
              className="Cminput"
            />
            <label className="Qmlable">Full Time Only</label>
          </div>
          <div className="mBut">
            <button
              className="mmbut"
              onClick={() => {
                handleSearch();
                handleOpenFiletr();
              }}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quick;
