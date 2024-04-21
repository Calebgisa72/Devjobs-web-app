import './header.css';
import sun from '../starter-code/assets/desktop/icon-sun.svg'
import moon from '../starter-code/assets/desktop/icon-moon.svg'
import sunSide from '../assets/images/sunSide.svg'
import moonSide from '../assets/images/moonSide.svg'
import { FC } from 'react';

interface HeaderProps {
    isLight: boolean;
    toggleTheme: () => void;
    component: FC<any>;
}

function Header({ isLight, toggleTheme, component: Component }: HeaderProps) {
    const handleTheme = () => {
        toggleTheme();
    };

    return (
        <div className='back'>
            <div className='headd'>
                <div className='Htitle'>devjobs</div>
                <div className='themeIcon'>
                    <img className='' src={sun} alt="Sun icon"/>
                    <img onClick={handleTheme} className='side' src={isLight ? sunSide : moonSide} alt="Theme switch"/>
                    <img className='icon' src={moon} alt="Moon icon"/>
                </div>
            </div>
            <div className='Shead'>
                <Component />
            </div>
        </div>
    );
}

export default Header;
