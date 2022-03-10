import React from 'react';

import { NavItem, NavLink, NavbarBrand } from 'reactstrap';
import { NavLink as Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col, Alert, Button } from 'reactstrap';

export const MenuUser = () => (
  <Col style={{ margin: '5px' }}>
    <p>Precisando fazer uma doação ou solicitação de doação?</p>
    <Button tag={Link} style={{ margin: '5px' }} icon="asterisk" to="/cadastro-doacao">
      Listar doação
    </Button>
    <Button tag={Link} style={{ margin: '5px' }} icon="asterisk" to="/Solicitacao">
      Listar Solicitação
    </Button>
    <Button tag={Link} style={{ margin: '5px' }} icon="asterisk" to="/cadastro-doacao/new">
      Fazer Doacao
    </Button>
    <Button tag={Link} style={{ margin: '5px' }} icon="asterisk" to="/solicitacao/new">
      Fazer Solicitacao
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
