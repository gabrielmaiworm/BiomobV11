import React from 'react';
import MenuItem from 'app/shared/layout/menus/menu-item';

import { NavDropdown } from './menu-components';

export const EntitiesMenu = props => (
  <NavDropdown icon="th-list" name="Menu" id="entity-menu" data-cy="entity" style={{ maxHeight: '80vh', overflow: 'auto' }}>
    <>{/* to avoid warnings when empty */}</>
    <MenuItem icon="asterisk" to="/cadastro-user">
      Cadastro User
    </MenuItem>
    <MenuItem icon="asterisk" to="/item">
      Item
    </MenuItem>
    <MenuItem icon="asterisk" to="/cadastro-doacao">
      Cadastro Doação
    </MenuItem>
    <MenuItem icon="asterisk" to="/solicitacao">
      Solicitação
    </MenuItem>
    <MenuItem icon="asterisk" to="/acao">
      Ação
    </MenuItem>
    {/* jhipster-needle-add-entity-to-menu - JHipster will add entities to the menu here */}
  </NavDropdown>
);
