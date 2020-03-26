import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'

import api from '../../services/api'
import './styles.css'


import logo from '../../assets/logo.svg'
import herosImg from '../../assets/heroes.png'

export default function Logon(){

    const [ id, setId ] = useState('')
    const history = useHistory()
    async function handleLogin(e){
        e.preventDefault()
        try {
          const response = await api.post('sessions', { id })  
            localStorage.setItem('ongId', id)
            localStorage.setItem('ongName', response.data.name)
            history.push('/profile')
        } catch (error) {
            alert('Falha ao logar, tente novamente!')            
        }
    }
    return (
        <div className="logon-container">
            <section className="form">
            <img src={logo} alt="Logo Be The Hero"/>
            <form onSubmit={handleLogin}>
                <h1>Faça Seu Logon</h1>
                <input 
                placeholder="Seu ID"
                value={id}
                onChange={e => setId(e.target.value)}
                />
                <button className="button" type="submit">Entrar</button>
            <Link to="/register">
                <FiLogIn size={16} color="#e02041"/>
                Não tenho Cadastro</Link>
            </form>

            </section>
            <img src={herosImg} alt="Heros"/>
        </div>
        )
}