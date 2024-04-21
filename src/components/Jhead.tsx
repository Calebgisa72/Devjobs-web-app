import './Jhead.css'

interface JheadProps{
    image: string;
    webLink: string;
    companyName: string;
}

function Jhead({image,webLink,companyName}: JheadProps){
 return(
    <>
        <div className='heaad'>
             <img className='heImag' src={image} alt="" /> 
             <div className='heTitle'>
                <div className='commpa'>{companyName}</div>
                <div className='wlink'>{webLink}</div>
             </div>
             <button className='heBut'>Company site</button>
        </div>
    </>
 )   
}

export default Jhead;