import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from "../../services/api";

import logoImg from '../../assets/logo.svg'
import './styles.css';

function NewIncident(){

    const [title, setTitle] = useState("");
    const [description, setDestription] = useState("");
    const [value, setValue] = useState(0);

    const ongId = localStorage.getItem("ongId");

    const history = useHistory();

    async function handleIncident(event) {
        event.preventDefault();

        const data = {
            title,
            description, 
            value
        }

        try{
            await api.post("incidents", data, {
                headers: {
                    Authorization: ongId
                }
            })

            history.push("/profile");
        } catch(error) {
            alert("Erro ao cadastrar caso, tente novamente");
        }
    }

    return(
        <div className="new-incident-container">
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

                <form onSubmit={ handleIncident }>

                    <input 
                        placeholder="Título do caso" 
                        value = { title }
                        onChange={ event => setTitle(event.target.value) }
                    />
                    <textarea 
                        placeholder="Descrição" 
                        value = { description }
                        onChange = { event => setDestription(event.target.value) }
                    />
                    <input 
                        placeholder="Valor" 
                        value = { value }
                        onChange = { event => setValue(event.target.value) }
                    />

                    <button className="button">Cadastrar</button>

                </form>
            </div>
        </div>
    )
}

export default NewIncident;