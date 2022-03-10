import React from 'react';

import { NavItem, NavLink, NavbarBrand } from 'reactstrap';
import { NavLink as Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Alert, Button } from 'reactstrap';
export const MenuUser = () => (
  <Col style={{ margin: '5px' }}>
    <h3> Precisando fazer uma doação ou solicitação de doação?</h3>
    <Link to={'/cadastro-user/new'}> Atualize seu cadastro para realizar uma ação.</Link>
    <br />
    <br />
    <Button tag={Link} style={{ margin: '5px' }} icon="asterisk" to="/cadastro-doacao">
      Listar Doações
    </Button>
    <Button tag={Link} style={{ margin: '5px' }} icon="asterisk" to="/Solicitacao">
      Listar Solicitações
    </Button>
    <Button tag={Link} style={{ margin: '5px' }} icon="asterisk" to="/cadastro-doacao/new">
      Fazer Doação
    </Button>
    <Button tag={Link} style={{ margin: '5px' }} icon="asterisk" to="/solicitacao/new">
      Fazer Solicitação
    </Button>
  </Col>
);

export const MenuAdmin = () => (
  <Col style={{ margin: '5px' }}>
    <p>Precisando fazer uma doação ou solicitação de doação?</p>
    <Button tag={Link} style={{ margin: '5px' }} icon="asterisk" to="/cadastro-doacao">
      Aprovar Solicitação
    </Button>
    <Button tag={Link} style={{ margin: '5px' }} icon="asterisk" to="/Solicitacao">
      Aprovar Doações
    </Button>
    <Button tag={Link} style={{ margin: '5px' }} icon="asterisk" to="/cadastro-doacao/new">
      Realizar Match
    </Button>
    <Button tag={Link} style={{ margin: '5px' }} icon="asterisk" to="/solicitacao/new">
      Efeuar Ação
    </Button>
    <Button tag={Link} style={{ margin: '5px' }} icon="asterisk" to="/cadastro-doacao/new">
      Consultar Solicitação
    </Button>
    <Button tag={Link} style={{ margin: '5px' }} icon="asterisk" to="/solicitacao/new">
      Consultar doação
    </Button>
    <Button tag={Link} style={{ margin: '5px' }} icon="asterisk" to="/cadastro-doacao/new">
      Transparencia
    </Button>
  </Col>
);
