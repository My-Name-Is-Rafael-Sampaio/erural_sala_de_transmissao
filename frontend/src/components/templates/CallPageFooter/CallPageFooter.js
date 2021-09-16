import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faMicrophone, faPhone, faAngleUp, faClosedCaptioning, faDesktop, faMicrophoneSlash } from '@fortawesome/free-solid-svg-icons';

import './CallPageFooter.css';

const CallPageFooter = ({ isPresenting, stopScreenShare, screenShare, isAudio, toggleAudio, disconnectCall }) => {
    
    return (
        <div className="footer-item">
            <div className="left-item">
                <div className="icon-block">
                    Detalhes da Sala
                    <FontAwesomeIcon className="icon" icon={faAngleUp} />
                </div>
            </div>
            <div className="center-item">
                <div
                    className={`icon-block ${!isAudio ? "red-bg" : null}`}
                    onClick={() => toggleAudio(!isAudio)}
                >
                    <FontAwesomeIcon
                        className="icon"
                        icon={isAudio ? faMicrophone : faMicrophoneSlash}
                    />
                </div>
                <div className="icon-block" onClick={disconnectCall}>
                    <FontAwesomeIcon className="icon red" icon={faPhone} />
                </div>
                <div className="icon-block">
                    <FontAwesomeIcon className="icon" icon={faVideo} />
                </div>
            </div>
            <div className="right-item">
                <div className="icon-block">
                    <FontAwesomeIcon className="icon red" icon={faClosedCaptioning} />
                    <p className="title">Ativar legendas</p>
                </div>

                {isPresenting ? (
                    <div className="icon-block" onClick={stopScreenShare}>
                        <FontAwesomeIcon className="icon red" icon={faDesktop} />
                        <p className="title">Parar de apresentar</p>
                    </div>
                ) : (
                    <div className="icon-block" onClick={screenShare}>
                        <FontAwesomeIcon className="icon red" icon={faDesktop} />
                        <p className="title">Apresentar agora</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CallPageFooter;