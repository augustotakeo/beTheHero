import { React, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi'

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg'

function Profile() {

    const ongId = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongName');

    const history = useHistory();

    const [incidents, setIncidents] = useState([]);

    useEffect(() => {
        console.log(ongId);
        api.get("profile", {
            headers: {
                Authorization: ongId
            }
        }).then( response => setIncidents(response.data))
    }, [ongId])

    async function handleDeleteIncident(id) {
        try {
            await api.delete(`incidents/${id}`, {
                headers:{
                    Authorization: ongId
                }
            })
            
            setIncidents(incidents.filter(incident => incident.id != id));
        } catch(error) {
            alert("Erro ao deletar, tente novamente.")
        }
    }

    function handleLogout() {
        localStorage.clear();
        history.push("/");
    }

    return (
        <div className="profile-container">
            <header>
                <img src={ logoImg } alt="be The Hero" />
                <span>Bem vinda, {ongName}</span>

                <Link to="/incidents/new" className="button">
                    Cadastrar
                </Link>
                <button type="button" onClick={handleLogout}>
                    <FiPower size={18} color="E02041" />
                </button>
            </header>

            <h1>Casos cadastrados</h1>

            <ul>
                {
                    incidents.map(incident => { 
                            return (
                                <li key = {incident.id}>
                                    <strong>CASO:</strong>
                                    <p>{incident.title}</p>

                                    <strong>DESCRIÇÃO:</strong>
                                    <p>{incident.description}</p>

                                    <strong>VALOR:</strong>
                                    <p>
                                        {Intl.NumberFormat("pt-br", {style:"currency", currency:"BRL"})
                                        .format(incident.value)}
                                    </p>

                                    <button type="button" onClick={() => handleDeleteIncident(incident.id)}>
                                        <FiTrash2 src={18} color="#a8a8b3" />
                                    </button>
                                </li>
                            )
                        }
                    )
                }
            </ul>

        </div>
    )
}

export default Profile;