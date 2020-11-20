import './Footer.css';
import { VERSION_NUMBER } from './util/constants';
import StickyFooter from 'react-sticky-footer';
export const Footer = () => {
    return <StickyFooter>
        <div className='footer'>
            <div className='version'>v{VERSION_NUMBER}</div>
            <div className='email'>willsmithte@gmail.com</div>
        </div>
    </StickyFooter>;
};