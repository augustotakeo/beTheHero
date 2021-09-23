import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg'
import './styles.css';

function NewIncident(){
    return(
        <div className="new-incident">
            <div className="content">
                <section>

                    <img src={ logoImg } alt="be The Hero" />

                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar o herói para resolver isso.</p>
                
                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#e02041" />
                        Voltar para home
                    </Link>
                    
                </section>

                <form>

                    <input placeholder="Título do caso" />
                    <textarea placeholder="Descrição" />
                    <input placeholder="Valor" />

                    <button className="button">Cadastrar</button>

                </form>
            </div>
        </div>
    )
}

export default NewIncident;