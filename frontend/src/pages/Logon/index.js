import React from "react";
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './styles.css'

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

function Logon(){
    return (
        <div className="logon-container">
            <section className="form">
                
                <img src={ logoImg } alt="Be The Hero" />
                
                <form>
                    <h1 className="title">Faça seu logon</h1>

                    <input type="text" placeholder="Sua ID" />
                    <button type="submit" className="button">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#e02041" />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>

            <img src={ heroesImg } alt="Heroes" />

        </div>
    )
}

export default Logon;