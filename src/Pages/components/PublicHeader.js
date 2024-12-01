import React from 'react';
import { Link } from 'react-router-dom';

const PublicHeader = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/sobre-mim">Sobre a Kenia</Link></li>
          <li><Link to="/procedimentos">Procedimentos</Link></li>
          <li><Link to="/resultados">Resultados</Link></li>
          <li><Link to="/cosmeticos">Cosméticos</Link></li>
          <li><Link to="/espaco">Espaço</Link></li>
          <li><Link to="/contato">Contato</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default PublicHeader;