import './Footer.css';
import { VERSION_NUMBER } from './util/constants';

export const Footer = () => {
    return <footer className='footer'>
        <div className='version'>v{VERSION_NUMBER}</div>
        <div className='email'>willsmithte@gmail.com</div>
    </footer>;
};