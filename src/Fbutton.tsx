import './fButton.css';

interface FbuttonProps{
    buttonText: string;
}

function Fbutton({buttonText}: FbuttonProps){
    return (
        <button className='but'>{buttonText}</button>
    )
}

export default Fbutton;