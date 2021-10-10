import { React, useState } from "react";
import { FiLogIn } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import './styles.css'

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

function Logon(){

    const [id, setId] = useState('');

    const history = useHistory();

    async function handleLogin(event) {
        event.preventDefault();

        try {
            const res = await api.post('sessions', { id });

            localStorage.setItem("ongId", id);
            localStorage.setItem("ongName", res.data.name);

            history.push('/profile');
        } catch(error) {
            alert("Login falhou, tente novamente.");
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                
                <img src={ logoImg } alt="Be The Hero" />
                
                <form onSubmit={handleLogin}>
                    <h1 className="title">Faça seu logon</h1>

                    <input 
                        type="text" 
                        placeholder="Sua ID" 
                        value={id}
                        onChange={event => setId(event.target.value)}
                    />
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