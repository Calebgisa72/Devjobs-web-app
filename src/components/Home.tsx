import "./home.css";
import Quick from './Quick';
import React, { useState } from "react";
import Header from "./Header";
import Hcard from "./Hcard";
import Fbutton from "./Fbutton";

interface HomeProps {
  isLight: boolean;
  toggleTheme: () => void;
  filteredJobs: any[];
  setFilteredJobs: React.Dispatch<React.SetStateAction<any[]>>;
  allJobs: any[];
  setSelectedIndex: (index: number) => void;
}

function Home({isLight, toggleTheme, filteredJobs, setFilteredJobs,allJobs,setSelectedIndex}: HomeProps) {
  const [displayedJobs, setDisplayedJobs] = useState(9);

  const loadMore = () => {
      setDisplayedJobs((prevDisplayedJobs) => prevDisplayedJobs + 3);
  };

  return (
      <div className="homme">
          <div className="heeder">
              <Header isLight={isLight} toggleTheme={toggleTheme} component={() => <Quick setFilteredJobs={setFilteredJobs} allJobs={allJobs} />}/>
          </div>
          <div className="allItems">
              {filteredJobs.slice(0, displayedJobs).map((job, index) => (
                  <Hcard
                      key={index} 
                      indexx={index}
                      image={job.logo}
                      posted={job.posted}
                      type={job.jobType}
                      title={job.title}
                      company={job.company}
                      country={job.country}
                      setSelectedIndex={setSelectedIndex}
                  />
              ))}
          </div>
          <div className="load">
              {displayedJobs < filteredJobs.length && (
                  <div className="loadButton">
                      <Fbutton buttonText="Load More" onClick={loadMore} />
                  </div>
              )}
          </div>
      </div>
  );
}

export default Home;
