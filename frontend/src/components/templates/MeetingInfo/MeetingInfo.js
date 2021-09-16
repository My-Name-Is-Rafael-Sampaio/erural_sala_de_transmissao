import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faTimes, faUser, faShieldAlt } from '@fortawesome/free-solid-svg-icons';

import './MeetingInfo.css';

const MeetingInfo = ({ setMeetInfoPopup, url }) => {
    return (
        <div className="meeting-info-block">
            <div className="meeting-header">
                <h3>Sua Sala Está Pronta</h3>
                <FontAwesomeIcon className="icon" icon={faTimes} onClick={() => { setMeetInfoPopup(false); }} />
            </div>
            <button className="add-people-btn">
                <FontAwesomeIcon className="icon" icon={faUser} />
                Adicionar Outros
            </button>
            <p className="info-text">
                Ou compartilhe este link da sala com outras pessoas que você deseja adicionar
            </p>
            <div className="meet-link">
                <span>{url}</span>
                <FontAwesomeIcon className="icon" icon={faCopy} onClick={() => navigator.clipboard.writeText(url)} />
            </div>
            <div className="permission-text">
                <FontAwesomeIcon className="icon" icon={faShieldAlt} />
                <p className="small-text">
                    As pessoas que usam este link de sala devem obter sua permissão antes de poderem participar.
                </p>
            </div>
            <p className="small-text">
                Juntou-se como pelezinhomilgrau@gmail.com
            </p>
        </div>
    )
}

export default MeetingInfo;