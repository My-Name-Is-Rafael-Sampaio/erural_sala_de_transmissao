import { Link } from 'react-router-dom';

import Header from '../templates/Header/Header';

import './NoMatch.css';

const NoMatch = () => {
    return (
        <div className="no-match">
            <Header />
            <div className="no-match__content">
                <h2>URL de Sala Inválido.</h2>
                <div className="action-btn">
                    <Link className="btn skin-color" to="/">
                        Voltar para tela inicial
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NoMatch;