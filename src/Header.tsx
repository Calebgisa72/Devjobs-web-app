import './header.css';
import sun from './starter-code/assets/desktop/icon-sun.svg'
import moon from './starter-code/assets/desktop/icon-moon.svg'
import sunSide from './assets/images/sunSide.svg'
import Quick from './Quick';

function Header(){
    return(
        <div className='back'>
            <div className='headd'>
            <div className='Htitle'>devjobs</div>
            <div className='themeIcon'>
                <img className='' src={sun}/>
                <img className='side' src={sunSide}/>
                <img className='icon' src={moon}/>
            </div>
            </div>
            <div className='Shead'>
                <Quick/>
            </div>
        </div>
    )
}

export default Header;