import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faKeyboard } from '@fortawesome/free-solid-svg-icons';
import shortid from 'shortid';
import { useHistory } from 'react-router-dom';

import Header from '../templates/Header/Header';
import background_bois from '../../assets/images/home_page/background_bois.png';

import './HomePage.css';

const HomePage = () => {
    const history = useHistory();

    const startCall = () => {
        const uid = shortid.generate();
        history.push(`/${uid}#init`);
    };

    return (
        <div className="home-page">
            <Header />
            <div className="body">
                <div className="left-side">
                    <div className="content">
                        <h2>Salas de Transmissão de Vídeos.</h2>
                        <p>
                            Adaptamos o serviço para reuniões particulares, disponivel para todos os clientes.
                        </p>
                        <div className="action-btn">
                            <button className="btn skin-color" onClick={startCall}>
                                <FontAwesomeIcon className="icon-block" icon={faVideo} />
                                Nova Sala
                            </button>
                            <div className="input-block">
                                <div className="input-section">
                                    <FontAwesomeIcon className="icon-block" icon={faKeyboard} />
                                    <input placeholder="Insira o código ou link" />
                                </div>
                                <button className="btn skin-color">Junte-se</button>
                            </div>
                        </div>
                    </div>
                    <div className="help-text">
                        Leia mais Sobre <a href="https://www.erural.net">Erural</a>
                    </div>
                </div>
                <div className="right-side">
                    <div className="content">
                        <img src={background_bois} alt="pessoas" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;