import React from 'react';
import { Link } from 'react-router-dom';

const AdminHeader = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/cadastro-pacientes">Cadastro de Pacientes</Link></li>
          <li><Link to="/anamnese-form">Ficha de Anamnese</Link></li>
          <li><Link to="/prontuarios">Prontuários</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default AdminHeader;