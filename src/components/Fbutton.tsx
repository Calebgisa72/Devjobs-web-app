import './fButton.css';

interface FbuttonProps{
    buttonText: string;
    onClick: () => void;
}

function Fbutton({buttonText , onClick}: FbuttonProps){
    return (
        <button onClick={onClick} className='but'>{buttonText}</button>
    )
}

export default Fbutton;