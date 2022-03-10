import './home.scss';
import MenuItem from 'app/shared/layout/menus/menu-item';
import React from 'react';

import { NavLink as Link } from 'react-router-dom';
import { Row, Col, Alert, Button } from 'reactstrap';

import { useAppSelector } from 'app/config/store';
import { MenuUser } from './home-components';
import { ListaCadastroUser } from 'app/components/lista-cadastro-user';
export const Home = () => {
  const account = useAppSelector(state => state.authentication.account);

  return (
 
    <Row> 
      <Col md="9">
        <h2>Bem vindo {account.login}!</h2>
        <p className="lead">Biomob</p>
        {account?.login ? (
          <>
            <div>
              <Alert color="success">Você está logado como {account.login}.</Alert>
            </div>
            <Col style={{ margin: '5px' }}>
              <MenuUser />
              <div className='container-imagem' >
                <img className='imagem-arvore' src="../../../content/images/arvore.png" alt="Árvore de mãos" />
              </div>
            </Col>{' '}
          </>
        ) : (
          <div>
            
            <Alert color="warning">
              Faça login ou crie uma conta
              <span>&nbsp;</span>
            </Alert>

            <Alert color="warning">
              Não possui conta?&nbsp;
              <Link to="/account/register" className="alert-link">
                Cadastre nova conta
              </Link>
              
            </Alert>
            <ListaCadastroUser />
          </div>
          
        )}
      </Col>
    </Row>
  );
};

export default Home;
