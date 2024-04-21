import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import SingleJob from './components/SingleJob';
import scoot from "./starter-code/assets/logos/scoot.svg";
import blogr from "./starter-code/assets/logos/blogr.svg";
import vector from "./starter-code/assets/logos/vector.svg";
import officelite from "./starter-code/assets/logos/officelite.svg";
import pod from "./starter-code/assets/logos/pod.svg";
import creative from "./starter-code/assets/logos/creative.svg";
import poromodo from './starter-code/assets/logos/pomodoro.svg';
import maker from './starter-code/assets/logos/maker.svg';
import coffeeRoaster from './starter-code/assets/logos/coffeeroasters.svg';
import maatercraft from './starter-code/assets/logos/mastercraft.svg';
import crownFund from './starter-code/assets/logos/crowdfund.svg';
import typeMaster from './starter-code/assets/logos/typemaster.svg';

interface jobProps{
    logo: string;
    posted: string;
    jobType: string;
    title: string;
    company: string;
    country: string;
    description?: string;
    webLink?: string;
    requirments?: {
      description: string;
      item: Array<string>
    }
    whatToDo?: {
      description: string;
      item: Array<string>
    }
}
function App() {
    const [isLight, setTheme] = useState<boolean>(true);
    const [filteredJobs, setFilteredJobs] = useState<Array<jobProps>>([]);

    const [allJ,setAllj] = useState<Array<jobProps>>([]);
    const [selectedIndex,setSelectedIndex] = useState(0);

  useEffect(() => {
  const allJobs: Array<jobProps> = [
        {
          logo: scoot,
          posted: "5h ago",
          jobType: "Full Time",
          title: "Senior Software Engineer",
          company: "Scoot",
          country: "United Kingdom",
          webLink:"scoot.com",
          description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.",
          requirments: {
            description: "Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis libero dolor a purus. Sed vel lacus. Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus. Nunc tellus ante, mattis eget, gravida vitae, ultricies ac, leo. Integer leo pede, ornare a, lacinia eu, vulputate vel, nisl.",
            item: ["Morbi interdum mollis sapien. Sed", "Phasellus lacinia magna a ullamcorper laoreet, lectus arcu pulvinar risus", "Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus.", "Morbi interdum mollis sapien. Sed"]
          },
          whatToDo: {
            description: "Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.",
            item: ["Morbi interdum mollis sapien. Sed", "Phasellus lacinia magna a ullamcorper laoreet, lectus arcu pulvinar risus", "Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus.", "Morbi interdum mollis sapien. Sed"]
          }
        },
        {
          logo: blogr,
          posted: "20h ago",
          jobType: "Part Time",
          title: "Haskell and PureScript Dev",
          company: "Blogr",
          country: "United States",
          description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.",
          requirments: {
            description: "Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis libero dolor a purus. Sed vel lacus. Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus. Nunc tellus ante, mattis eget, gravida vitae, ultricies ac, leo. Integer leo pede, ornare a, lacinia eu, vulputate vel, nisl.",
            item: ["Morbi interdum mollis sapien. Sed", "Phasellus lacinia magna a ullamcorper laoreet, lectus arcu pulvinar risus", "Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus.", "Morbi interdum mollis sapien. Sed"]
          },
          whatToDo: {
            description: "Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.",
            item: ["Morbi interdum mollis sapien. Sed", "Phasellus lacinia magna a ullamcorper laoreet, lectus arcu pulvinar risus", "Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus.", "Morbi interdum mollis sapien. Sed"]
          }
        },
        {
          logo: vector,
          posted: "1d ago",
          jobType: "Part Time",
          title: "Midlevel Back End Engineer ",
          company: "Vector",
          country: "Russia",
          description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.",
          requirments: {
            description: "Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis libero dolor a purus. Sed vel lacus. Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus. Nunc tellus ante, mattis eget, gravida vitae, ultricies ac, leo. Integer leo pede, ornare a, lacinia eu, vulputate vel, nisl.",
            item: ["Morbi interdum mollis sapien. Sed", "Phasellus lacinia magna a ullamcorper laoreet, lectus arcu pulvinar risus", "Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus.", "Morbi interdum mollis sapien. Sed"]
          },
          whatToDo: {
            description: "Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.",
            item: ["Morbi interdum mollis sapien. Sed", "Phasellus lacinia magna a ullamcorper laoreet, lectus arcu pulvinar risus", "Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus.", "Morbi interdum mollis sapien. Sed"]
          }
        },
        {
          logo: officelite,
          posted: "2d ago",
          jobType: "Full Time",
          title: "Senior Application Engineer",
          company: "Office Lite",
          country: "Japan",
        },
        {
          logo: pod,
          posted: "2d ago",
          jobType: "Part Time",
          title: "Remote DevOps Engineer",
          company: "Pod",
          country: "Thailand",
        },
        {
          logo: creative,
          posted: "4d ago",
          jobType: "Part Time",
          title: "Desktop Support Manager",
          company: "Creative",
          country: "Germany",
        },
        {
          logo: poromodo,
          posted: "1w ago",
          jobType: "Full Time",
          title: "iOS Engineer",
          company: "Pomodoro",
          country: "United States",
        },
        {
          logo: maker,
          posted: "1w ago",
          jobType: "Full Time",
          title: "Senior EJB Developer",
          company: "Maker",
          country: "United States",
        },
        {
          logo: coffeeRoaster,
          posted: "1w ago",
          jobType: "Part Time",
          title: "Senior Frontend Developer ",
          company: "Coffeeroasters",
          country: "Singapore",
        },
        {
          logo: maatercraft,
          posted: "2w ago",
          jobType: "Freelance",
          title: "App & Website Designer",
          company: "Mastercraft",
          country: "United States",
        },
        {
          logo: crownFund,
          posted: "1mo ago",
          jobType: "Part Time",
          title: "Fullstack Developer",
          company: "Crowdfund",
          country: "New Zealand",
        },
        {
          logo: typeMaster,
          posted: "4d ago",
          jobType: "Part Time",
          title: "Technical Lead Engineer",
          company: "Typemaster",
          country: "United Kingdom",
        },
        {
          logo: scoot,
          posted: "5h ago",
          jobType: "Full Time",
          title: "Senior Software Engineer",
          company: "Scoot",
          country: "United Kingdom",
        },
        {
          logo: blogr,
          posted: "20h ago",
          jobType: "Part Time",
          title: "Haskell and PureScript Dev",
          company: "Blogr",
          country: "United States",
        },
        {
          logo: vector,
          posted: "1d ago",
          jobType: "Part Time",
          title: "Midlevel Back End Engineer ",
          company: "Vector",
          country: "Russia",
        },
        {
          logo: officelite,
          posted: "2d ago",
          jobType: "Full Time",
          title: "Senior Application Engineer",
          company: "Office Lite",
          country: "Japan",
        },
        {
          logo: pod,
          posted: "2d ago",
          jobType: "Part Time",
          title: "Remote DevOps Engineer",
          company: "Pod",
          country: "Thailand",
        },
        {
          logo: creative,
          posted: "4d ago",
          jobType: "Part Time",
          title: "Desktop Support Manager",
          company: "Creative",
          country: "Germany",
        },
        {
          logo: poromodo,
          posted: "1w ago",
          jobType: "Full Time",
          title: "iOS Engineer",
          company: "Pomodoro",
          country: "United States",
        },
        {
          logo: maker,
          posted: "1w ago",
          jobType: "Full Time",
          title: "Senior EJB Developer",
          company: "Maker",
          country: "United States",
        },
        {
          logo: coffeeRoaster,
          posted: "1w ago",
          jobType: "Part Time",
          title: "Senior Frontend Developer ",
          company: "Coffeeroasters",
          country: "Singapore",
        },
        {
          logo: maatercraft,
          posted: "2w ago",
          jobType: "Freelance",
          title: "App & Website Designer",
          company: "Mastercraft",
          country: "United States",
        },
        {
          logo: crownFund,
          posted: "1mo ago",
          jobType: "Part Time",
          title: "Fullstack Developer",
          company: "Crowdfund",
          country: "New Zealand",
        },
        {
          logo: typeMaster,
          posted: "4d ago",
          jobType: "Part Time",
          title: "Technical Lead Engineer",
          company: "Typemaster",
          country: "United Kingdom",
        },
      ];
      setAllj(allJobs);
      setFilteredJobs(allJobs);
  }, []);

  const toggleTheme = () => {
      setTheme(!isLight);
      const root = document.documentElement;
      root.classList.toggle('dark-theme', isLight);
  };

  return (
       <Router>
        <Routes>
          <Route path='/' element={<Home isLight={isLight} toggleTheme={toggleTheme} filteredJobs={filteredJobs} setFilteredJobs={setFilteredJobs} allJobs={allJ} setSelectedIndex={setSelectedIndex}/>}/>
          <Route path='/single' element={<SingleJob isLight={isLight} toggleTheme={toggleTheme} filteredJobs={filteredJobs} selectedIndex = {selectedIndex}/>}/>
        </Routes>
       </Router>
    );
}

export default App;

