import React from 'react';
import styled from 'styled-components';

import {useAuth} from '../../../contexts/Auth';

export default styled(RawSidebar)`
  min-width: 250px;
  height: auto;
  min-height: calc(100vh - 80px);
  background-color: var(--lightest-gray);

  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 30px;

  .navigation-buttons {
      width: 100%;
  }

  .navigation-buttons li {
      font-size: var(--font-sm);

      padding: 15px 5px;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color .2s;
  }

  .navigation-buttons li:hover {
      background-color: var(--lighter-gray);
  } 
`;

function RawSidebar(props) {
  const auth = useAuth();

  async function handleLogout(e) {
    try {
      await auth.logout();
    } catch (error) {
      alert('Não foi possível sair do sistema, tente novamente mais tarde');
    }
  }

  return (
    <div className={props.className}>
      <ul className="navigation-buttons">
        <a href=""><li><i className="fa fa-home"></i> Inicio</li></a>
        <a href=""><li><i className="fa fa-list"></i> Produtos</li></a>
        <a href=""><li><i className="fa fa-group"></i> Clientes</li></a>
        <a href=""><li><i className="fa fa-lock"></i> Administradores</li></a>
        <a onClick={handleLogout}><li><i className="fa fa-sign-out"></i> Sair</li></a>
      </ul>
    </div>
  );
}