import './hCard.css';
import { Link } from 'react-router-dom';

interface cardProps{
    indexx: number;
    image: string;
    posted: string;
    type: string;
    title: string;
    company: string;
    country: string;
    setSelectedIndex: (index: number) => void;
}

function Hcard({indexx,image,posted,type,title,company,country,setSelectedIndex}: cardProps){

    return (
        <div className='Hcard'>
            <img className='Himg' src={image}/>
            <div className='cardDet'>
                <div className='smallDetails'>
                    <div className='Htime'>{posted}</div>
                    <span>&#183;</span>
                    <div className='Ctype'>{type}</div>
                </div>
                <Link to={"/single"} className="titleLink">
                <div onClick={()=>{setSelectedIndex(indexx)}} className='Ptitle'>{title}</div>
                </Link>
                <div className='comName'>{company}</div>
            </div>
            <div className='Hcountry'>{country}</div>
         </div>
    )
}

export default Hcard;