import React from 'react';
import { Link } from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi'

import './styles.css';

import logoImg from '../../assets/logo.svg'

function Profile() {
    return (
        <div className="profile-container">
            <header>
                <img src={ logoImg } alt="be The Hero" />
                <span>Bem vinda, APAD</span>

                <Link to="/incidents/new" className="button">
                    Cadastrar
                </Link>
                <button type="button">
                    <FiPower size={18} color="E02041" />
                </button>
            </header>

            <h1>Casas cadastrados</h1>

            <ul>
                <li>
                    <strong>CASO:</strong>
                    <p>caso teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>descrição teste</p>

                    <strong>VALOR:</strong>
                    <p>R$100,00</p>

                    <button type="button">
                        <FiTrash2 src={18} color="#a8a8b3" />
                    </button>
                </li>
                <li>
                    <strong>CASO:</strong>
                    <p>caso teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>descrição teste</p>

                    <strong>VALOR:</strong>
                    <p>R$100,00</p>

                    <button type="button">
                        <FiTrash2 src={18} color="#a8a8b3" />
                    </button>
                </li>
                <li>
                    <strong>CASO:</strong>
                    <p>caso teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>descrição teste</p>

                    <strong>VALOR:</strong>
                    <p>R$100,00</p>

                    <button type="button">
                        <FiTrash2 src={18} color="#a8a8b3" />
                    </button>
                </li>
                <li>
                    <strong>CASO:</strong>
                    <p>caso teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>descrição teste</p>

                    <strong>VALOR:</strong>
                    <p>R$100,00</p>

                    <button type="button">
                        <FiTrash2 src={18} color="#a8a8b3" />
                    </button>
                </li>
            </ul>

        </div>
    )
}

export default Profile;