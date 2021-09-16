import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle, faExclamationCircle, faCog } from '@fortawesome/free-solid-svg-icons';
import logo from '../../../assets/images/logo/logo.png';

import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="action-btn">
                <FontAwesomeIcon className="icon-block" icon={faQuestionCircle} />
                <FontAwesomeIcon className="icon-block" icon={faExclamationCircle} />
                <FontAwesomeIcon className="icon-block" icon={faCog} />
            </div>
        </div>
    )
}

export default Header;