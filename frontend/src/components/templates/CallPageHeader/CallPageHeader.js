import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends, faCommentAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons';

import { formatDate } from "./../../../config/helpers";

import './CallPageHeader.css';

const CallPageHeader = ({ isMessenger, setIsMessenger, messageAlert, setMessageAlert }) => {

    const [currentTime, setCurrentTime] = useState(() => {
        return formatDate();
    });

    useEffect(() => {
        let interval = null;
        interval = setInterval(() => setCurrentTime(formatDate()), 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className="frame-header">
            <div className="header-items icon-block">
                <FontAwesomeIcon className="icon" icon={faUserFriends} />
            </div>
            <div className="header-items icon-block" onClick={() => { setIsMessenger(true); setMessageAlert({}); }}>
                <FontAwesomeIcon className="icon" icon={faCommentAlt} />
                {!isMessenger && messageAlert.alert && (
                    <span className="alert-circle-icon"></span>
                )}
            </div>
            <div className="header-items date-block">{currentTime}</div>
            <div className="header-items icon-block">
                <FontAwesomeIcon className="icon profile" icon={faUserCircle} />
            </div>
        </div>
    )
}

export default CallPageHeader;