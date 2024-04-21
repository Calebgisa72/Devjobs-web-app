import { useEffect, useState } from "react";
import Header from "./Header";
import "./home.css";
import Jhead from "./Jhead";
import "./single.css";
import Fbutton from "./Fbutton";
import Details from "./Details";

interface SingleProps {
  isLight: boolean;
  toggleTheme: () => void;
  filteredJobs: any[];
  selectedIndex: number;
}

function SingleJob({ isLight, toggleTheme, filteredJobs, selectedIndex }: SingleProps) {
  const [jobToDisplay, setJobToDisplay] = useState<any>(null);

  useEffect(() => {
    const selectedJob = filteredJobs[selectedIndex];
    if (selectedJob) {
      localStorage.setItem("selectedJob", JSON.stringify(selectedJob));
    }
  }, [filteredJobs, selectedIndex]);

  useEffect(() => {
    const job = localStorage.getItem("selectedJob");
    if (job) {
      try {
        const parsedJob = JSON.parse(job);
        setJobToDisplay(parsedJob);
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    } else {
      console.error("No 'selectedJob' data found in localStorage");
    }
  }, []);

  return (
    <>
      <div className="ggg">
      <div>
      {jobToDisplay && (<Header isLight={isLight} toggleTheme={toggleTheme} component={() => <Jhead image={jobToDisplay.logo} companyName={jobToDisplay.company} webLink={jobToDisplay.webLink}/>} />)}
      </div>
        {jobToDisplay && (
          <>
            <div className="boodd">
              <div className="topppp">
              <div className="tl">
                <div className='smallDetails'>
                    <div className='Htime'>{jobToDisplay.posted}</div>
                    <span>&#183;</span>
                    <div className='Ctype'>{jobToDisplay.jobType}</div>
                </div>

                <div className='Ptitle tttt'>{jobToDisplay.title}</div>
                <div className='Hcountry'>{jobToDisplay.country}</div>
              </div>
                <Fbutton buttonText="Apply Now" onClick={()=>{console.log("Apply")}}/>
              </div>
              
              <div className="Sdesc">
                {jobToDisplay.description}
              </div>

              <div>
                <Details title="Requirements" description={jobToDisplay.requirments?.description} items={jobToDisplay.requirments?.item}/>
              </div>

              <div>
                <Details title="What You Will Do" description={jobToDisplay.whatToDo?.description} items={jobToDisplay.whatToDo?.item}/>
              </div>
            </div>

            <div className="foooter">
              <div>
              <div className='Ptitle tttt fRemove'>{jobToDisplay.title}</div>
              </div>

              <div>
                <Fbutton buttonText="Apply Now" onClick={()=>{console.log("Apply")}}/>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default SingleJob;
